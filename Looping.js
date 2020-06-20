// Looping
        
        // 1. For(start; end/conditional; step) 
        for (var i=0; i<=6; i+=2){
            alert(i);
        }

        //Global variabel
        var absen = 7;
        var text = "";
        
        // 2. While(conditional)
        while (absen <= 7){
            text += "<br>Posisi absen ke "+absen
            absen++
        }

        // 3. Do While
        // Otomatis eksekusi code mininmal satu kali
        // Beda dengan while, kalau do while ,eksekusi di do baru liat syarat di while
        do{
            text += "<br>Posisi absen ke "+absen
            absen++
        }
        while(absen <=9)

        document.getElementById('wrap').innerHTML = text;