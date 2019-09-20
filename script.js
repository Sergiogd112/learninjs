function myfunction1() {
    var prom='Darwin';
    alert(prom);
    console.log(prom);
    document.getElementById('demo').innerHTML=prom;
}
aficions = ['Programacio', 'Natacio', 'Series', 'Ciencia', 'IA']

function myfunction3(array,id) {
    console.log(array,id);
    array.forEach(function(element){
        myhtml=document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML=myhtml+'<li>'+element+'</li>\n';
        console.log(myhtml)

    })
}

function myfunction2() {
    document.getElementById('nom').innerHTML='Sergio';
    document.getElementById('cnom').innerHTML='Gomez';
    document.getElementById('birthday').innerHTML='01/01/2002';
}
var ImagineDragons={
    nom:'ImagineDragons',
    genre:'rock',
    country:'Canada',
    discografia:['Night vision','Smoke+Mirrors','Evolve','Origins']
}
function info(){
    document.getElementById('info').innerHTML=`El grup ${ImagineDragons.nom} és un grup de ${ImagineDragons.genre} i es va formar al país ${ImagineDragons.country}`;
}
function disco() {
    document.getElementById('disco').innerHTML='La discografia del grup Imagine Dragons és:\n<ul>\n';

    myfunction3(ImagineDragons.discografia,'disco').then(data=>{
    myhtml=document.getElementById('disco').innerHTML;
    document.getElementById('disco').innerHTML=myhtml+'</ul>';
    });
}
