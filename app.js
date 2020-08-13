function saveData(){
    var firstName = document.getElementById("firstName");
    var email = document.getElementById("email");
    var number = document.getElementById("number")
    var message = document.getElementById("message");

    var client = {
        firstName: firstName.value,
        email: email.value,
        number: number.value,
        message: message.value
    }
    console.log(client)
}