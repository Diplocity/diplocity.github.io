const lightBox = document.querySelector(".lightbox");
const lightBoxImg = lightBox.querySelector("img");
const images = document.querySelectorAll(".lightbox-gallery img");

images.forEach(img => {
  img.addEventListener("click", function () {
    lightBox.style.display = "block";
    lightBoxImg.setAttribute("src", this.dataset.imageHd);
  });
});

lightBox.addEventListener("click", function () {
  lightBox.style.display = "none";
});
