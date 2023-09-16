const { crawl } = require("./crawl");
function main(){
    if(process.argv.length<3){
        console.log("Website not Provided");
        process.exit(1);

    }
    if(process.argv.length>3){
        console.log("Too many Arguments in the command prompt");
        process.exit(1);
    }
   let x=crawl(process.argv[2]);
   console.log(x);
    
}
main();