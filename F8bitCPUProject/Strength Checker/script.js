
let inputPasswordObj=document.getElementById("pass-input");
let showPassObj=document.getElementById("showpass");
let inputPassword=inputPasswordObj.value;
let currPasswordLength=inputPassword.length;
let lengthDisplay=document.getElementById("length");
let showPass=true;
let suggestionsObj=document.getElementById("suggestions");

const minPassLen=8;

class ObjBool{
    constructor(obj,bool){
        this.obj=obj;
        this.bool=bool;
    }
}

let MinCharsObj=document.getElementById("min-char");
let UpperCaseObj=document.getElementById("upper");
let LowerCaseObj=document.getElementById("lower");
let NumberObj=document.getElementById("num");
let SpecialObj=document.getElementById("special");
let Ordering=[new ObjBool(MinCharsObj,false), new ObjBool(UpperCaseObj,false), new ObjBool(LowerCaseObj,false) , new ObjBool(NumberObj,false),new ObjBool(SpecialObj,false)];

// Show/Hide Password
showPassObj.addEventListener("click",()=>{
    showPass=!showPass;
    if(showPass){
        inputPasswordObj.type="text";
    }
    else{
        inputPasswordObj.type="password";
    }
})


// Dynamic Length Display
inputPasswordObj.addEventListener("input",()=>{
    fetchPassword();
    lengthDisplay.textContent=currPasswordLength;//display the length dynamically
    updateSuggestions();
});

//fetch the current password
function fetchPassword(){
    inputPasswordObj=document.getElementById("pass-input");
    inputPassword=inputPasswordObj.value;
    currPasswordLength=inputPassword.length;
}
function updateSuggestions(){
    if(currPasswordLength==0){
        suggestionsObj.style.visibility="hidden";
    }
    else{
        suggestionsObj.style.visibility="visible";
    }
    let OBJ=Ordering.find((ele)=>{
        return ele.obj===MinCharsObj;
    })
    if(currPasswordLength<minPassLen){
        OBJ.bool=false;
        OBJ.obj.firstElementChild.classList.add("cross");
        OBJ.obj.firstElementChild.classList.remove("tick");
    }
    else{
        OBJ.bool=true;
        OBJ.obj.firstElementChild.classList.add("tick");
        OBJ.obj.firstElementChild.classList.remove("cross");
    }

    OBJ=Ordering.find((ele)=>{
        return ele.obj===UpperCaseObj;
    })
    if(/[A-Z]/.test(inputPassword)){
        OBJ.bool=true;
        OBJ.obj.firstElementChild.classList.add("tick");
        OBJ.obj.firstElementChild.classList.remove("cross");
    }
    else{
        
        OBJ.bool=false;
        OBJ.obj.firstElementChild.classList.add("cross");
        OBJ.obj.firstElementChild.classList.remove("tick");
    }

    OBJ=Ordering.find((ele)=>{
        return ele.obj===LowerCaseObj;
    })

    if(/[a-z]/.test(inputPassword)){
        OBJ.bool=true;
        OBJ.obj.firstElementChild.classList.add("tick");
        OBJ.obj.firstElementChild.classList.remove("cross");

    }
    else{
        
        OBJ.bool=false;
        OBJ.obj.firstElementChild.classList.add("cross");
        OBJ.obj.firstElementChild.classList.remove("tick");
    }

    OBJ=Ordering.find((ele)=>{
        return ele.obj===NumberObj;
    })
    if(/\d/.test(inputPassword)){
        OBJ.bool=true;
        OBJ.obj.firstElementChild.classList.add("tick");
        OBJ.obj.firstElementChild.classList.remove("cross");
    }
    else{
       

         OBJ.bool=false;
        OBJ.obj.firstElementChild.classList.add("cross");
        OBJ.obj.firstElementChild.classList.remove("tick");
    }


    OBJ=Ordering.find((ele)=>{
        return ele.obj===SpecialObj;
    })

    if(/[!@#$%^&*()]/.test(inputPassword)){
       
        OBJ.bool=true;
        OBJ.obj.firstElementChild.classList.add("tick");
        OBJ.obj.firstElementChild.classList.remove("cross");
    }
    else{
        

        OBJ.bool=false;
        OBJ.obj.firstElementChild.classList.add("cross");
        OBJ.obj.firstElementChild.classList.remove("tick");
    }

    Ordering.sort((a,b)=>{
        if(a.bool===true && b.bool===false){
            return 1;
        }
        else if(a.bool===false && b.bool===true){
            return -1;
        }
        return 0;
    })

    let list=document.getElementById("checklist");
    list.replaceChildren();
    let newDom=Ordering.map((ele)=>{
        return ele.obj;
    })
    list.append(...newDom);
    let ticks=document.getElementsByClassName("tick");
    let cross=document.getElementsByClassName("cross");
    for( let i of ticks){
        i.textContent="✅";
    }
    for( let i of cross){
        i.textContent="❌";
    }
}
