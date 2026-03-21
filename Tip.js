
const billamount = document.querySelector("#bill-amount");
const tippercentage = document.querySelector("#tip-percentage");
const People= document.querySelector("#NoOfPeople");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#total-bill");
const result = document.querySelector("#per-person-bill");

calculate.addEventListener("click", () => {
    console.log("clicked")
    if(billamount.value ===""|| tippercentage.value === ""){
        alert("please enter the values");
        return;
    }
     if(billamount.value < 0 || tippercentage.value < 0){
        alert("Please enter positive values");
        return;
    }else{
        const billamountvalue = parseFloat(billamount.value);
        const tippercentagevalue = parseFloat(tippercentage.value);
        const peoplevalue = parseInt(People.value);

        if (peoplevalue <= 0) {
            alert("Number of people must be grater than 0");
            return;
        }

        const tipamount = billamountvalue * (tippercentagevalue / 100);
        const totalbill = billamountvalue + tipamount;
        const perperson = totalbill / peoplevalue;

        output.innerText = totalbill.toFixed(2);
        result.innerText = perperson.toFixed(2);

    }
});




