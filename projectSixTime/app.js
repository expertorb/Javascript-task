const sayRaju = function () {
    console.log("RajuAhmed")
}
const textChange = function () {
    document.querySelector('h1').innerHTML = "He is also a backend Developer"
}
const changeTime = setTimeout(textChange, 2000);
const stopText = document.querySelector('#stop');

stopText.addEventListener('click', function () {
    clearTimeout(changeTime);
    console.log("STOPPED")
})
// const sayDate = function (str) {
//     console.log(str, Date.now());
// }
// const interval = setInterval(sayDate, 2000, "Hi Raju");
// clearInterval(interval);

// const textChange = function () {
//     document.querySelector('h1').innerHTML = "backend Developer"
// }
// const setIntervalID = setInterval(textChange , 3000);