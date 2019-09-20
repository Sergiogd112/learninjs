function myfunction1() {
    var prom='Darwin';
    alert(prom);
    console.log(prom);
    document.getElementById('demo').innerHTML=prom;
}
aficions = ['Programacio', 'Natacio', 'Series', 'Ciencia', 'IA']

function myfunction3() {
    aficions.forEach(function(element){
        myhtml=document.getElementById('aficions').innerHTML;
        document.getElementById('aficions').innerHTML=myhtml+'<li>'+element+'</li>\n';
        console.log(myhtml)

    })
}

function myfunction2() {
    document.getElementById('nom').innerHTML='Sergio';
    document.getElementById('cnom').innerHTML='Gomez';
    document.getElementById('birthday').innerHTML='01/01/2002';
}
