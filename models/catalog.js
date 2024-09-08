const mongoose = require('mongoose');

const catalogoSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

const catalog = mongoose.model('Catalogo', catalogoSchema);

module.exports = catalog;