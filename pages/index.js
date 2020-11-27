import React  from "react";
import Image from 'next/image'




 

var imgX = require('../images/ip.png');
//import Module from "module"
//var Fs = require("fs")

/* Module._extensions['.png'] = function(module, fn) {
  var base64 = Fs.readFileSync(fn).toString('base64');
  module._compile('module.exports="data:image/jpg;base64,' + base64 + '"', fn);
};
 */
//const imgIp = require( "../images/ip.png")




export async function getServerSideProps({req}) {
  // Fetch data from external API
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  console.log(">>>>>>>"+ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/))
  const ip4=ip.toString().match(/192\.168/)=="192.168"?"":ip
  const res = await fetch(`https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=${ip4}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: {data}  }
}





var geoLocal = {
  status: "success",
  country: "Brazil",
  countryCode: "BR",
  region: "MG",
  regionName: "Minas Gerais",
  city: "Belo Horizonte",
  isp: "Claro S.A."
  
}


function home({data}) {
  
  var ip =""
   const geo = data
  var tela = (<div>Tela de retorno</div>)
   //localizacao(ip).then( geoLocal => { setGeo(geoLocal)
    console.log(geo.status)

     return  (
  <div style={{alignItems: "center",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center"}}>
                        <Image  src={imgX} alt="ip client" width={100} height={120}/>
             <h1 id="centro">Seu ip: <font color="red">{geo.query}</font></h1>
   
             <br/>
             <br/>
             <h2>
             Localização:<font color="red">  {geo.city}, {geo.region}, {geo.country} - ({geo.countryCode})</font>
             <br/>
             <br/>
             Operadora : <font color="red"> {geo.isp}</font></h2>
             <br/>
             <br/>
             <br/>
             <h4>  Desenvolvido por ...
                   <strong> <font color="red"> Murikão</font>
                   </strong>
              </h4>
          </div>)
  } 

  


export default home

