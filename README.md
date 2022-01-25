# 一个简单的 node http server 示例

## 解析 IncomingMessage

```javascript
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
  console.log('body: ',requestBodyStr)
})
request.on('end', () => {
  response.statusCode = 200
  response.end('welcome to my server')
})
```

## 命令测试

```bash
node http-server.js
```
```bash
curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d "age=33"  "http://localhost:8080/user?name=laoyang"
```
服务器控制台返回
```text
method: POST
httpVersion: 1.1
url: http://localhost:8080/user?name=laoyang
host: localhost:8080
hostname: localhost
pathname: /user
search: ?name=laoyang
searchParams: name=laoyang
body: age=33
```