let userscore = 0 ;
let compscore = 0 ;

const choices = document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg") ;
const userscorep = document.querySelector("#user-score") ;
const compscorep = document.querySelector("#comp-score") ;
const compgame = () =>{
    const options = ["rock" , "paper" , "scissors"] ;
    const randomidx = Math.floor(Math.random()*3) ;
    return options[randomidx] ;
}

const showwinner = (userwin , userchoice , compchoice) =>{
    if(userwin == true)
    {   userscore++ ;
        userscorep.innerText = userscore ;
        console.log("you win") ; 
       msg.innerText = `You win! Your ${userchoice} beats ${compchoice}` ;
       msg.style.backgroundColor = "green" ;
    }
    else{
        compscore++ ;
        compscorep.innerText = compscore ;
        console.log("you lose") ;
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}` ;
        msg.style.backgroundColor = "red" ;

    }
}
const drawgame = () => {
    console.log("game was draw") ;
    msg.innerText = " Game was Draw , Play again" ;
    msg.style.backgroundColor = "rgb(8, 8, 11)" ;
}

const playgame = (userchoice) => {
console.log("user-choice = " , userchoice) ;
const compchoice = compgame() ;
console.log("comp-choice = " , compchoice) ;
if(userchoice == compchoice)
{drawgame() ;}
else{
    let userwin = true ;
    if(userchoice == "rock"){
        userwin = compchoice=== "paper" ? false : true ;
    }
    else if(userchoice == "paper")
    {
        userwin = compchoice === "scissors" ? false : true ;
    }
    else{
        userwin = compchoice==="rock" ? false : true ;
    }
    showwinner(userwin , userchoice , compchoice) ;
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click" ,() => {
        const userchoice = choice.getAttribute("id") ;
        playgame(userchoice) ;
    }) ;
})