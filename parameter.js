//parameter:url,timeout
const url="https://exmaple.com";
const timeout=5000;
function navigateTo(url, timeout) {
    // Implementation for navigation
    console.log('going to ${url}');
    console.log('timeout: ${timeout}ms');
}
//arguments passed
navigateTo(url);
//timeout deafult value to 5000

//navigateTo(url, timeout);
navigateTo("https://charliyo.com", 5000);
//timeout is now 5000