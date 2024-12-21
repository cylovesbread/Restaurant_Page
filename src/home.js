export function homePage() {
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
 content.classList.add("home-content");
 
 homeDiv.appendChild(content);

 const credits = document.createElement("p");
 credits.textContent = 'Photo by fabeveryday';
 credits.classList.add("credits-text");

 content.appendChild(credits);

 return homeDiv;
}
   
