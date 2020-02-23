const cards = document.querySelectorAll(".card"),
  imageBackground = document.querySelector(".shop-bg"),
  imageList = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg"
  ];

imageBackground.setAttribute("data-img", imageList);

let numb = 0;

cards.forEach(e => {
  e.addEventListener("mouseover", elem => {
    let img = document
      .querySelector(".shop-bg")
      .getAttribute("data-img")
      .split(",");
    ++numb;
    if (numb > img.length - 1) {
      numb = 0;
    }
    let currImg = img[numb];
    let url = `url("${currImg}")`;

    document.querySelector(".shop-bg").style.backgroundImage = url;
    elem.target.classList.add("active");
  });
  e.addEventListener("mouseout", elem => {
    elem.target.classList.remove("active");
  });
});
