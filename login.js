const  puppeteer = require('puppeteer');
const credentials = require('./credentials');
const usernameSelector = '#login-email';
const passwordSelector = '#login-password';
const submitSelector = '#login-submit';


async function startBrowser(){
    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage();
    return {browser,page};
}

async function closeBrowser(){
    return browser.close();
}

async function playTest(url){
    const {browser,page} = await startBrowser();
    page.setViewport({width:1366, height:768});
    await page.goto(url);
    await page.click(usernameSelector);
    await page.keyboard.type(credentials.username);
    await page.click(passwordSelector);
    await page.keyboard.type(credentials.password);
    await page.click(submitSelector);
    await page.waitForNavigation();
    await page.screenshot({path:'linkedin.png'});    
}

(async ()=>{
    await playTest('https://www.linkedin.com/');
    process.exit(1);
})()