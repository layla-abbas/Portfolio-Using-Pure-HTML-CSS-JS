let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};


const toggle = document.getElementById("toggle");
const html = document.querySelector("html");
const sun = document.getElementById("fa-sun");

toggle.onclick = function() {
  toggle.classList.toggle("active");
  html.classList.toggle("active");
  sun.classList.toggle("active");
}

const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// function sendEmail (){
// const bodyMessage = `Full Name : ${fullname.value} <br> Email : ${email.value} <br>
// Phone Number : ${phone.value} <br Subject : ${subject.value} <br> Message : ${message.value} <br>`

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "superherrro624@gmail.com",
//     Password : "5CB188BB3E6C31D4EB415C3E8492FA92E705",
//     To : 'superherrro624@gmail.com',
//     From : "superherrro624@gmail.com",
//     Subject : subject.value ,
//     Body : bodyMessage
// }).then(
//   message => {
//     if (message == "OK"){
//       Swal.fire({
//         title: "Success",
//         text: "Message Sent Seccessfully !",
//         icon: "success"
//       });
//     }
//   }
// );

// }

function checkInputs(){

  const items = document.querySelectorAll(".item")

  for (const item of items){
    if (item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  }

  if (items[1].value != ""){
    checkEmail();
  }

  items[1].addEventListener("keyup" , ()=>{
    checkEmail();
  });

  item.addEventListener("keyup" , ()=> {
    if (item.value != ""){
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }

    else {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  })
}

function checkEmail(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email2");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != ""){
      errorTxtEmail.innerText ="*Enter a vaild email address";
    }

    else {
      errorTxtEmail.innerText ="*Email Address can't be blank";
    }
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}


form.addEventListener("submit", (e) =>{
e.preventDefault();
checkInputs();
  // sendEmail();

;})