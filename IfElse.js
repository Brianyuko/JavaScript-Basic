// if else, nested if
        // Operator logika == != > >= < <=
        // Dua kondisi -> &&, ||

        var uangArsyi = 5000;
        var uangJalu = 5000;
        var rokok = 13000;

        if(uangArsyi >= rokok && uangJalu >= rokok){
            if(uangArsyi >= rokok*3){
                alert('Arsyi bisa beli rokok')
            }else{
                alert('Uang arsyi tidak cukup')
            }
        }else if(uangArsyi == rokok || uangJalu == rokok){
            alert('Masih bisa beli rokok')
        }else{
            alert('Gabisa beli rokok')
        }


