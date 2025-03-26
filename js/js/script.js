
function perhitunganPerkalianKeliling() {
    const inputNilai = parseInt(document.getElementById("sisi").value);
    const keliling = inputNilai * 4;
    document.getElementById("rumuKeliling").innerText = `K = 4 x ${inputNilai}`;
    document.getElementById("hasilKeliling").innerText = `K = ${keliling}`;

}

function perhitunganPerkalianluas() {
    const inputNilai = parseInt(document.getElementById("sisi-luas").value);
    const luas = inputNilai * inputNilai;
    document.getElementById("rumusLuas").innerText = `L = ${inputNilai} x ${inputNilai}`;
    document.getElementById("hasilLuas").innerText = `L = ${luas}`;

}

function risetKeliling() {
    document.getElementById("sisi").value="";
    document.getElementById("rumuKeliling").innerText=``;
    document.getElementById("hasilKeliling").innerText =``;

}

function risetLuas() {
    document.getElementById("sisi-luas").value="";
    document.getElementById("rumusLuas").innerText =``;
    document.getElementById("hasilLuas").innerText =``;
}