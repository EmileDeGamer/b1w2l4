const SMALLPRICE = 10, MEDIUMPRICE = 12, LARGEPRICE = 14
let prijsS, prijsM, prijsL
let hoeveelheidS, hoeveelheidM, hoeveelheidL
let userInput

alert('Welkom bij de "Pizza Calculator"')

userInput = prompt('U kunt een keuze maken uit 3 verschillende maten pizzas kiezen: small, medium en large')

if (userInput === 'small'){
    hoeveelheidS = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)
    prijsS = hoeveelheidS * SMALLPRICE
    let userInputS = prompt('wilt u nog meer pizzas bestellen?')
    if (userInputS === 'Y'){
        userInput = prompt('U kunt een keuze maken uit 3 verschillende maten pizzas kiezen: small, medium en large')
    }
    else{
        bereken()
    }
}
else if (userInput === 'medium'){
    hoeveelheidM = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)
    prijsM = hoeveelheidM * MEDIUMPRICE
    let userInputM = prompt('wilt u nog meer pizzas bestellen?')
    if (userInputM === 'Y'){
        
    }
    else{
        bereken()
    }
}
else if (userInput === 'large'){
    hoeveelheidL = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)
    prijsL = hoeveelheidL * LARGEPRICE
    let userInputL = prompt('wilt u nog meer pizzas bestellen?')
    if (userInputL === 'Y'){
        
    }
    else{
        bereken()
    }
}

function bereken() {
    let eindPrijs = prijsS + prijsM + prijsL
    document.write("Small: " + hoeveelheidS + "Medium: " + hoeveelheidM + "Large: " + hoeveelheidL)    
}