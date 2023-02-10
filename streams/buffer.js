// Buffer é a representação de um espaço na memória do computador
// usado para transitar dados muito rápido

const buf = Buffer.from('Hello World')

// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

console.log(buf.toJSON())