//isteğin body kısmındaki veriye erişmek için parça parça gelen bütün bytleri birleştirip fonksiyonun çağırıldığı yere return edicez

const bodyParser = (req) =>{
    return new Promise((reseolve,reject) => {
        try{
            let body = '';

            // frontend'den body'nin her parçası geldiğiinde onu alıcaz ve yukarıdaki değişkene eklicez
            req.on('data', (chunk) => {
                body+=chunk
            })

            // yüklenme bittiğinde json verisini js verisine çevir
            req.on('end',() => {
            // fonksiyonun çağırıldığı yere body içeriğini return et
                reseolve(JSON.parse(body))
            })
        }catch(err){
            // hata oluşursa hatayı döndürebilmek için
            reject(err)
        }
    })
}

module.exports = bodyParser;