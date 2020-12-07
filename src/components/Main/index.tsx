import * as S from './styles'

const Main = ({
  data = {
    status: 'status',
    country: 'country',
    countryCode: 'XX',
    region: 'XX',
    regionName: 'state',
    city: 'city',
    isp: 'Xxxx S.A.',
    query: '127.0.0.0'
  }
}) => {
  const title = 'Seu IP'
  const description = 'Abaixo algumas informações do seu endereço IP'

  const geo = data
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/ip.svg"
        alt="Imagem de localizador tipo google maps azul escrito IP dentro."
      />
      <S.Title>{title}</S.Title>
      <S.IpNumber> {geo.query}</S.IpNumber>
      <S.Description>
        {description}
        <br />
        <br />
        Localização:
        <S.IpInfo>
          {' '}
          {geo.city}, {geo.region}, {geo.country} - ({geo.countryCode})
        </S.IpInfo>
        <br />
        <br />
        Operadora : <S.IpInfo>{geo.isp}</S.IpInfo>
      </S.Description>
      <S.Illustration
        src="/img/worldIp.jpg"
        alt="Um mapa do mundo com linhas ligando os endereços de ip"
      />
    </S.Wrapper>
  )
}
export default Main
