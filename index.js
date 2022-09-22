const btnEl = document.querySelector(".btn");
const imagecontainerEl = document.querySelector(".image-container");

btnEl.addEventListener("click", () => {
    imageNum = 10;
    loadImage();
})

function loadImage() {
for (let index = 0; index < imageNum; index++) {
    const newimageEl = document.createElement("img");
    newimageEl.src = `https://picsum.photos/300?random = ${Math.floor(Math.random() * 2000)}`;
    console.log(newimageEl.src);
    imagecontainerEl.appendChild(newimageEl);  
}
}