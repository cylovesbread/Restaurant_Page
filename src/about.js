export function aboutPage() {
  const aboutDiv = document.createElement("div");
   aboutDiv.classList.add("about-div");

   // main container
   const aboutContent = document.createElement("div");
  aboutContent.classList.add("content-container");
  aboutDiv.appendChild(aboutContent);

  //header div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-about-div");
 
  aboutContent.appendChild(titleDiv);
 
  // title header
  const title = document.createElement("p");
  title.classList.add("title-about");
  title.textContent = 'ABOUT US';
 
  titleDiv.appendChild(title);
  
  // content cards
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("cards-container");
  aboutContent.appendChild(cardDiv);

  const card1 = document.createElement("div");
  card1.classList.add("cards-container");
  cardDiv.appendChild(card1);

  const text1 = document.createElement("p");
  text1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium id sapien quis euismod. Vivamus viverra efficitur risus ac interdum. Nullam tincidunt consectetur dolor, id semper leo feugiat vitae. Nullam gravida ac lacus et consectetur. Duis a lacinia tellus. Suspendisse. ';
  card1.appendChild(text1);

  const card2 = document.createElement("div");
  card2.classList.add("cards-container");
  cardDiv.appendChild(card2);

  const text2 = document.createElement("p");
  text2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium id sapien quis euismod. Vivamus viverra efficitur risus ac interdum. Nullam tincidunt consectetur dolor, id semper leo feugiat vitae. Nullam gravida ac lacus et consectetur. Duis a lacinia tellus. Suspendisse. ';
  card2.appendChild(text2);

  const card3 = document.createElement("div");
  card3.classList.add("cards-container");
  cardDiv.appendChild(card3);

  const text3 = document.createElement("p");
  text3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium id sapien quis euismod. Vivamus viverra efficitur risus ac interdum. Nullam tincidunt consectetur dolor, id semper leo feugiat vitae. Nullam gravida ac lacus et consectetur. Duis a lacinia tellus. Suspendisse. ';
  card3.appendChild(text3);
 
  return aboutDiv;
 }