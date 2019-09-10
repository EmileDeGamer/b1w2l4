//Emile Mol
//Applicatie en Media Ontwikkelaar

//Aanmaken van de variabelen
const SMALLPRICE = 10, MEDIUMPRICE = 12, LARGEPRICE = 14
let prijsS, prijsM, prijsL
let hoeveelheidS, hoeveelheidM, hoeveelheidL
let userInput

//Geeft het welkomstbericht en het keuze menu weer
alert('Welkom bij de "Pizza Calculator"')
main()

//functie die heraangeroepen kan worden
function main(){
    userInput = prompt('U kunt een keuze maken uit 3 verschillende maten pizzas kiezen: small, medium en large')
    choice()
}

//functie die de keuzes controleerd en ervoor zorgt dat de code het gaat bereken of weer terug gaat naar het begin
function choice(){
    if (userInput === 'small'){
        let tempHoeveelheidS = hoeveelheidS
        hoeveelheidS = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)
        let userInputS = prompt('wilt u nog meer pizzas bestellen?', "Y/N")
        if (tempHoeveelheidS > 0){
            hoeveelheidS = parseInt(tempHoeveelheidS) + parseInt(hoeveelheidS)
        }
        if (userInputS === 'Y' || userInputS === 'y'){
            main()
        }
        else{
            bereken()
        }
    }
    else if (userInput === 'medium'){
        let tempHoeveelheidM = hoeveelheidM
        hoeveelheidM = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)
        let userInputM = prompt('wilt u nog meer pizzas bestellen?', "Y/N")
        if (tempHoeveelheidM > 0){
            hoeveelheidM = parseInt(tempHoeveelheidM) + parseInt(hoeveelheidM)
        }
        if (userInputM === 'Y' || userInputM === 'y'){
            main()
        }
        else{
            bereken()
        }
    }
    else if (userInput === 'large'){
        let tempHoeveelheidL = hoeveelheidL
        hoeveelheidL = prompt('Hoeveel pizzas wilt u in het formaat ' + userInput)  
        let userInputL = prompt('wilt u nog meer pizzas bestellen?', "Y/N")
        if (tempHoeveelheidL > 0){
            hoeveelheidL = parseInt(tempHoeveelheidL) += parseInt(hoeveelheidL)
        }
        if (userInputL === 'Y' || userInputL === 'y') {      
            main()
        }
        else{
            bereken()
        }
    }
    else{
        main()
    }
}

//functie die de prijzen berekent en weergeeft
function bereken() {
    if (hoeveelheidL === undefined){
        hoeveelheidL = 0
        prijsL = 0
    }
    else{
        prijsL = hoeveelheidL * LARGEPRICE
    }
    if (hoeveelheidM === undefined){
        hoeveelheidM = 0
        prijsM = 0
    }      
    else{
        prijsM = hoeveelheidM * MEDIUMPRICE
    }
    if (hoeveelheidS === undefined){
        hoeveelheidS = 0
        prijsS = 0
    }
    else{
        prijsS = hoeveelheidS * SMALLPRICE
    }   
    document.write('Small: ' + hoeveelheidS + ' * €' + SMALLPRICE + ' = €' + prijsS + "<br>")
    document.write('Medium: ' + hoeveelheidM + ' * €' + MEDIUMPRICE + ' = €' + prijsM + "<br>")
    document.write('Large: ' + hoeveelheidL + ' * €' + LARGEPRICE + ' = €' + prijsL + "<br>")
    let eindPrijs = prijsS + prijsM + prijsL
    document.write("Totaal: €" + eindPrijs)   
}
