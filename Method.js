var angka1 = 2.5;
        var angka2 = 10;
        var nama = "Brian Yuko"
        var umur = "20.5"
        //Object Methods

        //Number Methods
        // toFixed(n), toString(), random(), min(n,n), max(n,n)
        // round() -> Membulatkan ke angka terdekat
        // ceil() -> Membulatkan ke atas
        // floor() -> Membulatkan ke bawah
        var angkaRandom = Math.random().toFixed(2);
        var randomgSpesific = Math.floor(Math.random()*2) +1 //X -> Range, Y -> batas minimal
        //random spesific formula -> Math.floor(Math.random()*x) +1
        
        var highestNumber = Math.max(angka2, angka1);
        var lowestNumber = Math.min(angka1, angka2);

        //String Methods
        // length, indexOf, lastIndexof, search, charAt
        // toUpperCase(), toLowerCase(), replace
        // substring(start, end) -> berdasarkan patkoan akhir karakter, substr(start, length) -> berdasarkan panjang karakter
        //parseInt, parseFloat
        var umurTambah = parseFloat(umur)  + 10;
        document.getElementById("wrap").innerHTML = umurTambah;