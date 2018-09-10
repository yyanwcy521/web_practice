function MyClick(){
    alert('Hello World!');
}

window.onload = function(){
    document.getElementById('btn1').onclick = function(){
        alert('Hellw World2!')
    }
}