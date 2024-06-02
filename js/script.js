// const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// function validateEmail(){
//    let emailInput= document.getElementById("emailInput").value
//    let result = document.getElementById("result")

//    if(emailRegex.test(emailInput)){
//         result.textContent = "Correct email format"
//    }
//    else{
//         result.textContent = "Incorrect email format"
//    }
// }


// const numberRegex = /^[0-9]*$/
// function myNumber(){
//     let num = document.getElementById("numberInput").value
//     let err = document.getElementById("error")
//     if(!numberRegex.test(num)){
//         err.textContent = "We allow numbers only"
//     }
//     else{
//         err.textContent = "Nice!!"
//     }
// }

document.addEventListener("DOMContentLoaded", function(){
    const myInput = document.getElementById("myInput")
    const errorMsg = document.getElementById("errorMsg")
    const passInput = document.getElementById("passInput")
    const passErr = document.getElementById("passErr")
    const changeMsg = document.getElementById("changeMsg")

    function validatePassword(){
        if(passInput.value.length < 8){
            passInput.classList.add("error")
            passErr.style.display = "inline"
        }
        else{
            passInput.classList.remove("error")
            passErr.style.display = "none"
        }
    }
    passInput.addEventListener("change", function(){
        changeMsg.style.display = "inline"
        setTimeout(() => changeMsg.style.display = "none", 2000)
    })
    passInput.addEventListener("change", function(){
        validatePassword()
    })


    
    function validateInput(){
        if(myInput.value.trim() === ""){
            myInput.classList.add("error")
            errorMsg.style.display = "inline"
        }
        else{
            myInput.classList.remove("error")
            errorMsg.style.display = "none"
        }
    }

    myInput.addEventListener("blur", function(){
        validateInput()
    })

    myInput.addEventListener("focus", function(){
        myInput.classList.add("focus")
    })

    myInput.addEventListener("focusout", function(){
        myInput.classList.remove("focus")
    })

    myInput.addEventListener("mouseover",function(){
        myInput.style.backgroundColor = "blue"
    })

    myInput.addEventListener("mouseout", function(){
        myInput.style.backgroundColor = ""
    })

    myInput.addEventListener("mousedown", function(){
        myInput.classList.add("mousedown")
    })
    
    myInput.addEventListener("mouseup", function(){
        myInput.classList.remove("mousedown")
        myInput.classList.add("mouseup")
        setTimeout(() => myInput.classList.remove("mouseup"), 200)
    })

    myInput.addEventListener("click", function(){
        myInput.classList.toggle("clicked")
    })

    myInput.addEventListener("dblclick", function(){
        myInput.classList.add("dblclicked")
    })

    myInput.addEventListener("mousemove", function(event){
        console.log(`Mouse position: (${event.clientX}, ${event.clientY})`)
    })


})