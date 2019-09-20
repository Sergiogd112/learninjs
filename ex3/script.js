aficions = ['Programacio', 'Natacio', 'Series', 'Ciencia', 'IA']

function myfunction() {
    var names = aficions;
    var theName = name.value;
    names.push(theName);
    document.getElementById("nom").innerHTML = "";
    for (var I = 0; I < names.length-1; I++) {
        nameList = "<li>" + names[I] + "</li>";
        document.getElementById("nom").innerHTML += nameList;
    }
}
