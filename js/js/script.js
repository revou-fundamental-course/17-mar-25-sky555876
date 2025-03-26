function perhitunganPerkalian() {
    let bilanganPertama = document.getElementById("sisi").value;
    
        let hasilPerkalian = parseInt(bilanganPertama) * 4 ;
    
    console.log(hasilPerkalian);
}

function perhitunganPerkalianLuas() {
    let bilanganPertama = document.getElementById("sisi-luas").value;
    
        let hasilPerkalian = parseInt(bilanganPertama) * parseInt(bilanganPertama) ;
    
    console.log(hasilPerkalian);
}