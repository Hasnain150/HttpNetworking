const {normalizeURL,getUrlsFromWebsite}=require("./crawl");
const {test,expect}=require("@jest/globals");


test("normlize url Strip HTTP",()=>{
    const link="http://blogs.boot.dev/path/";
    const actual=normalizeURL(link);
    const expected="blogs.boot.dev/path";
    expect(actual).toEqual(expected);
})