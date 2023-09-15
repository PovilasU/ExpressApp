// https://mongoosejs.com/docs/
const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    price: {
        type: Number,
        default: 1
    },
    item: {
        type: String,
        required: true
    }
})

const Order = model("order", OrderSchena)

module.exports = Order

