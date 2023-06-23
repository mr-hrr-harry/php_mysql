function validateForm(e) {
    event.preventDefault()

    // validate regno
    if (document.getElementById("regno").value.trim() == "") {
        throwErr("regnoErr", "Please enter the regno!", "titleDiv", "regno")
        return
    }

    //validate name
    if (document.getElementById("name").value.trim() == "") {
        throwErr("nameErr", "Please enter the name!", "titleDiv", "name")
        return
    }

    //validate email
    const mailid = document.getElementById("mailid").value
    if (mailid != "") {
        if (! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailid)) ) {
            throwErr("mailErr", "Please enter valid email id!", "regno", "mailid")
            return
        }
    }else {
        throwErr("mailErr", "Please enter email id!", "regno", "mailid")
        return
    }

    //validate age
    if(document.getElementById("age").value.trim()==""){
        throwErr("ageErr", "Please enter the age!", "name", "age")
        return
    }

    //validate gender
    var res = Array.from(document.getElementsByName("gender")).filter((elt) => elt.checked)
    if(res.length == 0){
        throwErr("genderErr", "Please enter gender!", "mailid", "none")
        return
    }

    //validate domain
    if(document.getElementById("domain").value.trim()==""){
        throwErr("domainErr", "Please enter the domain!", "age", "domain")
        return
    }
    
    //validate programming languages
    if(document.getElementById("progLang").value.trim()==""){
        throwErr("progLangErr", "Please enter the Programming Languages known!", "genderBox", "progLang")
        return
    }

    // validate checkbox
    res = Array.from(document.getElementsByClassName("checkOptions")).filter((elt) => elt.checked)
    if (res.length == 0) {
        throwErr("progPltfmErr", "Please select atleast one entry for coding platfroms!", "domain", "none")
        return
    }

    //validate dropdown
    if (document.getElementById("department").value == "none") {
        throwErr("deptErr", "Please select your Department!", "progLang", "department")
        return
    }

    //validate password 
    const password = document.getElementById("pass").value.trim()
    if(password != ""){
        console.log(typeof password +" "+password.length);
        if(password.length >= 8){
            if(! (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(password)) ){
                throwErr("passwordErr", "Password with one upper, lower, special, digit character each!", "progLang", "pass")
                return
            }
        }
        else{
            throwErr("passwordErr", "Password must have atleast 8 characters!", "progLang", "pass")
            return
        }
    }else{
        throwErr("passwordErr", "Please enter the password!", "progLang", "pass")
        return
    }

    //validate confirm password
    var confirmPass = document.getElementById("confirmPass").value.trim()
    if(confirmPass != ""){
        if(document.getElementById("pass").value.trim() !== confirmPass){
            throwErr("confirmPassErr", "Password mismatching!", "department", "confirmPass")
            return
        }
    }
    else{
        throwErr("confirmPassErr", "Please enter the confirm password!", "department", "confirmPass")
        return
    }

    document.getElementById("students").submit()

}
