"use strict"

// let  heads=document.getElementsByTagName("h1");

// for (const item of heads) {
//     console.log(item)
// }


// let elem=document.getElementById("header")

// console.log(elem)


// let elem=document.getElementsByClassName("header")

// console.log(elem)


// let elem =document.querySelector("#header1")

// let elem =document.querySelectorAll("#header1")

// for (const iterator of elem) {

//     console.log(iterator)
    
// }

// console.log(elem)

// let h1 =document.querySelector("#products .card-item2 h1:nth-child(2)")


// let elems=document.querySelectorAll("#products .card-item2 h1")
// for (let i = 0; i < elems.length; i++) {
//     console.log(elems[i])
    
// }

// let element=document.querySelector("#products .card-item1 h1")

// // // console.log(elem.innerText)

// // // let elemText=elem.innerHTML

// // // if(elemText=="salam"){
// // //     console.log("Correct")
// // // }

// // a.innerHTML="<span>Roya</span>";
// // console.log(a)

// // element.style.color="red";  // style verir  elemente . 
// // element.style.backgroundColor="blue";
// // element.style.position="relative";


// // element.className="test";

// // element.classList.add("active");  // yeni class elave edir liste 

// element.classList.add("Roya");

// element.classList.remove("header");


// let button=document.querySelector("#products .switch")

// button.onclick=function(){
//     alert("Clicked1")
// }

// button.onclick=function(){
//     alert("Clicked2")
// }

// button.addEventListener("click",function(){
//     alert("Clicked1")
// })




// let btnOn=document.querySelector("#products .buttons .on")

// let btnOff=document.querySelector("#products .buttons .off")

// let body=document.querySelector("body")

// let icon=document.querySelector("#products .icon i")

// btnOn.addEventListener("click",function(){
//     body.style.backgroundColor="white";
//     icon.style.color="yellow";
// })


// btnOff.addEventListener("click",function(){
//     body.style.backgroundColor="black";
//     icon.style.color="gray";
// })


// icon.addEventListener("click",function(){

//     if(!this.classList.contains("active-icon") && !body.classList.contains("active-body")){
//         this.classList.add("active-icon")
//         body.classList.add("active-body")
//     }else{
//         this.classList.remove("active-icon")
//         body.classList.remove("active-body")
//     }
//     // this.classList.add("active-icon")
//     // body.classList.add("active-body")
// })


// icon.addEventListener("mouseout",function(){
//     console.log("out")
// })

// icon.addEventListener("mouseover",function(){
//     console.log("over")
// })

let btn= document.querySelector("#products button")
let input=document.querySelector("#products input")

let ul=document.querySelector("#products ul")



// let header=document.querySelector("#products h1")

// btn.addEventListener("click",function(){
//     let inputValue=input.value;
//     header.innerText=inputValue;
//     input.value=""

// })

btn.addEventListener("click",function(){
    // let inputValue=input.value;
    // // header.innerText=inputValue;
    // input.value=""

    if(input.value==""){
        alert("Dont empty")
        return ;
    }

    let items=document.querySelectorAll("li");
    for (const item of items) {
        if(item.innerText==input.value){
             input.value=""
             alert("Already exist")
            return;
        }
    }


    let inputValue=input.value;

    let li=document.createElement("li")

    li.className="list-group-item mt-2";

    li.innerText=inputValue

    ul.append(li)


    li.addEventListener("click",function(){
        li.remove(li)
    })

})

