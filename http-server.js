import http from 'http'

const server = http.createServer()

server.on('request', (request, response) => {
  const {method, url, httpVersion, headers: {host}} = request
  console.log(`method: ${method}`)
  console.log(`httpVersion: ${httpVersion}`)
  const url2 = new URL(`http://${host}${url}`)
  console.log(`url: ${url2}`)
  console.log(`host: ${url2.host}`)
  console.log(`hostname: ${url2.hostname}`)
  console.log(`pathname: ${url2.pathname}`)
  console.log(`search: ${url2.search}`)
  console.log(`searchParams: ${url2.searchParams.toString()}`)
  let requestBodyStr = ''
  request.on('data', (chunk) => {
    requestBodyStr += chunk.toString()
    console.log('body:', requestBodyStr)
  })
  request.on('end', () => {
    response.statusCode = 200
    response.end('welcome to my first server')
  })
})

server.listen(8080)
