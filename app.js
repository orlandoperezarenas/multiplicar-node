const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./MULTIPLICAR/multiplicar')
    // let base = '5';


let comando = argv._[0]
switch (comando) {
    case 'listar':
        console.log(`listar`);
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log(`crear`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`Archivo creado : ${archivo}`)))
            .catch(err => console.log(colors.red(err)))
        break;
    default:
        console.log(colors.orange(`Comando no encontrado`));
        break;



}
// console.log(process.argv);



// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(argv.base);


// console.log(`Limite ${argv.limite}`);
// console.log(argv2);