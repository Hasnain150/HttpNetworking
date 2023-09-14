function normalizeURL(urlString){
    const urlObj=new URL(urlString);
    const url=`${urlObj.hostname}${urlObj.pathname}`;
    if(url.length>0 && url.slice(-1)=="/"){
        return url.slice(0,-1) // slice only returns upto the index and -1 here is the last index so it won't be included in the url :)

    }
    return url;
}
module.exports={
    normalizeURL
}