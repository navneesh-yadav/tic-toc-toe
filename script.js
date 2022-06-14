let turn = "X" // variable for turn ;
let isgameactive = false;

//function helps to change the turn;
const nextTurn = () =>{
            return turn === "X"?"0":"X";
}   
// function to identify winer;
const winner  =()=>{
    let boxtexts = document.getElementsByClassName("box-text");
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
        win.forEach(e =>{
            

            if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
                let z= document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won ";
                isgameactive = true;
                document.querySelector('.alrt').innerText = "Press To Restart";
                alert(z+"\n"+"Press Reset to Restart the match");
            }


        })

}

//Logic of game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let btext = element.querySelector(".box-text");
    element.addEventListener('click',()=>{
        if(btext.innerText === '')
        {
            btext.innerText = turn;
            turn = nextTurn();
            winner();
           
            if(!isgameactive){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

// onclick to reset button which will clear the boxes
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"; 
    isgameactive = false;
})
