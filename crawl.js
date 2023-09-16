const {JSDOM}= require("jsdom");

function normalizeURL(urlString){
    const urlObj=new URL(urlString);
    const url=`${urlObj.hostname}${urlObj.pathname}`;
    if(url.length>0 && url.slice(-1)=="/"){
        return url.slice(0,-1) // slice only returns upto the index and -1 here is the last index so it won't be included in the url :)

    }
    console.log(url);
    return url;
}
function getUrlsFromHtml(htmlBody,baseUrl){
    let jsdom=new JSDOM(htmlBody);
    const linkElements=jsdom.window.document.querySelectorAll("a");
    let arra=[];
    // map an array of all the a elements and return it
    for(let i of linkElements){
        if(i.href.slice(0,1)=="/"){
            try{
                const newUrl=new URL(`${baseUrl}${i.getAttribute("href")}`)
                arra.push(newUrl.href); 
            }
            catch(err){
                console.log(`You got a error : ${err.message}`);
            }
        
        
        }
        else
        {
            try{
                const newUrl=new URL(i.getAttribute("href"));
                arra.push(newUrl.href); 
            }
            catch(err){
                console.log(`You got a error : ${err.message}`);
            }

        }
    }
    
    return arra;
    
  
}
async function crawl(currentUrl){
    try{
        const htmla = await fetch (currentUrl);
        if(htmla.status>399){
            console.log(`error found in fetching data from the url with error code ${htmla.status} on the page : ${currentUrl}`);
            return;
        }
        const dataa= await htmla.text();

    }  catch (err){
        console.log(`erro found in fetching data : ${err.message}`);    
    }

}

module.exports={
    normalizeURL,
    crawl,
    getUrlsFromHtml
}
