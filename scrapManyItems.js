const puppeteer = require('puppeteer');

(async ()=>{
    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage();
    await page.goto('https://www.thesaurus.com/browse/smart', {
        waitUntil:'load',
        timeout:0
    });

    

    for(i = 1; i < 6; i++){
        var element = await page.waitForSelector("#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(" + i + ") > a")
        var text = await page.evaluate(element => element.textContent, element)
        console.log(text)
       }
    
    browser.close();
})()