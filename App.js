var firstname = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

function abc() {
  var obj = {
    firstname: firstname.value,
    email: email.value,
    phone: phone.value,
  };

  console.log(obj);
  firstname.value = "";
  email.value = "";
  phone.value = "";
}
