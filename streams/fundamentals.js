// Streams =>

// process.stdin.pipe(process.stdout);

import { Readable, Writable, Transform } from "stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(i.toString());
  
        this.push(buf)
      }
    }, 1000);

  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream());

// Writable Stream =<
// Transform Stream =<
// Readable Stream =<
// Stream Duplex =<

// The difference between writable and readable streams is that
// writable streams are used to write data to a destination,
// while readable streams are used to read data from a source.

// Transform x Writable
  // E aí, Kadu! Blz? Cara, a classe Transform é uma subclasse da classe Duplex, que é uma subclasse da classe Stream, já a classe WriteableStream é uma subclasse da classe Stream, mas não é uma subclasse da classe Duplex, o que significa que não possui as capacidades de leitura e escrita de dados de uma maneira simultânea, por isso não podemos transformar dados com a classe WriteableStream, apenas com a classe Transform. Espero ter ajudado, abs!