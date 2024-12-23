const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productsInCart: [{
        productId: {
            type: String,
            required: true
        },
        productQty: {
            type: Number,
            required: true,
            default: 1
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);
