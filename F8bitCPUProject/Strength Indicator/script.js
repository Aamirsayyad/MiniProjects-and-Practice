const input=document.getElementById("input");
const progress=document.getElementById("progress");
const p =document.getElementById("error-msg");
let timeOut;
input.addEventListener("input", ()=>{
    const ip=input.value;
    if(ip<0 || ip>10){
        progress.style.transition="0.3s";
        progress.style.width="200px";
        progress.style.backgroundColor="rgb(6, 6, 255)";
        progress.style.borderRadius="10px 10px 10px 10px";
        timeOut=setTimeout(()=>{
            p.classList.replace(`${p.classList.value}`,"show");
        },300);
        p.textContent="Invalid Input"
    }
    else{
        clearTimeout(timeOut);
        p.textContent="";
        progress.style.transition="2s";
        const colorVal=ip*10;
        progress.style.backgroundColor=`hsl(${colorVal}, 95%, 41%)`;
        progress.style.width=`${ip*0.1*200}px`;
    
        

    }
    // else if(ip==0){
    //     progress.classList.replace(`${progress.classList.value}`,"zero");
    // } 
    // else if(ip<=2){
    //     // progress.classList.replace(`${progress.classList.value}`,"twenty");
    // } 
    // else if(ip<=4){
    //     // progress.classList.replace(`${progress.classList.value}`,"forty");
    // }
    // else if(ip<=6){
    //     // progress.classList.replace(`${progress.classList.value}`,"sixty");
    // }
    // else if(ip<=8){
    //     // progress.classList.replace(`${progress.classList.value}`,"eighty");
    // }
    // else if(ip<=10){
    //     // progress.classList.replace(`${progress.classList.value}`,"hundred");
    // }
    
})
