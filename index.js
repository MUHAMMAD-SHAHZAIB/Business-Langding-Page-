//counter animation

const counterNum = document.querySelectorAll(".counter-number");
const speed = 200;
counterNum.forEach(curElem => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    //  console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);
    //  console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    //  console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

//----------------how to scroll the page-------------
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
