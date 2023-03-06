//const button = document.querySelector('.btn');
// const buttons = document.getElementsByClassName('btn'); //2nd

// console.log(buttons[1]); //to explain node list with line 2

// function show() {
//     //button.classList.add('newstyle');
//     button.classList.toggle('newstyle'); //2nd
// };


// button.addEventListener('click', show);

// alternative way to use arrow function

// button.addEventListener('click', () => {button.classList.add('newstyle')});


// Show/Hide Meeting info

// let newDate = new Date();
// let newNumDay = newDate.getDay();
// console.log(newNumDay);

// let meetingDiv = document.querySelector('#meeting');

// if (newNumDay == 1 || newNumDay == 0) {
//     meetingDiv.classList.add('hide');
// } else {
//     meetingDiv.classList.remove('hide');
// }


// Hamburger Menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

function toggleMenu(){
    mainnav.classList.toggle('responsive');
    hambutton.classList.toggle('responsive');
}

hambutton.addEventListener('click', toggleMenu);



let w_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()];
let numDay = mydate.getDay();
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();


//to show mon tues announcement message
const parent = document.querySelector('#meeting');



if (mydate.getDay() == 1 || mydate.getDay() == 2) {
    mainnav.style.top = '180px';
    parent.style.display = 'block';
}

// const joinbtn = document.querySelector('.join');
// const announcement = document.querySelector('#a');

// function takeAway(){
//     //message.style.display = 'none';
//     announcement.removeChild(announcement.childNodes[0]);
// }

// joinbtn.addEventListener('click', takeAway);


// const msg = document.querySelector('#msg');

// const btn = document.querySelector('#btn');


// function takeAway() {
    
// parent.style.display = 'none';
// // parent.removeChild(msg);
// };

// btn.addEventListener('click', takeAway);


// windchill calculation

const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));

console.log(chill);


if (temp <= 50 && ws >= 3) {
    document.querySelector('.wc').textContent = chill;
}


/* storage local and session */

localStorage.setItem('name', 'Julie Anderson - Permanent');
sessionStorage.setItem('class', 'WDD230 - not permanent');