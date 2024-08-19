// const valuOne =document.getElementById('title').getAttribute('id'); 
// console.log(valuOne);
// document.getElementById('title').getAttribute('class') 
// document.getElementById('title').setAttribute('class', 'text raju ahmed');

// const title = document.getElementById('title');
// title.style.background = 'red'


// title.innerText
// "DOM learning is the more important field form javascript"
// title.textContent
// "DOM learning is the more important field form javascript"
// title.innerHTML
// "DOM learning is the more important field form javascript <span>this onother one</span>" 
// document.querySelectory('#title") 
// document.querySelectory('.heading") 



// const liColor = document.querySelectorAll('li'); 
// liColor[0].style.backgroundColor = "green" 




// const cil = document.getElementsByClassName('item');
// const lil = Array.from(cil)
// lil.forEach(function (abc) {
//     console.log(abc);
// })
// lil.forEach(function (abc) {
//     abc.style.color = 'red'
// }) 


const parent = document.querySelector('.parents');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[3].innerHtml = "sunday abc");

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i]);
    
}
parent.children[2].style.color = "green";
parent.children[2].style.backgroundColor = "#efefef";
parent.children[2].style.padding = "10px";
const done = parent.firstElementChild.style.coler = "red";
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.child');

console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log(parent.childNodes)





const newDiv = document.createElement('div');
newDiv.className = "main"
newDiv.id = Math.random(Math.random() * 10 + 100);
newDiv.setAttribute('title', 'new title')
newDiv.style.backgroundColor = "green"
newDiv.style.color = "white"
newDiv.style.padding= "20px"

// newDiv.innerText = "New Element of code"

const addText = document.createTextNode("New another code");
newDiv.appendChild(addText)
document.body.appendChild(newDiv)

// console.log(newDiv);



function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li);
}
addLanguage("python");
addLanguage("java");

function addNewName(addName) {
    const li = document.createElement('li');
    li.innerHTML = `${addName}`
    const one = document.querySelector('.addLan')
    one.appendChild(li);
}
addNewName('English');
addNewName('Hindi');

function abcName(item) {
    const li = document.createElement('li');
    const abNew = document.createTextNode(item);
    li.appendChild(abNew)
    // li.appendChild(document.createTextNode(item));
    const acNew =  document.querySelector('.addLan');
    acNew.appendChild(li);
    // document.querySelector('.addLan').appendChild(li)
}
abcName('One New Name')

const secLan = document.querySelector("li:nth-child(2)");
// secLan.innerHTML = "moasdasjo"
const newW = document.createElement('li');

newW.textContent = "Raju Ahmed"
secLan.replaceWith(newW);
newW.style.backgroundColor = "green";
newW.style.padding = "20px";
newW.style.color = "white";


const firstLan = document.querySelector('li:first-child')

firstLan.outerHTML = "<li>Input another new list from Javascript</li>"



