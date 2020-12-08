import Main from 'components/Main'
import { GetServerSideProps, NextPage } from 'next'
import fetch from 'node-fetch'

interface Props {
  data: {
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    isp: string
    query: string
  }
}
/* export const ipRes = async (ip4: string) =>
  await fetch(
    `https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ip4}`
  )
 */
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Fetch data from external API

  // const { remoteAddress } = req.connection
  // const socketIP = req.socket.remoteAddress
  // const ip = remoteAddress || socketIP
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.socket ? req.socket.remoteAddress : null)
  console.log('>>>ip>>>>')
  console.log(ip)

  const localIp = /192\.168|^127\./
  const ipValido = /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/g
  // const _ip = ip ? (ipValido.test(ip) ? ip.match(ipValido) : '') : ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ip4: any
  if (ip && Object.prototype.toString.call(ip) === '[object Array]') {
    ip4 = ip[0]
  } else {
    if (ip != null) {
      ip4 = ip
    } else ip4 = ''
  }
  let ipOk: any
  if (typeof ip4 === 'string')
    // it's a string
    ipOk = ipValido.test(ip4) ? ip4.match(ipValido) : ''
  else ipOk = ''
  // it's something else

  console.log(`ipv4:${ip4} ipReq:${ip} ipValido:${ipOk}`)
  ipOk = localIp.test(ipOk) ? '' : ipOk
  // let res: any
  const res = await fetch(
    `https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ipOk}`
  )

  const dataProp = await res.json()
  // const dataip = await (await ipRes(ip4)).json()

  console.log(new Date())
  // console.log(dataProp)
  console.log('dataProp')
  console.log(dataProp)

  // Pass data to the page via props
  return { props: { data: dataProp } }
}

const Home: NextPage<Props> = ({ data }) => {
  return <>{process.browser && <Main data={data} />}</>
}
export default Home
