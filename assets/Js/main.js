window.onscroll = function () {
    myFunction()
  };
  
  var header = document.getElementById("nav");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.style.transition = ".5s";
    } else {
      header.classList.remove("sticky");
      header.style.transition = ".5s";

    }
  }


// Table Row link
  document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tr[data-href]");
  console.log(rows);

  rows.forEach(row => {
    row.addEventListener("click", () => {
      window.location.href = row.dataset.href;
    });
  });


});






