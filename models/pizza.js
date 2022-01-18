const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: 'Large'
  },
  toppings: []
});

//create the pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

//export pizza model
module.exports = Pizza;