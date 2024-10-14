const defaultRequest = (req,res) => {
    // cevabın durum kodunu belirle
    res.statusCode = 404;

    // cevaba gönderilecek içeriğin tipini header olarak ekle
    // res.setHeader('content-type','application/json');

    // cevabın içeriğini belirle
    res.write(JSON.stringify({message:'istek adresi tanımsız'}))

    // cevabı client'e gönder
    res.end()
}

module.exports=defaultRequest;