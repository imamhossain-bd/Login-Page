



document.getElementById('loginBtn').addEventListener('click', function(){
    const validEmail = document.getElementById('emailAddress')
    const emailPattern = /^[a-z-0-9._%+-]+@[a-z-0-9.-]+\.[a-z]{2,}$/;
    if(emailPattern.test(validEmail.value)){
        document.getElementById('emailAddress').style.borderColor = '#228B22'
    }
    else{
        alert('Invalid Your Email Address. Please try again.')
        document.getElementById('emailAddress').style.borderColor = '#ff0000'
    }
}) 