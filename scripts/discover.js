const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const options = {
    threshold: .5,
    rootMargin: "-50px"
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target);
                preloadImage(entry.target);
                io.unobserve(entry.target); 
            }
        });     
    }, options
);


images.forEach(image => {
    io.observe(image);
});


/* https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/ */

// Days Since Last Visit

if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
} else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}

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
