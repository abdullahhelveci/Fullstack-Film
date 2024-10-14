const http = require("http");
const getRequest = require('./method/get')
const postRequest = require('./method/post')
const deleteRequest = require('./method/delete');
const defaultRequest = require("./method/default");
const optionRequest = require('./method/options')

// 1) server oluştur
const server = http.createServer((req, res) => {

  // bütün cevaplara eklenicek ortak veri tipi headerı ekle
  res.setHeader('content-type','application/json')

  // kaynak paylaşımında sorun yaşamamak için (CORS poli)
  res.setHeader('Access-Control-Allow-Origin','*')

  //  console.log('istek geldi', req.method)
  
// kod kalabalığı olmaması için isteklere cevap gönderen fonksiyonları ayrı dosyalarda tanımladık.
  switch (req.method) {
    case "GET":
      return getRequest(req,res);

    case "POST":
      return postRequest(req,res)

    case "DELETE":
      return deleteRequest(req,res)

      case "OPTIONS":
      return optionRequest(req,res)

      default:
        
        return defaultRequest(req,res)
  }

  // res.end("server saglikli");
});

// 2) belirli bri porta gelen istekleri dinle
const port = 4090;

server.listen(port, () => {
  console.log(`Server gelen istekleri dinlemeye başladı port : ${port}`);
});
