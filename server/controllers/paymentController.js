// const {instance} = require('../app.js')
const Razorpay = require('razorpay')
const checkout = (req,res)=>{
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
      });
      console.log(req.body);
const options = {
  amount: req.body.amount,  // amount in the smallest currency unit
  currency: "INR",
};
// const order = await instance.orders.create(options);
// console.log(order);
instance.orders.create(options, function(err, order) {
    console.log(order);
  });

res.status(200).json({
    success:true,
})
}

module.exports = {checkout}