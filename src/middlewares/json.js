export async function json(req, res, next) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  res.setHeader('Content-Type', 'application/json')
}

// O middleware como um interceptador, que recebe a requisição que lida com essa requisição da melhor forma para a aplicação.