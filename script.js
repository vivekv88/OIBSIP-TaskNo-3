console.log("Hello Sir ")

function getconverted(){
    let fromUnit = document.getElementById('fromUnit').value
    let toUnit = document.getElementById('toUnit').value
    let temperature = parseFloat(document.getElementById('temperature').value)

    let convertedValue;
    let resultUnit;
    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                convertedValue = (temperature * 9/5) + 32
                resultUnit = 'F'
            }
            else if(toUnit === 'K'){
                convertedValue = (temperature + 273.15)
                resultUnit = 'K'
            }
            else if(toUnit === 'C'){
                convertedValue = temperature
                resultUnit = 'C'
            }
            else{
                alert("Please select a conversion Unit.") 
            }
            break;
        case 'F':
            if(toUnit === 'C'){
                convertedValue = (temperature - 32) * 5/9
                resultUnit = 'C'
            }
            else if(toUnit === 'K'){
                convertedValue = ((temperature - 32) * 5/9) + 273.15
                resultUnit = 'K'
            }
            else if(toUnit === 'F'){
                convertedValue = temperature
                resultUnit = 'F'
            }
            else{
                alert("Please select a conversion Unit.") 
            }
            break;
        case 'K':
            if(toUnit === 'F'){
                convertedValue = ((temperature - 273.15) * 9/5 )+ 32
                resultUnit = 'F'
            }
            else if(toUnit === 'K'){
                convertedValue = (temperature)
                resultUnit = 'K'
            }
            else if(toUnit === 'C'){
                convertedValue = temperature - 273.15
                resultUnit = 'C'
            }
            else{
                alert("Please select a conversion Unit.") 
            }
            break;
    }

    document.getElementById('result').value = convertedValue.toFixed(2)+ ' \u00B0' + resultUnit;
}
    
    
