const express = require('express');
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// CREATE
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('phone').isMobilePhone().withMessage('Invalid phone'),
    body('address').notEmpty().withMessage('Invalid address is empty'),
    body('dateOfBirth').notEmpty().isDate().withMessage('Invalid date format'),
  ],
  validate,
  createCustomer
);

// READ
router.get('/', getCustomers);

// UPDATE
router.put('/:id', updateCustomer);

// DELETE
router.delete('/:id', deleteCustomer);

module.exports = router;
