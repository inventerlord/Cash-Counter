let hunderd = document.getElementById("hundred");
let fifty = document.getElementById("fifty");
let twenty = document.getElementById("twenty");
let ten = document.getElementById("ten");
let five = document.getElementById("five");
let one = document.getElementById("one");
let twentyfc = document.getElementById("twentyfc");
let tenc = document.getElementById("tenc");
let fivec = document.getElementById("fivec");
let onec = document.getElementById("onec");
let showresult = document.getElementById("result");
let calbtn = document.getElementById("calbtn");
let clearbtn = document.getElementById("clebtn");
function calculate(){
    
    let vhunderd = hunderd.value*100;
    let vfifty =  fifty.value*50 ;
    let vtwenty = twenty.value*25;
    let vten =  ten.value*10 ;
    let vfive = five.value*5 ;
    let vone =  one.value*1;
    let vtwentyfc = twentyfc.value*0.25;
    let vtenc = tenc.value*0.10; 
    let vfivec =  fivec.value*0.05;  
    let vonec =  onec.value*0.01; 
// alert(vonec);
    let result = vhunderd+vfifty+vtwenty+vten+vfive+vone+vtwentyfc+vtenc+vfivec+vonec;
    showresult.innerHTML = " $"+result;

    
}
function clear(){
    hunderd.value = "";
    fifty.value= "";
    twenty.value = "";
    ten.value = "" ;
    five.value = "" ;
    one.value = "";
    twentyfc.value = "";
    tenc.value = ""; 
    fivec.value = "";  
    onec.value = ""; 
}

calbtn.onclick = calculate;
clearbtn.onclick = clear;