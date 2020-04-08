var webdriver = require('selenium-webdriver'), //  including web driver
    By = webdriver.By; //obj have properties 
var driver = new webdriver.Builder() // driver provide interaction with hardware
    .forBrowser('chrome') //mebtioning the browser
    .build(); //Opening our browser

driver.get('https://web.whatsapp.com/'); 


Pause(20, ScrapExample);

function ScrapExample() {
    // statement
    console.log("Scraping.. ");
    // driver.findElement(By.id('email')).sendKeys('imankitrj@gmail.com');
    // driver.findElement(By.id('pass')).sendKeys('king24dinoco');
    // driver.findElement(By.id('u_0_b')).click();

    Pause(50,second);
    // Pause(3, QuitDriver);
}
function message(){
    first();
}
function first(){
    console.log('first');
    var ser = driver.findElement(By.xpath("//*[@id='main']/footer/div[1]/div[2]/div/div[2]"));
    ser.sendKeys('Hello');
    Pause(5,press);
}
function press(){
    var button =driver.findElement(By.xpath("//*[@id='main']/footer/div[1]/div[3]/button")).click();
}

function second(){
    console.log('second');
    var ser = driver.findElement(By.xpath("//*[@id='pane-side']/div[1]/div/div/div[1]/div/div")).click();
    Pause(40,interval);
}
function interval(){
    setInterval(message,1000)
}
//Adding Selenium Wait
function Pause(Time, FuncName) {
    setTimeout(FuncName, Time * 1000);
}
//close and then quiting th webdriver
function QuitDriver() {
    driver.close();
    driver.quit();
}