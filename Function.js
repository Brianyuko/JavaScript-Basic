// Function
function printText()
{
    alert("Selamat Datang");
    var x = "Sekolah Koding"
    document.getElementById("wrap").innerHTML = x;
}

// Function with parameter
// Multiple parameter
function printText1(nama)
{
    var text = "Mahasiswa bernama " + nama;
    document.getElementById("wrap").innerHTML = text
}
// Call Function
printText();
printText1('Brian')