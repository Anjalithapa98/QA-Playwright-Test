function getBrowserConfig(browser) {
    switch(browser) {
        case "chrome":
            return { headless: true };      
        case "firefox":
            return { headless: false };
        case "webkit":
            return { slowMo:50};
        default:
            return { headless: false };
    }
}

//code execution test
console.log(getBrowserConfig("chrome")); //output:{headless:true}
console.log(getBrowserConfig("firefox")); //output:{headless:false}
console.log(getBrowserConfig("webkit")); //output:{slowMo:50}

//function ClickButton(locator){
    //switch(locator){
        //case "login":
        //return
        //}