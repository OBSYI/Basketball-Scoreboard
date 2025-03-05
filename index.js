//click add score to update current score


let homeScore = 0
let guestScore = 0
let currentscoreEl = document.getElementById("current-score")
let currentscoreElG = document.getElementById("current-score-g")

addScore1 =()=> {
    homeScore += 1
    
    currentscoreEl.textContent = homeScore
}

addScore1G =()=> {
    guestScore += 1
    
    currentscoreElG.textContent = guestScore
}

addScore2 =()=> {
    homeScore += 2
    currentscoreEl.textContent = homeScore
}

addScore2G =()=> {
    guestScore += 2
    currentscoreElG.textContent = guestScore
}

addScore3 =()=> {
    homeScore += 3
    currentscoreEl.textContent = homeScore
}

addScore3G =()=> {
    guestScore += 3
    currentscoreElG.textContent = guestScore
}

reset =()=> {
    homeScore = 0
    guestScore = 0
    currentscoreEl.textContent = homeScore
    currentscoreElG.textContent = guestScore

}