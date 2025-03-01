const form=document.querySelector('form');
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");

function sendEmail(){
    const bodyMessage = `FullName: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        SecureToken: "810116f0-577d-41c1-9bd1-ab80982287a4",
        Host : "smtp.elasticemail.com",
        Username : "minahilnazir10@gmail.com",
        Password : "396C768C3B341BDC5D83527F07FF55D89A65",
        To : 'minahilnazir10@gmail.com',
        From : "minahilnazir10@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items=document.querySelectorAll(".item");

    for (const item of items)  {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
            item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail=document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains
    ("error") && !phone.classList.contains("error") && !subject.classList.contains
    ("error") && !mess.classList.contains("error")) {
        sendEmail();
    }
    form.reset();
    return false;
});

    