export function menuPage() {
  const menuDiv = document.createElement("div");
   menuDiv.classList.add("menu-div");
 
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-menu-div");
 
  menuDiv.appendChild(titleDiv);
 
  const title = document.createElement("p");
  title.classList.add("title-menu");
  title.textContent = 'MENU';
 
  titleDiv.appendChild(title);
 
  //sushi list menu
  const content = document.createElement("div");
  content.classList.add("menu-content");
  
  const ul = document.createElement("ul");

  const list1 = document.createElement("li");
  list1.textContent = "SASHIMI";
  ul.appendChild(list1);
  const list2 = document.createElement("li");
  list2.textContent = "FUTOMAKI";
  ul.appendChild(list2);
  const list3 = document.createElement("li");
  list3.textContent = "NIGIRI";
  ul.appendChild(list3);
  const list4 = document.createElement("li");
  list4.textContent = "CHIRASHI";
  ul.appendChild(list4);
  const list5 = document.createElement("li");
  list5.textContent = "TEMAKI";
  ul.appendChild(list5);
  const list6 = document.createElement("li");
  list6.textContent = "MAKIZUSHI";
  ul.appendChild(list6);

  content.appendChild(ul);
  menuDiv.appendChild(content);

  //sushi images
  const contentImg = document.createElement("div");
  contentImg.classList.add("menu-img-container");
  menuDiv.appendChild(contentImg);
  
  const img1 = document.createElement("div");
  img1.classList.add("img1");
  contentImg.appendChild(img1);

  const img1Name= document.createElement("p");
  img1Name.classList.add("img1-name");
  img1Name.textContent = 'SUSHI IMAGE 1';
  img1.appendChild(img1Name)

  const img2 = document.createElement("div");
  img2.classList.add("img2");
  contentImg.appendChild(img2);

  const img2Name= document.createElement("p");
  img2Name.classList.add("img2-name");
  img2Name.textContent = 'SUSHI IMAGE 2';
  img2.appendChild(img2Name)

  const img3 = document.createElement("div");
  img3.classList.add("img3");
  contentImg.appendChild(img3);

  const img3Name= document.createElement("p");
  img3Name.classList.add("img3-name");
  img3Name.textContent = 'SUSHI IMAGE 3';
  img3.appendChild(img3Name)

 

  return menuDiv;
 }