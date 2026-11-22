class Browser{

    constructor(name){
        this.name =name
        this.open = true
        console.log(name + " launched");
        
    }
    startBrowser(){
        console.log('Starting the Browser');
        
    }
    closeBrowser(){
        console.log('starting the browser');
        
    }
}

let chrome = new Browser("Chrome")
let firefox = new Browser("Firefox")

console.log(chrome.open)
chrome.closeBrowser()
chrome.startBrowser()
