const {normalizeURL} = require("./crawl.js")
const {expect,test} = require("@jest/globals");
const {UrlNormalizationOne} =require("./crawl2.js")
// import normalizeURL from "./crawl";
// import test from "@jest/globals"
// import expect from "@jest/globals"

test("normalizeURL strip protocol",()=>{
    const input="https://blogs.boot.dev/path/";
    const actual=UrlNormalizationOne(input);
    const expected="blogs.boot.dev/path";
    expect(actual).toEqual(expected);
}
)
test("normalizeURL strip triling slash",()=>{
    const input="https://blogs.boot.dev/path/";
    const actual=normalizeURL(input);
    const expected="blogs.boot.dev/path";
    expect(actual).toEqual(expected);
}
)
// test("normalizeURL strip protocol",()=>{
//     const input="https://blogs.boot.dev/path/";
//     const actual=normalizeURL(input);
//     const expected="blogs.boot.dev/path";
//     expect(actual).toEqual(expected);
// }
// )