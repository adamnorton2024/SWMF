var backArr = ["url(./assets/images/bg_science01.jpg)", "url(assets/images/bg_science02.jpg)", "url(assets/images/bg_science03.jpg)", "url(assets/images/bg_science04.jpg)", "url(assets/images/bg_science05.jpg)", "url(assets/images/bg_science06.jpg)"];

var randomBackgroundNumber = Math.floor(Math.random() * backArr.length);
console.log("randome number is " + randomBackgroundNumber);

document.getElementById('bg-pg4').style.backgroundImage = backArr[randomBackgroundNumber];