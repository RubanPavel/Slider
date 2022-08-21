var btnPrev = document.getElementById("btnPrev");
var btnNext = document.getElementById("btnNext");
var allImg = document.getElementById("imgAdd");

btnPrev.addEventListener("click", onbtnPrev);
btnNext.addEventListener("click", onbtnNext);

// imges array

var imgArray = [];

imgArray.push("http://todofondos.com/bin/fondos/03/37/23d.jpg");
imgArray.push("https://miro.medium.com/max/600/1*09acqpRXNPYJqLNMC_TDlA.jpeg");
imgArray.push(
  "https://wasteadvantagemag.com/wp-content/uploads/2020/06/claudio-guglieri-K2RH1QZdLF4-unsplash.jpg"
);
imgArray.push(
  "https://tintucmoinhat.org/wp-content/uploads/2018/10/mo-thay-ca.jpg"
);
imgArray.push(
  "https://elementy.ru/images/news/the_role_of_atlantic_cod_in_biodiversity_shaping_1_600.jpg"
);

var imgIndex = 0;

allImg.src = imgArray[imgIndex];

btnPrev.disabled = true;

function onbtnPrev() {
  btnNext.disabled = false;
  imgIndex--;
  allImg.src = imgArray[imgIndex];
  if (imgIndex === 0) {
    btnPrev.disabled = true;
  }
}
function onbtnNext() {
  imgIndex++;
  allImg.src = imgArray[imgIndex];
  btnPrev.disabled = false;

  if (imgIndex === imgArray.length - 1) {
    btnNext.disabled = true;
  }
}
