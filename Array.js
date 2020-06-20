
        // Tipe data array
        // array dimulai dari angka 0
        var kelas = ["Angga", "Rio", "Andi", 90];
        
        // Mengubah Nilai Array
        kelas[3] = 12;

        var text = "Namanya adalah " + kelas[0] + "Absen " + kelas[3];
        
        // Sort, reverse, concat, length, join("Separator") / Pemisah
        // Concat untuk menggabungkan array
        var groupOne = ["Angga", "Dandy", "Pii"];
        var groupTwo = ["Bayu", "Syauqi", "Haniyah"];
        var groupThree = ["Erwin", "Andhika", "Naufal"];

        var total = groupThree.concat(groupOne, groupTwo);
        
        // document.getElementById('wrap').innerHTML = total.length;
        // document.getElementById('wrap').innerHTML = total.join(" | ");

        // Splice -> add(Mulai, Hapus Berapa setelah yang dimulai, isi), splice -> remove
        // pop, push -> pop untuk menghapus di akhir, push untuk menambah di akhir
        // shift(), unshift() -> shift untuk menghapus diawal, unshift untuk menambah di akhir

        // groupTwo.splice(1,1, "Brian") // Menganti
        // groupOne.splice(1, 0, "Brian") // Menambahkan
        // groupThree.splice(2,1) // Menghapus

        var hapus = groupOne.splice(2, 1)   // Return value yang dihapus di awal

        var pushBelakang = groupOne.push()  // Return jumlah/length value di akhir
        var popBelakang = groupOne.pop()    // Return value yang dihapus di akhir
        
        var shiftDepan = groupOne.shift()    //Return jumlah/length value di awal
        var unshiftDepan = groupOne.unshift() // Return value yang dihapus di awal
        
        // document.getElementById('wrap').innerHTML = popBelakang ; menampilkan yang dihapus dibelakang
        // document.getElementById('wrap').innerHTML = shiftDepan ; menampilkan yang dihapus didepan 
        document.getElementById('wrap').innerHTML = groupTwo ;