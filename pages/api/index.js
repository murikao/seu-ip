export default function handler(req, res) {
  
  res.statusCode = 200
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
     ip = ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/)
  console.log(">>>>>>>api/"+ip)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ "ip":ip[0]}))
  //res.send(req.toString())
}
