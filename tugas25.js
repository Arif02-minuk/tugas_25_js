function tugas25() {
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : ", angka.toString());

    var urut = angka.sort();
    console.log("Ascending : ", urut.toString());

    var balik = urut.reverse();
    console.log("Descending : ", balik.toString());

    var pilihAngka = angka.filter(pilih => {
    return pilih > 10   
    })
    console.log("Filter > 10 : ", pilihAngka.toString());
}

tugas25();