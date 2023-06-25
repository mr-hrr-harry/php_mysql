function validateLogin(e){
    event.preventDefault()

    
    //validate email
    const mailid = document.getElementById("mailid").value
    if (! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailid)) ) {
        throwErr("mailErr", "Please enter valid email id!", "regno", "mailid")
        return
    }

    document.getElementById("students").submit()

    var allInputs = document.querySelectorAll('input')
    allInputs.forEach((eachInput) => {
        eachInput.value = ""
    })

}