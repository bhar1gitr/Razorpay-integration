const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');
const Razorpay = require('razorpay')
const crypto = require('crypto');
dotenv.config({path:'./config/config.env'})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// Importing routes 

// Using middlewares


// Routes
// app.use('/api/v1',paymentRoute);

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.get('/api/v1/getKey',(req,res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    });
})

app.post('/api/v1/checkout', async (req, res) => {
    // const rawRequestBody = req.body;
    console.log(req.body);
    const options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
      };
      // const order = await instance.orders.create(options);
      // console.log(order);
    const order = await  instance.orders.create(options)
      console.log(order);
      res.status(200).json({
          success:true,
          order
      })
})

// app.post('/api/v1/paymentVarification', async(req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;
// console.log(req.body);
//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
//     .update(body.toString())
//     .digest("hex");
// console.log(body);
// //   const isAuthentic = expectedSignature === razorpay_signature;
// //  console.log(isAuthentic);

//  res.status(200).json({
//      success:true,
//  })
// })

app.post('/api/v1/paymentVarification', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log(req.body);

    // Combine order_id and payment_id to create the data that was signed
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    // Calculate the expected signature using your API secret
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");
    console.log(body);

    // Compare the calculated signature with the provided signature
    const isAuthentic = expectedSignature === razorpay_signature;
    console.log(isAuthentic);

    if (isAuthentic) {
        // The payment is authentic; you can proceed with further processing
        // res.status(200).json({
        //     success: true,
        // });

        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    } else {
        // The payment is not authentic; you may want to handle this case accordingly
        res.status(400).json({
            success: false,
            message: "Payment verification failed.",
        });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})
