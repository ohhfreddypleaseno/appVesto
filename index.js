var request = require('request'), cheerio = require('cheerio'), res_arr=[];

//Загружаем страницу
request({uri:'https://flutter.dev/', method:'GET', encoding:'binary'},
function (res, page) {
//Передаём страницу в cheerio
var $=cheerio.load(page);
//Идём по DOM-дереву обычными CSS-селекторами
res=$('div.site-banner').text().replace(/[^0-9\.]+/g, "");
version = res.substring(0, 3);
var versions = {
    "Flutter version is": version
};

console.log(JSON.stringify(versions));
});