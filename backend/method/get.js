const fs = require("fs");

const getRequest = (req, res) => {
  // url'in temel adresini değişkene aktar(sondaki param dışında kalan)
  // const path = req.url.substring(0,req.url.lastIndexOf('/')); => alttakiyle aynı

  const path = req.url.slice(0, 11);

  // url'in sonundaki id değerini değişkene aktar
  const id = req.url.split("/")[3];
  // console.log(id) ==> 5
  // console.log(path) ==> /api/movies

  // url'in sonundaki parametrenin değerini al
  const param = req.url.split("=").pop().toLowerCase().trim();

  // yola id eklenirse bir filmi gönder
  if (path === "/api/movies" && id) {
    // 1) json dosyasından filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // url'deki id'ye karşılık gelen elemanı bul
    const movie = data.find((i) => i.id === id);

    // 3) eğerki film bulunursa client'a gönder
    if (movie) {
      return res.end(JSON.stringify(movie));
    }
    // 4) eğer film bulunamazsa hata gönder
    // eski yöntem ==> res.statusCode = 404;
    res.writeHead(404);

    return res.end(JSON.stringify({ message: "aranılan film bulunamadı" }));
  }

  // temel url'e istek atılırsa bütün filmleri gönder
  if (path === "/api/movies") {
    // 1) json dosyasından filmleri al
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // 2) client'a cevap gönder
    if (param && param !== "/api/movies") {
      // eğer parametre varsa filtrelenmiş cevabı gönder
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(param)
      );
      return res.end(JSON.stringify(filtered));
    }
    // eğer parametre yoksa bütün filmleri gönder
    return res.end(JSON.stringify(movies));
  }

  // yol yanlışsa hata gönder
  res.writeHead(404);
  res.end(JSON.stringify({ message: "yol bulunamadı" }));
};

module.exports = getRequest;
