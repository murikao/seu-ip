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
export const ipRes = async (ip4: string) =>
  await fetch(
    `https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ip4}`
  )

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Fetch data from external API

  const { remoteAddress } = req.connection
  const socketIP = req.socket.remoteAddress
  const ip = remoteAddress || socketIP

  const localIp = /192\.168|^127\./
  const ipValido = /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/g
  const _ip = ip ? (ipValido.test(ip) ? ip.match(ipValido) : '') : ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ip4: any
  if (_ip && Object.prototype.toString.call(_ip) === '[object Array]') {
    ip4 = _ip[0]
  } else {
    if (_ip != null) {
      ip4 = _ip
    }
  }
  ip4 = localIp.test(ip4) ? '' : ip4

  /*  const res = await fetch(
    `https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ip4}`
  )
  const dataProp = await res.json()
 */
  const dataip = await (await ipRes(ip4)).json()

  console.log(new Date())
  // console.log(dataProp)
  console.log('dataip')
  console.log(dataip)

  // Pass data to the page via props
  return { props: { data: dataip } }
}

const Home: NextPage<Props> = ({ data }) => {
  return <Main data={data} />
}
export default Home
