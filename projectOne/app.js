// const btns = document.querySelectorAll('.btn');
// const body = document.querySelector('body');

// console.log(btns);
// console.log(body);

// btns.forEach( function (button) {
//     console.log(button);
//     button.addEventListener('click', function(e) {

//         console.log(e);
//         console.log(e.target)
//         if (e.target === gray) {
//             body.style.backgroundColor = "#efefef"
//         }
//         if (e.target === white) {
//             body.style.backgroundColor = "#ffffff"
//         }
//         if (e.target === green) {
//             body.style.backgroundColor = "green"
//         }
//         if (e.target === blue) {
//             body.style.backgroundColor = "blue"
//         }
//         if (e.target === yellow) {
//             body.style.backgroundColor = "yellow"
//         }
//     })

// });

const singleBtn = document.querySelectorAll('.btn');
const body = document.querySelector('body');

singleBtn.forEach(function (button) {
    console.log(button);

    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target === gray) {
            body.style.backgroundColor = "#efefef"
        }
        if (e.target === white) {
            body.style.backgroundColor = "white"
        }
        if (e.target === blue) {
            body.style.backgroundColor = "blue"
        }
        if (e.target === green) {
            body.style.backgroundColor = "green"
        }
        if (e.target === yellow) {
            body.style.backgroundColor = "yellow"
        }
    })
})
