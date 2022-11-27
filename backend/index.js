const http = require('http')
const server = http.createServer(handler)

function handler(req, res) {
  console.log(req.url)  // 印出 req 網址
  if (req.url === '/hello') {
    res.write('<h1>hello!</h1>')
  } else if (req.url === '/bye') {
    res.writeHead(301, {              // 301: 重新導向
      'Location': 'https://www.google.com.tw/'
    })
    res.write('bye!')
  } else {
    res.write('Invalid url')
  }
  res.end()   // 結束這個 response
}
console.log("hi")
server.listen(5001)