function openNav() {
    document.getElementById("myNav").style.height = "420px";
    document.getElementById("myNav").style.border = "1px solid grey";

  }

  function manish() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.border = "none";

  }

  function clonv() {
    document.getElementById("myNav").style.height = "0%";
  }

  function clonv() {
    document.getElementById("myNav").style.height = "0%";
  }

  function out() {
    document.getElementById("myNav").style.height = "0%";

  }


  // For mobile header
  function openNavm() {
    document.getElementById("myNavm").style.width = "220px";
    document.body.style.backgroundColor = "grey";


  }

  function closeNavm() {
    document.getElementById("myNavm").style.width = "0";
    document.body.style.marginLeft = "0px";
    document.body.style.backgroundColor = "white";

  }

  // categrories list for mbile
  function openNavmm() {
    document.getElementById("myNavmm").style.height = "auto";
  }
  function closeNavmm() {
    document.getElementById("myNavmm").style.height = "0%";
  }
  function openNavmm1() {
    document.getElementById("myNavmm").style.height = "0%";
  }



  




  // custom search  bar

  function openPage() {
    var x = document.getElementById("csbrr").value;

    if (x === "dog") {
      window.open("https://www.boat-lifestyle.com/");
    }

    if (x === "cat") {
      window.open("https://www.blueslag.com/");
    }


    if (x === "product") {
      window.open("https://www.boat-lifestyle.com/collections/true-wireless-earbuds");
    }

  }




  // Slick home page slider


  $('.homepagsldr').slick({
     dots: true,
infinite: true,
speed: 300,


    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  });





  // announcment slider

  $('.ann').slick({
infinite: true,
speed: 300,


    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

