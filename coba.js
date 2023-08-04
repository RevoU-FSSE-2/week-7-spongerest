"use strict";
// productModule.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSelect = exports.displayProduk = void 0;
const produkNama = document.getElementById("produkName");
const produkHarga = document.getElementById("harga");
const produkMarkup = document.getElementById("markup");
const produkStok = document.getElementById("stok");
const produkSelect = document.getElementById("slct");
const produkTambah = document.getElementById("tambah-produk");
const produkList = document.getElementById("list-produk");
const produkCheck = document.getElementById("flexCheckDefault");
const listProduk = [];
function displayProduk() {
    produkList.innerHTML = '';
    listProduk.forEach((data) => {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `
      <th class="checkbox">
          <div class="form-check"> 
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="deleteSelect">
          <label class="form-check-label" for="flexCheckDefault"></label>
          </div>
      </th>
      <td>${data.name}</td>
      <td>${data.value}</td>
      <td>${data.value2}</td>
      <td>${data.category}</td>
      <button class="btn-delete btn-primary" type="submit">Delete</button>
      `;
        produkList.appendChild(tr);
    });
}
exports.displayProduk = displayProduk;
function deleteSelect(e) {
    const isChecked = e.target.classList.contains('btn-delete');
    if (isChecked) {
        const btnDelete = e.target;
        const isConfirm = confirm('Are You Sure?');
        if (isConfirm) {
            const parentTR = btnDelete.closest('tr');
            if (parentTR) {
                parentTR.remove();
            }
        }
    }
}
exports.deleteSelect = deleteSelect;
function addProduk() {
    const namaProduk = String(produkNama.value);
    const hargaJualProduk = Number((produkHarga.valueAsNumber * 100) / (100 - produkMarkup.valueAsNumber));
    const stokProduk = Number(produkStok.value);
    const categoryProduk = String(produkSelect.value);
    if (namaProduk && hargaJualProduk && stokProduk) {
        const newProduk = {
            check: produkCheck,
            name: namaProduk,
            value: hargaJualProduk,
            value2: stokProduk,
            category: categoryProduk
        };
        listProduk.push(newProduk);
        displayProduk();
        produkNama.value = '';
        produkHarga.value = '';
        produkMarkup.value = '';
        produkStok.value = '';
    }
    else {
        alert("Harap Isi Semua Kolom Yang Tersedia");
    }
}
produkTambah.addEventListener('click', addProduk);
