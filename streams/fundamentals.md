Para passar os dados de uma stream para outra é utilizado a função pipe()

Como exemplo:

process.stdin => Leitura/entrada (Readable)
process.stdout => Escrita/saída (Writable)
process.stdin
  .pipe(process.stdout);
A função pipe pega os dados inseridos na stream de entrada e envia para a stream de saída.

Já dentro dessa stream OneToHundredStream, que o Diego criou de exemplo, é necessário sim enviar o valor com this.push(buffer) e para indicar que acabou de enviar é só enviar this.push(null).

Porém no dia a dia raramente será utilizado dessa forma.