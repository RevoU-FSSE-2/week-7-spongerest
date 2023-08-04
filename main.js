"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coba_1 = require("./coba");
// Attach deleteSelect function to the document's click event
document.addEventListener('click', coba_1.deleteSelect);
// Display the initial products
(0, coba_1.displayProduk)();
