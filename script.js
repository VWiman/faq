// Start sections at 3 as there already are 3 posts
let sections = 3;

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

// Fetch the posts
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const list = await response.json();
  list.forEach((item) => {
    // Increase sections for each post
    sections++;
    // Seperate the Body and Title from the post
    let body = item.body;
    let title = item.title;
    let postBody = document.createElement("div");
    let postTitle = document.createElement("div");
    let accordion = document.querySelector(".accordion");

    title.toString();
    body.toString();

    // Uppercase first letter in title and Body
    title = title.charAt(0).toUpperCase() + title.slice(1);
    body = body.charAt(0).toUpperCase() + body.slice(1);

    // Add the EventListener
    postTitle.addEventListener("click", toggle);
    if (sections % 2 == 0) {
      postTitle.setAttribute("class", "section even");
    } else {
      postTitle.setAttribute("class", "section odd");
    }

    // Set attribute and append title
    postTitle.setAttribute("id", `section${sections}`);
    postTitle.textContent = `${title}?`;
    accordion.appendChild(postTitle);

    // Set attribute and append body
    postBody.setAttribute("class", "description");
    postBody.textContent = `${body}.`;
    accordion.appendChild(postBody);
  });
  return list;
}

// Run script
getPosts();
