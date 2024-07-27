const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const Height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('.results')

    if(Height == " " || Height < 0 || isNaN(Height)){
        result.innerHTML = `Please give a valid Height, as your given input is ${Height}`
    }
    if(Weight == " " || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `Please Enter a vaild Weight, as your given input is ${Weight}`
    }
    else{
        const bmi = (Weight / ((Height*Height) / 10000)).toFixed(2)
        if(bmi < 18.6){
            // console.log(`You are underweight as your BMI is ${bmi}`)
            result.innerHTML = `<span>${name} you are underweight as your BMI is ${bmi}</span>`
        }
        else if(18.6 < bmi < 24.9){
            // console.log(`You are Helthy and your BMI is ${bmi}`)
            result.innerHTML = `<span>You are Healthy and your BMI is ${bmi}</span>`
        }
        else{
            // console.log(`You are OverWeigth, Your BMI is ${bmi} and you really need's to work on your Health`)
            result.innerHTML = `<span>You are OverWeigth, Your BMI is ${bmi} and you really need's to work on your Health</span>`
        }
    }
});