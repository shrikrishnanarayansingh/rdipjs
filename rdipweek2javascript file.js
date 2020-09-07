function clear_input(){
    document.getElementById("inp1").value='';
    document.getElementById("inp2").value='';
    document.getElementById("res").value='';
}
function add(){
    var a=document.getElementById("inp1").value;
    var b=document.getElementById("inp2").value;
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById("res").value=a+b;
}
function diff(){
    var a=document.getElementById("inp1").value;
    var b=document.getElementById("inp2").value;
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById("res").value=a-b;
}
function div(){
    var a=document.getElementById("inp1").value;
    var b=document.getElementById("inp2").value;
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById("res").value=a/b;
}
function mul(){
    var a=document.getElementById("inp1").value;
    var b=document.getElementById("inp2").value;
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById("res").value=a*b;
}
function percentage(){
    var a=document.getElementById("inp1").value;
    var b=document.getElementById("inp2").value;
    a=parseInt(a);
    b=parseInt(b);
    var o=a/100*b;
    document.getElementById("res").value=o;
}
function absolute(){
    var a=document.getElementById("inp1").value;
    a=parseInt(a);
    document.getElementById("res").value=Math.abs(a);
}
function squareRoot(){
    var a=document.getElementById("inp1").value;
    a=parseInt(a);
    var o=Math.sqrt(a);
    if(!Number.isInteger(o))
        o=o.toFixed(3);
    document.getElementById("res").value=o;
}
function name_val(inputName){
    var name=inputName.value;
    var r=/^[a-zA-Z][a-zA-Z0-9.,$;]+$/;
    if(name.match(r)){
        alert("Ok proceed to Phone No");
        document.getElementById("phn").disabled=false;
    }
    else{
        alert("Enter valid name! first letter should contain alphabets only.");
    }
}
function phn_val(inputPhn){
    var phn=inputPhn.value;
    if(!isNaN(phn)&&phn.length==10){
        alert("Proceed to Email");
        document.getElementById("email").disabled=false;
    }
    else{
        alert("Phone Number should not contain any characters! or it should contain 10 numbers");
    }
}
function email_val(inputEmail){
    var email=inputEmail.value;
    var r1=/@/gi,r2=/./gi;
    if(email.indexOf("@")!=-1&&email.indexOf(".")!=-1){
        alert("Proceed to Submit");
        document.getElementById("submitBtn").disabled=false;
    }
    else{
        alert("Enter proper email!");
    }
}
function isPalin(str){
    str=str.value;
    var arr=[]
    for(i=str.length-1;i>=0;i--){
        arr.push(str[i]);
    }
    var str1=arr.join('');
    if(str==str1)
        return true;
    else
        return false;
}
function isAnagram(ws,w){
    ws=ws.value;
    w=w.value;
    var arr=[],arr1=[];
    for(i=0;i<ws.length;i++){
        arr.push(ws[i]);
    }
    for(i=0;i<w.length;i++){
        arr1.push(w[i]);
    }
    arr.sort();
    arr1.sort();
    while(arr.indexOf(' ')>-1){
        arr.splice(arr.indexOf(' '),1);
    }
    ws=arr.join('');
    w=arr1.join('');
    var n=ws.localeCompare(w);
    if(n==0)
        return true;
    else
        return false;
}
function check(btn){
    if(btn.id=="palinBtn"){
        var pal=document.getElementById("palin_inp");
        document.getElementById("res1").innerHTML=isPalin(pal);
    }
    else{
        var word_str=document.getElementById("word_string");
        var word=document.getElementById("word");
        document.getElementById("res2").innerHTML=isAnagram(word_str,word);
    }
}
function genRandom(){
    var num1=Math.floor(Math.random() * 1001);
    var num2=Math.floor(Math.random() * 1001);
    var str={0:"Human",1:"Cockroach",2:"Nuclear Bomb"},winner;
    num1=num1%3;
    num2=num2%3;
    document.getElementById("out1").innerHTML="Generated random object is "+num1+" i.e "+str[num1];
    document.getElementById("out2").innerHTML="Generated random object is "+num2+" i.e "+str[num2];
    if((num1==0&&num2==1)||(num1==1&&num2==0))
        winner="Surviver is "+str[0];
    else if((num1==1&&num2==2)||(num1==2&&num2==1))
        winner="Surviver is "+str[1];
    else if((num1==0&&num2==2)||(num1==2&&num2==0))
        winner="Surviver is "+str[2];
    else if(num1==num2)
        winner="Both will surive";
    document.getElementById("ran_put").innerHTML=winner;
}
