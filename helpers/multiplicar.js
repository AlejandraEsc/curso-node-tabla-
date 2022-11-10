const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (tabla = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${tabla} x ${i} = ${tabla * i}\n`;
            consola += `${tabla} ${'x'.blue} ${i} ${'='.yellow} ${tabla * i}\n`;
        }
        if (listar) {
            console.log('====================='.green)
            console.log('     Tabla del:'.green, colors.blue(tabla));
            console.log('====================='.green)

            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
        return `tabla-${tabla}.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}


