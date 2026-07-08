//simulate retry logic
let attempts = 0;
let success = false;
while (!success && attempts < 3) {
    attempts++;
    console.log(`Attempt ${attempts}`);

    //simulate a check
    if (attempts === 3) {
        success = true;
    }
}

//console.log('succeeded:${success}');
//attempt 1 /attempt 2 /attempt 3
//succeeded:true

//while (success & attempts<5){
//}