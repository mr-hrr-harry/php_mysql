

function validateForm(e) {
    event.preventDefault()

    // validate regno
    if (document.getElementById("regno").value.trim() == "") {
        document.getElementById("regnoErr").innerHTML = "Please enter the regno!"
        document.getElementById("titleDiv").scrollIntoView()
        setTimeout(() => {
            document.getElementById("regnoErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate name
    if (document.getElementById("name").value.trim() == "") {
        document.getElementById("nameErr").innerHTML = "Please enter the name!"
        document.getElementById("titleDiv").scrollIntoView()
        setTimeout(() => {
            document.getElementById("nameErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate email
    const mailid = document.getElementById("mailid").value
    if (mailid != "") {
        if (! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailid)) ) {
            document.getElementById("mailErr").innerHTML = "Please enter valid email id!"
            document.getElementById("regno").scrollIntoView()
            setTimeout(() => {
                document.getElementById("mailErr").innerHTML = ""
            }, 5000)
            return
        }
    }else {
        document.getElementById("mailErr").innerHTML = "Please enter email id!"
        document.getElementById("regno").scrollIntoView()
        setTimeout(() => {
            document.getElementById("mailErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate age
    if(document.getElementById("age").value.trim()==""){
        document.getElementById("ageErr").innerHTML = "Please enter the age!"
        document.getElementById("name").scrollIntoView()
        setTimeout(() => {
            document.getElementById("ageErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate gender
    var res = Array.from(document.getElementsByName("gender")).filter((elt) => elt.checked)
    if(res.length == 0){
        document.getElementById("mailid").scrollIntoView()
        document.getElementById("genderErr").innerHTML = "Please enter gender!"
        setTimeout(() => {
            document.getElementById("genderErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate domain
    if(document.getElementById("domain").value.trim()==""){
        document.getElementById("age").scrollIntoView()
        document.getElementById("domainErr").innerHTML = "Please enter the domain!"
        setTimeout(() => {
            document.getElementById("doamainErr").innerHTML = ""
        }, 5000)
        return
    }
    
    //validate programming languages
    if(document.getElementById("progLang").value.trim()==""){
        document.getElementById("genderBox").scrollIntoView()
        document.getElementById("progLangErr").innerHTML = "Please enter the Programming Languages known!"
        setTimeout(() => {
            document.getElementById("progLangErr").innerHTML = ""
        }, 5000)
        return
    }

    // validate checkbox
    res = Array.from(document.getElementsByClassName("checkOptions")).filter((elt) => elt.checked)
    console.log(res)
    if (res.length == 0) {
        document.getElementById("domain").scrollIntoView()
        document.getElementById("progPltfmErr").innerHTML = "Please select atleast one entry for coding platfroms!"
        setTimeout(() => {
            document.getElementById("progPltfmErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate dropdown
    if (document.getElementById("department").value == "none") {
        document.getElementById("progLang").scrollIntoView()
        document.getElementById("deptErr").innerHTML = "Please select your Department!"
        setTimeout(() => {
            document.getElementById("deptErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate password 
    const password = document.getElementById("pass").value.trim()
    if(password != ""){
        console.log(typeof password +" "+password.length);
        if(password.length >= 8){
            if(! (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(password)) ){
                document.getElementById("progLang").scrollIntoView()
                document.getElementById("passwordErr").innerHTML = "Password with one upper, lower, special, digit character each!"
                setTimeout(() => {
                    document.getElementById("passwordErr").innerHTML = ""
                }, 5000)
                return
            }
        }
        else{
            document.getElementById("passwordErr").innerHTML = "Password must have atleast 8 characters!"
            document.getElementById("department").scrollIntoView()
            setTimeout(() => {
                document.getElementById("passwordErr").innerHTML = ""
            }, 5000)
            return
        }
    }else{
        document.getElementById("passwordErr").innerHTML = "Please enter the password!"
        document.getElementById("department").scrollIntoView()
        setTimeout(() => {
            document.getElementById("passwordErr").innerHTML = ""
        }, 5000)
        return
    }

    //validate confirm password
    var confirmPass = document.getElementById("confirmPass").value.trim()
    if(confirmPass != ""){
        if(document.getElementById("pass").value.trim() !== confirmPass){
            document.getElementById("confirmPassErr").innerHTML = "Password mismatching!"
            document.getElementById("department").scrollIntoView()
            setTimeout(() => {
                document.getElementById("confirmPassErr").innerHTML = ""
            }, 5000)
            return
        }
    }
    else{
        document.getElementById("confirmPassErr").innerHTML = "Please enter the confirm password!"
        document.getElementById("department").scrollIntoView()
        setTimeout(() => {
            document.getElementById("passwordErr").innerHTML = ""
        }, 5000)
        return
    }

    document.getElementById("students").submit()

}
