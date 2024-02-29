const fs = require('fs');
// Importamos el paquete "colors" de la siguiente forma
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++)
        {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${colors.red('x')} ${i} ${colors.red('=')} ${base*i}\n`;           
        }

        if(listar){
            // Implementamos las funcionalidades del paquete "colors"
            console.log(colors.blue('===================='));
            console.log(colors.bgCyan('==='),colors.magenta('Tabla del:'), base, colors.bgCyan('==='));
            console.log(colors.blue('===================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }    

}

module.exports = {
    crearArchivo
}