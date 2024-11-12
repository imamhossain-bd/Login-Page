


document.getElementById('name').addEventListener('keyup', function(event) {
    const getName = event.target.value;
    const nameField = document.getElementById('name')
    const message = document.getElementById('message');

    if (getName.length < 4 || getName.length > 12) {
        nameField.style.borderColor = '#ff0000';
        message.textContent = "Name must be between 4 and 12 characters.";
        message.style.color = "#ff0000";
    }
     else {
        nameField.style.borderColor = '#228B22';
        message.textContent = "Name looks good!";
        message.style.color = "#228B22";
    }
});


document.getElementById('registration').addEventListener('click', function(){

    const name = document.form.name.value
    const email = document.form.email.value
    const password = document.form.password.value
    const address = document.form.textarea.value

    const message = document.getElementById('message')
    const validEmail = document.getElementById('emailAddress')
    const emailPattern = /^[a-z-0-9._%+-]+@[a-z-0-9.-]+\.[a-z]{2,}$/;
    if(emailPattern.test(validEmail.value)){
        validEmail.style.borderColor = "#228B22";
        message.textContent = "Email Address Is valid"
    }
    else{
        message.textContent = "Please Enter Valid Email Address"
        message.style.color = "#ff0000";
    }


    doc = window.open('','','width=500px','height=500px')

    with(document.doc){
        write('Name:' + name);
        write('<br>');
        write('Email:' + email);
        write('<br>');
        write('Number:' + number);

    }



}) 