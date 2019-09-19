aficions = ['Programacio', 'Natacio', 'Series', 'Ciencia', 'IA']

function myfunction() {
    var name = aficions;
    var theName = name.value;
    names.push(theName);
    document.getElementById("nom").innerHTML = "";
    for (var I = 0; I < names.length; I++) {
        nameList = "<li>" + names[I] + "</li>";
        document.getElementById("nom").innerHTML += nameList;
    }
}
