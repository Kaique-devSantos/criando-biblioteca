import fs from 'fs';
import chalk from 'chalk';

function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
     return resultados;
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}
 async function pegaArquivo(caminhoDoArquivo) {
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extrairLinks(texto));
    }catch(erro){
        trataErro(erro)
    } 
}

// promisse com then()
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }


// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/');
export default pegaArquivo;

//\[[^[\]]*?\]

//\(https?:\/\/[^\s?#.].[^\s]*\)


// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) 