// let myName = "Saniran Samanta"; // This code goes to stack...

// let anotherName = myName;
// console.log(anotherName);

// anotherName = "Guddu";
// console.log(anotherName);

// let user = {
//     email: "user@gmail.com",
//     upi: "user@oksbi"
// } // This code goes to heap memory.....
// let user2 = user;
// console.log(user2);


let Url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
async function getBitCoinPriceData() {
    let response = await fetch(Url);
    let data = await response.json();
    // console.log(data);
    console.log(`Time is: ${data.time.updated}`);
    console.log(`Rate in USD: ${data.bpi.USD.rate_float}`);
    console.log(`Rate in USD: ${data.bpi.GBP.rate_float}`);
    console.log(`Rate in USD: ${data.bpi.EUR.rate_float}`);
}
setInterval(() => {
    getBitCoinPriceData();
}, 3000);