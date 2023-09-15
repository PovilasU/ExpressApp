const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    orderId: String,
    item: String
})

const Order = model("order", OrderSchema)

