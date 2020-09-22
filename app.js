const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//Para probar que esta funcionando
//console.log(argv.direccion);
let getInfo= async (direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat,  coors.lng);
    
        return `El clima en ${ coors.direccion} es de ${tem}`;
            
    } catch (error) {
    return `No se pudo determinar el clima en ${ direccion }`;        
    }

}

/* 
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e)); 

clima.getClima(9.9280694 , -84.0907246)
    .then (temp => { console.log (temp)
    })
    .catch(e => console.log(e));
 */
getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje))
    .catch( e => console.log(e));
