function validateForm(e) {
    event.preventDefault()

    // validate regno
    if (document.getElementById("regno").value.trim() == "") {
        console.log("Please enter the regno!");
        alert("Please enter the regno!")
        return
    }

    //validate name
    if (document.getElementById("name").value.trim() == "") {
        console.log("Please enter the name!");
        alert("Please enter the name!")
        return
    }

    //validate email
    // const mailid = document.getElementById("mailid").value
    // if (mailid != "") {
    //     if (! (/^[\w.-]+@([a-zA-Z]+\.[a-zA-Z]{2,})$/.test(mailid)) ) {
    //         console.log("Please enter valid email id!");
    //         alert("Please enter valid email id!")
    //         return
    //     }
    // }else {
    //     console.log("Please enter email id!");
    //     alert("Please enter email id!")
    //     return
    // }

    //validate age
    if(document.getElementById("age").value.trim()==""){
        console.log("Please enter the age!");
        alert("Please enter the age!")
        return
    }

    //validate gender
    var res = Array.from(document.getElementsByName("gender")).filter((elt) => elt.checked)
    if(res.length == 0){
        console.log("Please select gender!");
        alert("Please select gender!")
        return
    }

    //validate domain
    if(document.getElementById("domain").value.trim()==""){
        console.log("Please enter the domain!");
        alert("Please enter the domain!")
        return
    }
    
    //validate programming languages
    if(document.getElementById("progLang").value.trim()==""){
        console.log("Please enter the Programming Languages known!");
        alert("Please enter the Programming Languages known!")
        return
    }

    // validate checkbox
    res = Array.from(document.getElementsByClassName("checkOptions")).filter((elt) => elt.checked)
    console.log(res)
    if (res.length == 0) {
        console.log("Please select atleast one entry for coding platfroms!")
        alert("Please select atleast one entry for coding platfroms!")
        return
    }

    //validate dropdown
    if (document.getElementById("department").value == "none") {
        console.log("Please select your Department!");
        alert("Please select your Department!")
        return
    }

    //validate password
    if(document.getElementById("progLang").value.trim()==""){
        console.log("Please enter the Programming Languages known!");
        alert("Please enter the Programming Languages known!")
        return
    }

    //validate confirm password
    if(document.getElementById("pass").value.trim() !== document.getElementById("confirmPass").value.trim()){
        console.log("Password mismatching!");
        alert("Confirm password mismatch password!")
        return
    }

    document.getElementById("students").submit()

}
