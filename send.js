var webdriver = require('selenium-webdriver'), //  including web driver
    By = webdriver.By; //obj have properties 
var driver = new webdriver.Builder() // driver provide interaction with hardware
    .forBrowser('chrome') //mebtioning the browser
    .build(); //Opening our browser

driver.get('https://web.whatsapp.com/'); 


Pause(20, AutomatedWhatsappMessage);

function AutomatedWhatsappMessage() {
    console.log("Starting Automated replies ");
    Pause(80,searchContact);
    // Pause(3, QuitDriver);
}
function message(){
    messageBody();
}

//Sending Message
function messageBody(){
    console.log('messageBody');
    var ser = driver.findElement(By.xpath("//*[@id='main']/footer/div[1]/div[2]/div/div[2]"));
    ser.sendKeys('Ooo');
    Pause(5,pressSend);
}
function pressSend(){
    var button =driver.findElement(By.xpath("//*[@id='main']/footer/div[1]/div[3]/button")).click();
}


//Searching Conatct
function searchContact(){
    console.log("searchContact");
    var searchbar=driver.findElement(By.xpath("//*[@id='side']/div[1]/div/label/div/div[2]"));
    searchbar.sendKeys("Twilio"); // Enter your contact name as saved in your device
    Pause(10,pressSearch);
}
function pressSearch(){
    console.log("pressSearch");
    driver.findElement(By.xpath("//*[@id='pane-side']/div[1]/div/div/div[2]")).click();
    Pause(40,message);
}


//Sending Message to first pinned contact
function firstPinnedContact(){
    console.log('firstPinnedContact');
    var ser = driver.findElement(By.xpath("//*[@id='pane-side']/div[1]/div/div/div[1]/div/div")).click();
    Pause(40,message);
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
