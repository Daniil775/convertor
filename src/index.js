const API_KEY = "b241a1b7d0deda1139243659"
const URL = "https://v6.exchangerate-api.com/v6/b241a1b7d0deda1139243659/latest/USD"

const exchangeBtn = document.querySelector("#exchange")
const fromCurrencyList = document.getElementById("from-currency-list")
const toCurrencyList = document.getElementById("to-currency-list")
let outputValue = document.querySelector(".currency-output-value")


const exchangeRate = async () => {
    const toValue = document.querySelector(".currency-input-value")

    let customURL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrencyList.value}/${toCurrencyList.value}/${toValue.value}`;
    try{
       let data = await fetch(customURL);
       if(data.ok){
        data.json()
        .then(data => {
            console.log(data.conversion_result)
            outputValue.innerHTML = data.conversion_result
        })
       }
    }
    catch(err){
        console.log(err)
    }
}

function init(){

    
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let rates = Object.keys(data.conversion_rates);

        rates.forEach((currency) => {
            let option = document.createElement("option");
            option.value = currency;
            option.text = currency;
            fromCurrencyList.appendChild(option);
            let option2 = document.createElement("option");
            option2.value = currency;
            option2.text = currency;
            toCurrencyList.appendChild(option2);
        })
    })
}

exchangeBtn.addEventListener("click",() =>{
    exchangeRate()
})



init();