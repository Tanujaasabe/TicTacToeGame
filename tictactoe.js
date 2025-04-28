let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turno=true;
const winpatterns=[
    [0,1,2,],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame =()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>
{
  box.addEventListener("click",()=>
{
   console.log("box was clicked"); 
   if(turno)
    {
        box.innerHTML="O";
        turno=false;
    } 
    else{
     box.innerHTML="X";
     turno=true;
    }
    box.disabled=true;

    checkwinner();
});
});

const disableboxes=()=>{
    for(let box of boxes)
    {
       box.disabled=true; 
    }
}

const enableboxes=()=>{
    for(let box of boxes)
    {
       box.disabled=false; 
       box.innerText="";
    }
}
const showwinner=(winner) =>{
msg.innerText=`congratations,winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
};

const checkwinner =()=>{
    for ( let pattern of winpatterns)
    {
        let post1val=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;
          if(post1val!=""&&post2val!=""&&post3val!="")
            {
               if(post1val===post2val && post2val===post3val)
                {
                   console.log("winner"); 
                  
                   showwinner(post1val);
                } 

            }  
               
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)
