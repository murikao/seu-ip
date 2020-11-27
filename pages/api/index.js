export default async function handler(req, res) {
  
  res.statusCode = 200
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
     ip = ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/)
     const ip4=ip.toString().match(/192\.168/)=="192.168"?"":ip
     const resip = await fetch(`https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ip4}`)
     const data = await resip.json()
   
     var resp ={
    cidade: data.city, uf: data.region, pais:data.country, paiscod:data.countryCode, 
     Operadora : data.isp, ip: ip[0]}
  console.log(">>>>>>>api/"+resp)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(resp))
  //res.send(req.toString())
}
