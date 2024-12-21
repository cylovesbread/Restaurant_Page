import './home.css';
import './menu.css';
import './main.css';
import './about.css';
import './contact.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';
import { contactPage } from './contact.js';

// default home 
function homeDefault() {
  const homeDiv = document.createElement("div");
   homeDiv.classList.add("main-div");
 
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-div");
 
  homeDiv.appendChild(titleDiv);
 
  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = 'SUSHIII';
 
  titleDiv.appendChild(title);
 
  const content = document.createElement("div");
  content.classList.add("content");
  
  homeDiv.appendChild(content);

  

  const credits = document.createElement("p");
 credits.textContent = 'Photo by fabeveryday';
  credits.classList.add("credits-text");
 content.appendChild(credits);


  return homeDiv;
 }

//default page
 const mainDiv = document.querySelector("#content");
 mainDiv.appendChild(homeDefault());

 // home btn
 const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
 
  mainDiv.innerHTML = '';

  const home = homePage();
  mainDiv.appendChild(home);
})

//menu btn
const menuBtn = document.querySelector("#menuBtn")
menuBtn.addEventListener("click", () => {
  mainDiv.innerHTML = '';

  const menu = menuPage();
  mainDiv.appendChild(menu);
})

//about btn
const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () =>{
  mainDiv.innerHTML = '';

  const about = aboutPage();
  mainDiv.appendChild(about);
})

//contact btn
const contactBtn = document.querySelector("#contactBtn");
contactBtn.addEventListener("click", () => {
  mainDiv.innerHTML = '';

  const contact = contactPage();
  mainDiv.appendChild(contact);
})