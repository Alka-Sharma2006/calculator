let total=0;
let curr="";
let operator=null;
let expression="";
let display=document.getElementById("result");
function isOperator(ch){
    return ch=="+" || ch=="-" || ch=="*" || ch=="/";
}
let btn_7=document.getElementById("box-5");
btn_7.addEventListener("click",function(){
    curr=curr+btn_7.value;
    expression+=btn_7.value;
    display.value+=btn_7.value;
})
let btn_8=document.getElementById("box-6");
btn_8.addEventListener("click",function(){
    curr=curr+btn_8.value;
    expression+=btn_8.value;
    display.value+=btn_8.value;
})
let btn_9=document.getElementById("box-7");
btn_9.addEventListener("click",function(){
    curr=curr+btn_9.value;
    expression+=btn_9.value;
    display.value+=btn_9.value;
})
let btn_4=document.getElementById("box-9");
btn_4.addEventListener("click",function(){
    curr=curr+btn_4.value;
    expression+=btn_4.value;
    display.value+=btn_4.value;
    console.log(curr);
})
let btn_5=document.getElementById("box-10");
btn_5.addEventListener("click",function(){
    curr=curr+btn_5.value;
    expression+=btn_5.value;
    display.value+=btn_5.value;
})
let btn_6=document.getElementById("box-11");
btn_6.addEventListener("click",function(){
    curr=curr+btn_6.value;
    expression+=btn_6.value;
    display.value+=btn_6.value;
})
let btn_1=document.getElementById("box-13");
btn_1.addEventListener("click",function(){
    curr=curr+btn_1.value;
    expression+=btn_1.value;
    display.value+=btn_1.value;
    console.log(curr);
})
let btn_2=document.getElementById("box-14");
btn_2.addEventListener("click",function(){
    curr=curr+btn_2.value;
    expression+=btn_2.value;
    display.value+=btn_2.value;
})
let btn_3=document.getElementById("box-15");
btn_3.addEventListener("click",function(){
    curr=curr+btn_3.value;
    expression+=btn_3.value;
    display.value+=btn_3.value;
})
let plus=document.getElementById("box-16");
plus.addEventListener("click",function(){   
    let lastChar = display.value.slice(-1);
    if(isOperator(lastChar)){
         display.value = display.value.slice(0,-1);
         expression = expression.slice(0,-1);
    }
    expression += "+";
    display.value += "+";
    curr = "";
})
let minus=document.getElementById("box-12");
minus.addEventListener("click",function(){
    let lastChar = display.value.slice(-1);
    if(isOperator(lastChar)){
        display.value = display.value.slice(0,-1);

    expression = expression.slice(0,-1);
    }
    expression += "-";
    display.value += "-";
    curr = "";

})
let division=document.getElementById("box-4");
division.addEventListener("click",function(){
    let lastChar = display.value.slice(-1);
    if(isOperator(lastChar)){
        display.value = display.value.slice(0,-1);
         expression = expression.slice(0,-1);
    }
    expression += "/";
    display.value += "/";
    curr = "";
})
let multi=document.getElementById("box-8");
multi.addEventListener("click",function(){
    let lastChar = display.value.slice(-1);
    if(isOperator(lastChar)){
        display.value = display.value.slice(0,-1);
         expression = expression.slice(0,-1);
    }
    expression += "*";
    display.value += "*";
    curr = "";
})
let ac=document.getElementById("box-1");
ac.addEventListener("click",function(){
    total=0;
    curr="";
    operator=null;
    expression="";
    display.value="";
    console.log("cleared");
})
let del=document.getElementById("box-2");
del.addEventListener("click",function(){
    curr=curr.slice(0,-1);
    display.value = display.value.slice(0,-1);
})
let zero=document.getElementById("box-18");
zero.addEventListener("click",function(){
    curr=curr+zero.value;
    expression+=zero.value;
    display.value=curr;
    console.log(curr);
})
let zero2=document.getElementById("box-17");
zero2.addEventListener("click",function(){
    curr=curr+zero2.value;
    expression+=zero2.value;
    display.value=curr;
    console.log(curr);
})
let dot=document.getElementById("box-19");
dot.addEventListener("click",function(){
    curr=curr+dot.value;
    expression+=dot.value;
    display.value=curr;
    console.log(curr);
})
let percent=document.getElementById("box-3");
percent.addEventListener("click",function(){
    // curr=curr/100; number ke liye tha
    curr = (Number(curr)/100).toString();
    display.value=curr;
    console.log(curr);
})
let equal=document.getElementById("box-20");
    equal.addEventListener("click", function(){
    let answer = eval(expression);
    display.value = answer;
    expression = answer.toString();
    curr = "";
});
