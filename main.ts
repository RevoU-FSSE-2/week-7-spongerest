import { displayProduk, deleteSelect } from './coba';

        // Attach deleteSelect function to the document's click event
        document.addEventListener('click', deleteSelect);

        // Display the initial products
        displayProduk();