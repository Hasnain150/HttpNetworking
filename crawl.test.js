const { normalizeURL, getUrlsFromHtml} = require("./crawl.js");
const { expect, test } = require("@jest/globals");
const { UrlNormalizationOne } = require("./crawl2.js")
// import normalizeURL from "./crawl";
// import test from "@jest/globals"
// import expect from "@jest/globals"

test("normalizeURL strip protocol", () => {
  const input = "https://blogs.boot.dev/path";
  const actual = UrlNormalizationOne(input);
  const expected = "blogs.boot.dev/path";
  expect(actual).toEqual(expected);
});
test("normalizeURL strip triling slash", () => {
  const input = "https://blogs.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blogs.boot.dev/path";
  expect(actual).toEqual(expected);
});
test("normlizeURL capitals", () => {
  const input = "https://Blogs.Boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blogs.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("getUrlsFromWebsite absolute urls ", () => {
  const html = `
    <html>
    <body>
    <a href="https://blog.boot.dev/path/"></a>
    <main>
     <h1>HEllo World</h1>
     <a href="https://www.google.com/">Click me</a>
     <a href="/path1/"></a>
     <a href="/path2/"></a>
     <a href="/path3/"></a>
     
    </body>
    </html;. 
    `;
  const baseurl="https://blog.boot.dev";
  const actual=getUrlsFromHtml(html,baseurl);
  const expected=["https://blog.boot.dev/path/","https://www.google.com/","https://blog.boot.dev/path1/","https://blog.boot.dev/path2/","https://blog.boot.dev/path3/"];
  expect(actual).toEqual(expected);
});


test("getUrlsFromWebsite absolute urls ", () => {
    const html = `
      <html>
      <body>
      <a href="https://blog.boot.dev/path/"></a>
      <main>
       <h1>HEllo World</h1>
       <a href="https://www.google.com/">Click me</a>
       <a href="/path1/"></a>
       <a href="/path2/"></a>
       <a href="/path3/"></a>
       <a href="invalidRU">click me!</a>
       
      </body>
      </html;. 
      `;
    const baseurl="https://blog.boot.dev";
    const actual=getUrlsFromHtml(html,baseurl);
    const expected=["https://blog.boot.dev/path/","https://www.google.com/","https://blog.boot.dev/path1/","https://blog.boot.dev/path2/","https://blog.boot.dev/path3/"];
    expect(actual).toEqual(expected);
  });