var angka1 = 2.5;
    var angka2 = 10;

    //Operator Matematika + - / & %
    var hitungBagi = angka2/angka1;
    var hitungModulus = angka2%angka1;
    var hitungKali = angka1*angka2;
    var hitungTambah = angka1+angka2;
    var hitungKurang = angka1-angka2;

    //Object Methods
    // toFixed(n), toString(), random(), min(n,n), max(n,n)
    // round() -> Membulatkan ke angka terdekat
    // ceil() -> Membulatkan ke atas
    // floor() -> Membulatkan ke bawah
    var angkaRandom = Math.random().toFixed(2);
    var randomgSpesific = Math.floor(Math.random()*2) +1 //X -> Range, Y -> batas minimal
    //random spesific formula -> Math.floor(Math.random()*x) +1
    
    var highestNumber = Math.max(hitungBagi, hitungModulus, hitungKali, hitungTambah, hitungKurang);
    var lowestNumber = Math.min(hitungBagi, hitungModulus, hitungKali, hitungTambah, hitungKurang);
    
    // Increment +1 -> ++
    // Decrement -1  -> --

    document.getElementById("wrap").innerHTML = highestNumber;