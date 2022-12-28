let $=document
let rightAll=$.getElementById("right-to-all")
// console.log(rightAll);
let rightChecked=$.getElementById("right-to-checked")
// console.log(rightChecked);
let leftAll=$.getElementById("left-to-all")
// console.log(leftAll);
let leftChecked=$.getElementById("left-to-checked")
// console.log(leftChecked);
let right=$.querySelector(".right")
// console.log(right);
let left=$.querySelector(".left")
// console.log(left);
let one=$.querySelector(".one")
// console.log(one);
let two=$.querySelector(".two")
// console.log(two);

rightAll.addEventListener("click",right_to_all)

function right_to_all(){
    right.classList.add("disappear");
     two.append(left)
     rightAll.classList.add("disableBtn")
     rightChecked.classList.add("disableBtn")
}

leftAll.addEventListener("click",left_to_all)

function left_to_all(){
    left.classList.add("disappear");
     one.append(right)
     leftAll.classList.add("disableBtn")
     leftChecked.classList.add("disableBtn")
}


rightChecked.addEventListener("click",right_to_checked)
function right_to_checked(){

}


leftChecked.addEventListener("click",left_to_checked)

function left_to_checked(){
    right.forEach(item =>{
        if(item.checked){
            one.append("right")
        }
    }) 
}