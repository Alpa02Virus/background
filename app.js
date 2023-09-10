var body = document.getElementsByTagName('body')[0];
var btn = document.getElementsByTagName('button')[0];
console.log(body);
var colors = ['brown','aqua','green','white','black','blue'];
var i =-1;
function color(){
    i++;
    random = [Math.floor(Math.random()*(colors.length-1))]
    body.style.backgroundColor=colors[random];
    btn.innerText = colors[random]
    if(i>=colors.length-1){
        i=-1;
    }

}   