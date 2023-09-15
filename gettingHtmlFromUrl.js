const {getUrlsFromHtml} = require("./crawl");


async function getURl(link){
    let response=await fetch(link);
    let data=await response.text();
    let arrayA=getUrlsFromHtml(data,link)
    console.log(arrayA)
}
getURl("https://www.codewithharry.com/");
