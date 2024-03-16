var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1000,
  });

  window.addEventListener("scroll",function(){
    let header=document.querySelector("header");
    header.classList.toggle("sticky",scrollY>0);
})

function sendMail(){
    window.location = "mailto:ag594275@mail.com";
}

function resume(){
  window.open('https://drive.google.com/file/d/1NmQX624w6ctsWOHCnjEIc8qvfUsuxkiv/view?usp=sharing');
}

var tablinks=document.getElementsByClassName('tab-link');
var linkcontents=document.getElementsByClassName('link-content');
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove('active-link');
  }
  for(linkcontent of linkcontents){
    linkcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}