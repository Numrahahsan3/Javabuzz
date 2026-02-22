fetch("blog.json")
.then(response => response.json())
.then(data => {
let container = document.getElementById("blog-container");

data.forEach(blog => {
let div = document.createElement("div");
div.classList.add("card");
div.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
container.appendChild(div);
});
});