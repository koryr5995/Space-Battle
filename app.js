let homeShip = {
    health: 100,
    firePower: 7,
    accuracy:(Math.floor(Math.random() * 3) + 6) / 10,
    ship:"https://media.indiedb.com/images/games/1/68/67090/spaceship.1.png",
    stillAlive: true
}


let alienShip = {
    health: 60,
    firePower: Math.floor(Math.random() * (12 - 2) - 1),
    accuracy:(Math.floor(Math.random() * 3) + 6) / 10,
    ship:"https://i.pinimg.com/originals/29/99/a8/2999a865a97ca224a6c05a73a027086a.png",
    stillAlive: true
}
let alienShip2 = {
    health: 60,
    firePower: Math.floor(Math.random() * (12 - 2) - 1),
    accuracy:(Math.floor(Math.random() * 3) + 6) / 10,
    ship:"https://i.pinimg.com/originals/41/4b/f7/414bf78283804a8c9901da0e7b912a70.png",
    stillAlive: true
}

const resetGame = () =>{
    if(homeShip.health < 100){
        resetHomeShip1health.defaultValue
    }
    if(alienShip.health < 60){
        alienShip1health.reset(alienShip1health)
    }
    if(alienShip2.health < 60){
        alienShip2health.reset(alienShip2health)
    }
}

const startGame = () =>{
    let firstHShip = document.querySelector('.ship1')
    firstHShip.setAttribute('src',homeShip.ship)
    let firstAShip = document.querySelector('.ship2')
    firstAShip.setAttribute('src',alienShip.ship)
    showHealth.reset()
}

const showHealth = ()=>{
    let homeShip1health = document.querySelector('.bhealth')
    homeShip1health.innerHTML = homeShip.health
    let alienShip1health = document.querySelector('.bhealth2')
    alienShip1health.innerHTML = alienShip.health
}
showHealth()

const showFirePower = () =>{
    let homeShip1FP = document.querySelector('.bfire')
    homeShip1FP.innerHTML = homeShip.firePower
    console.log(homeShip.firePower)
    let alienShip1FP = document.querySelector('.bfire2')
    alienShip1FP.innerHTML = alienShip.firePower
    console.log(alienShip.firePower)
}
showFirePower()

const showAccuracy = () =>{
    let homeShip1acc = document.querySelector('.botacc')
    homeShip1acc.innerHTML = homeShip.accuracy
    console.log(homeShip.accuracy)
    let alienShip1acc = document.querySelector('.botacc2')
    alienShip1acc.innerHTML = alienShip.accuracy
    console.log(alienShip.accuracy)
}
showAccuracy()
const gameOver = () =>{
    if(homeShip.health < 1) {
        homeShip.stillAlive = false
    }
    if (alienShip.health < 1) {
        alienShip.stillAlive = false
    }
}

const newShip = () =>{
    if(alienShip.health < 1){
        let newAlienship = document.querySelector('.ship2')
        newAlienship.setAttribute('src', alienShip2.ship)
        const showNewHealth = () =>{
            let alienShip2health = document.querySelector('.bhealth2')
            alienShip2health.innerHTML = alienShip2.health
            console.log(alienShip2.health)
        }
        showNewHealth()
    }
}

//attack

const homeAttack = () =>{
    if(homeShip.health < 1){
        startGame();
    }
    if(homeShip.accuracy > .3){
        console.log("Attack successful");
        alienShip.health -= homeShip.firePower
        showHealth()
        gameOver()
    }
    if(alienShip.health < 1){
        alienShip2.health -= homeShip.firePower
        showNewHealth()
    }
    
}

const alienAttack = () =>{
    if(alienShip.health < 1){
       return;
    } else{
        (alienShip.accuracy > .5)
            console.log("Attack successful")
            homeShip.health -= alienShip.firePower
            showHealth()
            gameOver()
    }
}

