const puppeteer = require('puppeteer');

async function scrape(){
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
}

scrape();