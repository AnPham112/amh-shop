const Payments = require('../models/paymentModal')
const Users = require('../models/userModel');
const Products = require('../models/productModel');

const paymentCtrl = {
  getPayments: async (req, res) => {
    try {
      const payments = await Payments.find()
      res.json(payments)

    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  createPayment: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select('name email')
      if (!user) return res.status(400).json({ msg: "User does not exist" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = paymentCtrl