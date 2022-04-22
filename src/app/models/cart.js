const mongoose = require('mongoose')


const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            price: Number
        }
    ]
},
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);