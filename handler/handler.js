function throwErr(mssgDiv, mssg, scrollDiv, inpDiv){
    const division = document.getElementById(mssgDiv.toString())
    const label = document.getElementById(inpDiv.toString())

    division.innerHTML = mssg.toString()
    if(label!=null) label.style.border = "1px solid red"

    document.getElementById(scrollDiv.toString()).scrollIntoView()
    setTimeout(() => {
        division.innerText = ""
        label.style.border = "none"
    }, 5000)
}