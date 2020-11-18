const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    for (let i = 0; i <= limite; i++) {
        console.log(colors.blue(`${base} * ${i} = ${i * base}`));
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Èl valor instroducido ${base} no es un numero`)
            return
        }

        let data = ''


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${i * base}\n`;
        };
        fs.writeFile(`TABLAS/data_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                resolve(`TABLAS/data_${base}.txt`)
            }

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla

}