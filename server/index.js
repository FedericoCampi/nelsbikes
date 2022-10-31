const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const stripe = new Stripe('sk_test_51LxXCEALKVcf1dfDlTjXt0Tgnc8I25EKiXffGVcDIXv54o0A4oy6EL7Kij7PW2MBCAAFt0iIOqAnrjmrtdcjBSeT00Tnvp9ZvG')

const app = express();

// middleware

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json())

app.post('/api/CheckOut', async(req, res) =>{
    // eslint-disable-next-line no-unused-vars
    const { id, amount } = req.body;

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Basket of products",
            payment_method: id,
            confirm: true,
        })
        console.log(payment)
        return res.status(200).json({message: "Succesful payment"})
    }
    catch(error){
        return res.json({message: error.raw.message})}
})



app.listen(3001, ()=>console.log('Server listening port:', 3001));