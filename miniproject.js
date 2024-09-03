let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbt=document.querySelector("#new");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turn0=true;
const winpattren = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxs.forEach((box) =>{
box.addEventListener("click",()=>{
     if(turn0)
     {
        box.innerText="o";
        turn0=false;
     }else{
        box.innerText="x";
        turn0=true;
     }
     box.disabled=true;
     check();
});
});
const disableboxs =()=>{
    for(let box of boxs)
    { box.disabled=true;}
};
const enableboxs =()=>{
   for(let box of boxs)
   {  box.disabled=false;
     box.innerText="";
   }
};
const showinner=(winner)=>{
   msg.innerText=`congratulation Winner is ${winner}`;
   msgcont.classList.remove("hide");
   disableboxs();
};
const check = () =>{
    for(let p of winpattren)
      {
         let pos1=boxs[p[0]].innerText;
         let pos2=boxs[p[1]].innerText;
         let pos3=boxs[p[2]].innerText;
 
        if(pos1!="" && pos2!="" && pos3!="")
       {
          if(pos1===pos2 &&  pos2===pos3)
           {
              showinner(pos1);
       }
      }
   }
};
const resetgame =()=>{
   turn0=true;
   enableboxs();
   msgcont.classList.add("hide");
};
newbt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);