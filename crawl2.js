function UrlNormalizationOne(urlString){
    const urlS=new URL(urlString);
    return `${urlS.hostname}${urlS.pathname}`
}
module.exports={
    UrlNormalizationOne
}