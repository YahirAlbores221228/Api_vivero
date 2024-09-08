const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    catalogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catalog',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        
    },
    creationdate: {
        type: Date,
        default: Date.now,
    },
    
});

const order = mongoose.model('Order', orderSchema);

module.exports = order;