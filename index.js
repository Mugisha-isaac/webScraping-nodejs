const puppeteer = require('puppeteer');

async function scrape(){
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();

    //Scraping the first synonym of "smart"
    await page.setDefaultNavigationTimeout(0);

    await page.goto('https://www.thesaurus.com/browse/smart',{
        waitUntil:'load',
        timeout:0
    });
    var element = await page.waitFor("#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a");
    var text = await page.evaluate(element=>element.textContent,element);
    console.log(text);
    browser.close();
}

scrape();