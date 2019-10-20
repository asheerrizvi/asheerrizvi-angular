const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'GMAIL USERNAME',
        pass: 'GMAIL PASSWORD'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        const destOne = req.query.destOne;
        const destTwo = req.query.destTwo;
        const name = req.query.name;
        const email = req.query.email;
        const message = req.query.message;
        const dest = `${destOne}, ${destTwo}`;

        const mailOptions = {
            from: email,
            to: dest,
            subject: 'New message at asheerrizvi.com from ' + name, 
            html: `<strong>From: </strong>${name}<br/>
            <strong>Email: </strong>${email}<br/>
            <strong>Message: </strong>${message}`
        };
  
        return transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return res.send(error.toString());
            }
            return res.send({message: "Message Sent"});
        });   
    });
});