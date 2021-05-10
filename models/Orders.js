const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  user: { type: mongoose.ObjectId, required: true },
  items: [
    {
      phone: { type: mongoose.ObjectId, required: true,  },
    },
  ],
});

module.exports = mongoose.model('Orders', OrderSchema);
