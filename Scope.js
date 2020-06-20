
        // Var Global berlaku dimana aja
        var text = "Ini Variabel Global";
        
        function printLocal(){
            // Var Local berlaku di fungsi itu sendiri
            var textLocal = "Ini Variabel Local Karena didalam fungsi";
            
            // Var Global tidak pakai var didalam fungsi
            functionGlobal = "Variabel Global yang ada di funcion";

            // Change Value
            text = "Mengganti nama";
        }

        printLocal();
        document.getElementById('wrap').innerHTML = text