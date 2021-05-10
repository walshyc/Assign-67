const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  title: { type: String },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  deliveryAddress: {
    addressOne: {
      type: String,
      required: true,
    },
    addressTwo: {
      type: String,
    },
    town: {
      type: String,
      required: true,
    },
    county: {
      type: String,
      required: true,
    },
    eircode: {
      type: String,
    },
  },
  billingAddress: {
    addressOne: {
      type: String,
      required: true,
    },
    addressTwo: {
      type: String,
    },
    town: {
      type: String,
      required: true,
    },
    county: {
      type: String,
      required: true,
    },
    eircode: {
      type: String,
    },
  },
});

module.exports = mongoose.model('User', UserSchema);
