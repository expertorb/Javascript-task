// document.getElementById('red').onclick = function (e) {
//     alert("Its a red Rose")
// typeof, timestamp, defultPrevent, target, toElemnt,sourceElement, Currenttarget, ClintPosition
// }
document.getElementById('images').addEventListener('click', function (e) {
    console.log('click the parrent element ul');
    // console.log(e.target.parentNode.parentNode);
    // console.log(e.target.tagName)


    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove(); 
    }
})

document.getElementById('red').addEventListener('click', function (e) {
    console.log('click the rose');
    e.stopPropagation();
})
document.getElementById('youtube').addEventListener('click', function (e) {
    console.log('click the youtube link');
    e.stopPropagation();
    e.preventDefault()
    
})