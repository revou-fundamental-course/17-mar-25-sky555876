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
    document.getElementById("sisi").value = "";
    document.getElementById("rumuKeliling").innerText = ``;
    document.getElementById("hasilKeliling").innerText = ``;

}

function risetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumusLuas").innerText = ``;
    document.getElementById("hasilLuas").innerText = ``;
}

function perhitunganPerkalianLuasPpg() {
    const inputPanjang = parseInt(document.getElementById("Panjang-Luas").value);
    const inputLuas = parseInt(document.getElementById("Lebar-Luas").value);
    const luasppg = inputPanjang * inputLuas;
    document.getElementById("rumusLuasPpg").innerText = `L = ${inputPanjang} x ${inputLuas}`;
    document.getElementById("hasilLuasPpg").innerText = `L = ${luasppg}`;
}

function perhitunganPerkalianKelilingPpg() {
    const inputPanjang = parseInt(document.getElementById("Panjang-Keliling").value);
    const inputLuas = parseInt(document.getElementById("Lebar-Keliling").value);
    const kelilingPpg = 2 * (inputPanjang + inputLuas);
    document.getElementById("rumusKelilingPpg").innerText = `K = 2 x ( ${inputPanjang} + ${inputLuas} )`;
    document.getElementById("hasilKelilingPpg").innerText = `K = ${kelilingPpg}`;

}

function risetLuasPpg() {
    document.getElementById("Panjang-Luas").value = "";
    document.getElementById("Lebar-Luas").value = "";
    document.getElementById("rumusLuasPpg").innerText = ``;
    document.getElementById("hasilLuasPpg").innerText = ``;
}

function risetKelilingPpg() {
    document.getElementById("Panjang-Keliling").value = "";
    document.getElementById("Lebar-Keliling").value = "";
    document.getElementById("rumusKelilingPpg").innerText = ``;
    document.getElementById("hasilKelilingPpg").innerText = ``;
}