
var dateVariable = new Date()
var CurrentDate = document.getElementById("CurrentDate")
CurrentDate.textContent = `Date: ${dateVariable}`

document.getElementById("Form").addEventListener("submit", function(e){
    e.preventDefault()
    console.log("Button works")
    var checkbox = document.getElementById("checkbox")
    const msPerDay = 1000 * 60 * 60 * 24;

    let appData = {
        S_Name: document.getElementsByClassName("Input")[0].value,
        F_Name: document.getElementsByClassName("Input")[1].value,
        O_Name: document.getElementsByClassName("Input")[2].value,
        Cur_Bal: document.getElementsByClassName("calInput")[0].value,
        Ln_Amt: document.getElementsByClassName("calInput")[1].value,
        Ln_date: document.getElementsByClassName("calInput")[2].value,
        deposit: document.getElementById("L-Depo").value,
        collect: document.getElementById("L-Coll").value,
        curr_date: document.getElementById("CurrentDate").value,
        Opt:{
            option6: document.getElementsByClassName("options")[6].value,
            option7: document.getElementsByClassName("options")[7].value
         },
        acctType: {
            option1: document.getElementsByClassName("op")[1].value,
            option2: document.getElementsByClassName("op")[2].value
        },
        Nxt_loan: document.getElementsByClassName("calInput")[4].value,
        Nxt_Pay: document.getElementsByClassName("calInput")[5].value,
        // confirm: document.getElementById("confirmation").value
    }
    // myDate = new Date()
    // // crrrDate = myDate.toISOString()
    // appData.curr_date.textContent = `Here's todays date ${myDate}`
    console.log(appData.Opt.option7)
    console.log()

    function togglebtn(){
        if(checkbox.checked){
            document.getElementById("btn").disabled = false
            document.getElementById("cWarning").textContent = ""
            
            var sele = document.getElementsByClassName("selInput")[0]
            var acctTYPE = document.getElementsByClassName("selInput")[1]
            let valid = true
            const numberRegex = /^[0-9]*$/

            var lstDepoDate = new Date(appData.deposit)
            var lstColtDate = new Date(appData.collect)
            var dateVariable = new Date()
            var next_loan = new Date (appData.Nxt_loan)
            var next_pay = new Date (appData.Nxt_Pay)

            console.log("Here's Todays Date: ", dateVariable)

            let dateToday= Math.round(dateVariable / msPerDay)
            console.log("Here's Today's Date in plain text: ", dateToday)
            
            console.log("This is the date loan was last collected: ", lstColtDate)
            let last_depo = Math.round(lstDepoDate / msPerDay)
            let end2 = Math.round(lstColtDate / msPerDay)
            console.log("This is the date loan was last collected in figures: ", end2)
            console.log("Date difference: ", (dateToday - last_depo))
            date_difference = dateToday - last_depo

            var N_loan = Math.round(next_loan/msPerDay)
            var N_pay = Math.round(next_pay/msPerDay)

            console.log(N_loan, N_pay)

            duration = lstDepoDate - lstColtDate
            sum = duration/msPerDay
            console.log(Math.round(sum))

            var total = 0
            console.log(total)
            console.log(lstDepoDate)

            if(appData.S_Name === ""){
                valid = false
                document.getElementsByClassName("Input")[0].classList.add("error")
                document.getElementsByClassName("InputBlank")[0].classList.add("block")
            }
            else if(appData.F_Name === ""){
                value = false
                document.getElementsByClassName("Input")[1].classList.add("error")
                document.getElementsByClassName("InputBlank")[1].classList.add("block")
            }
            else if(appData.Cur_Bal === ""){
                value = false
                document.getElementsByClassName("calInput")[0].classList.add("error")
                document.getElementsByClassName("InputBlank")[2].classList.add("block")
            }
            else if(!numberRegex.test(appData.Cur_Bal)){
                value = false
                document.getElementsByClassName("calInput")[0].classList.add("error")
                document.getElementsByClassName("InputError")[0].classList.add("block")
            }
            else if(appData.Ln_Amt === ""){
                value = false
                document.getElementsByClassName("calInput")[1].classList.add("error")
                document.getElementsByClassName("InputBlank")[3].classList.add("block")
            }
            else if(!numberRegex.test(appData.Ln_Amt)){
                value = false
                document.getElementsByClassName("calInput")[1].classList.add("error")
                document.getElementsByClassName("InputError")[1].classList.add("block")
            }
            else if(last_depo > dateToday){
                value = false
                document.getElementById("wrongDate").classList.add("block")
                document.getElementById("L-Depo").classList.add("error")
                document.getElementsByClassName("InputError")[2].classList.add("block")
            }
            else if(end2 > dateToday){
                value = false
                document.getElementById("wrongDate").classList.add("block")
                document.getElementById("L-Coll").classList.add("error")
                document.getElementsByClassName("InputError")[3].classList.add("block")
            }
            else if(end2 > last_depo){
                value = false
                document.getElementById("wrongDate").classList.add("block")
            }

            if (appData.Cur_Bal > appData.Ln_Amt){
                total = total + 10
                console.log("Current balance is greater than loan request, good: " + appData.Cur_Bal)
            }
            else if(appData.Cur_Bal < appData.Ln_Amt){
                console.log("Sorry, your end balance is too low: " + appData.Cur_Bal)
            }
            console.log("Current points are [1]: ", total)
            if((sele.value == appData.Opt.option6) || (sele.value == appData.Opt.option7)){
                total = total + 10
                console.log("Number of months is greater than 6, good:" + sele.value)
            }
            else if((sele.value !== appData.Opt.option6) || (sele.value !== appData.Opt.option7)){
                console.log("Sorry, number of months is too low: " + sele.value)
            }
            console.log("Current points are [2]:" + total)
            if((dateToday - end2) > 180){
                total = total + 10
            }
            console.log("Current points are [3]:", total)
            if(date_difference <= 31){
                console.log("You're a regular depositor: ", date_difference)
                total = total + 5
            }
            else if(date_difference > 31){
                console.log("You've not made any recent deposits: ", date_difference)
            }
            console.log("Current points are [4]:", total)
            if ((N_pay - N_loan) > 180){
                console.log("Repayment period is greater than 6 months", (N_pay - N_loan))
            }
            else if((N_pay - N_loan) <= 180){
                total = total + 5
                console.log("Your repayment date is within 6 months", (N_pay - N_loan))
            }
            console.log("Current points are [5]:", total)
            if (acctTYPE.value == appData.acctType.option1){
                console.log("Account type is: ", acctTYPE.value)
                total = total + 5
                console.log("Current points are [6]:", total)
            }
            else if(acctTYPE.value == appData.acctType.option2){
                console.log("Account type is: ", acctTYPE.value)
                total = total + 10
                console.log("Current points are [6]:", total)
            }
            console.log("Total points are:", total)

            if (total > 30){
                let confirm = document.getElementById("confirmation")
                confirm.classList.add("mb")
                confirm.classList.add("block")
                confirm.textContent = `Congrats dear ${appData.F_Name} ${appData.S_Name}, your Loan has been approved given your satisfactory credit history`
            }
            else if(total < 30){
                let confirm = document.getElementById("confirmation")
                confirm.classList.add("mb")
                confirm.classList.add("block")
                confirm.textContent = `Sorry dear esteemed ${appData.F_Name} ${appData.S_Name}, your credit score has disqualified you from being eligible for this loan. Pls try elsewhere`
            }

        }
        else{
            document.getElementById("btn").disabled = true
            document.getElementById("cWarning").style.color = "red"
            document.getElementById("cWarning").style.textAlign = "center"
            document.getElementById("cWarning").style.fontSize = ".8rem"
            document.getElementById("cWarning").textContent = "You Must Check The Box to Submit"
        }
        
    }
    togglebtn()
    // sett = document.getElementById("Scores")
    // .textContent = `${appData.Opt.option7}`
    checkbox.addEventListener("change", togglebtn)
    // document.getElementsByClassName("Input")[0].classList.remove("error")
    // // document.getElementsByClassName("InputBlank")[0].classList.add("block")
    // document.getElementsByClassName("Input")[1].classList.remove("error")
    // document.getElementsByClassName("InputBlank")[1].classList.add("block")
    // document.getElementsByClassName("Input")[2].classList.remove("error")
    // document.getElementsByClassName("InputBlank")[2].classList.add("block")

})