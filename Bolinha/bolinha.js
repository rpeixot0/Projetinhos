
let e,b,d,ae = 200;
function init(){
    e = document.querySelector("#e");
    b = document.querySelector("#b");
    d = document.querySelector("#d");
    setInterval(passo, 10);
}
function tecla(ev){
    let t = ev.key;
    if(t=="s"){
        ae=ae+10;
        e.style.top=ae+'px';
    } else if(t=='w'){
        ae=ae-10;
        e.style.top=ae+'px'
    }
    if(t=='2'){
        ae=ae+10;
        d.style.top = ae+'px';
    } else if(t=='8'){
        ae=ae-10;
        d.style.top=ae+'px';
    }
}

let ballleft = 1300;
let balltop = 100;
let incleft = -10;
let inctop = 10;
function passo(){
    balltop = balltop + inctop;
    ballleft = ballleft + incleft;
    let b = document.querySelector('#b');
    b.style.top = balltop + 'px';
    b.style.left = ballleft + 'px';
}
