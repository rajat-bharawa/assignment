const Customer = require('../models/customer');

// CREATE
async function createCustomer(req, res) {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// READ
async function getCustomers(req, res) {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// UPDATE
async function updateCustomer(req, res) {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// DELETE
async function deleteCustomer(req, res) {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};
