export function contactPage() {
  // main container
  const contactDiv = document.createElement("div");
   contactDiv.classList.add("contact-div");
 
   //content container
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div");
  contactDiv.appendChild(contentDiv);
 
  // header container
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-contact-div");
  contentDiv.appendChild(titleDiv);

  // header text
  const title = document.createElement("p");
  title.classList.add("title-contact");
  title.textContent = 'CONTACT INFO';
 
  titleDiv.appendChild(title);
 
  //contact info container
  const content = document.createElement("div");
  content.classList.add("contact-content");
 contentDiv.appendChild(content);

  const ul = document.createElement("ul");
  content.appendChild(ul);

 const fbLink = document.createElement("a");
 fbLink.href = 'https://www.facebook.com';
 fbLink.textContent = 'FACEBOOK';
 ul.appendChild(fbLink);

 const instaLink = document.createElement("a");
 instaLink.href = 'https://www.instagram.com';
 instaLink.textContent = 'INSTAGRAM';
 ul.appendChild(instaLink);


 const emailLink = document.createElement("a");
 emailLink.href = 'https://mail.google.com';
 emailLink.textContent = 'EMAIL';
 ul.appendChild(emailLink);


  return contactDiv;
 }