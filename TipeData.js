// Deklarasi variable
        // 1. Nama dimulai dengan huruf atau $ atau _
        // 2. Penamaan boleh mengandung huruf, angka, underscore, dan dollar
        // 3. Penamaan bersifat case sensitive
        // 4. Ada 'reserved words' yang tidak boleh dipakai, contohnya var

        //Tipe data String
        var firstName = "Dandy ";
        var lastName = "Arisandy";
        //Jika ingin mengubah yang telah kita deklarasikan, kita tidak perlu deklarasi ulang
        // firstName = "Andhika " cukup seperti ini saja
        var name = firstName + lastName;
    
        //Tipe data Int
        var angka1 = 10;
        var angka2 = 1.5;

        // Tipe Data Boleean
        var x = true;
        var y = false;

        //Kiri berisi nama  -> kanan berisi nilai
        var hasil = angka1 + angka2;
        document.getElementById("wrap").innerHTML = name; 