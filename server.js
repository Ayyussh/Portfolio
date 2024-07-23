// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// // Serve static files (for the HTML form)
// app.use(express.static('public'));

// // POST route to handle form submission
// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ayush.gautam0302@gmail.com', // replace with your email
//       pass: 'nhfm hvmk qwlr ymee'   // replace with your app password
//     }
//   });

//   // Setup email data
//   let mailOptions = {
//     from: `"${name}" <${email}>`, // sender address
//     to: 'ayush.gautam0302@gmail.com',    // replace with your email address to receive form submissions
//     subject: 'Contact Us Form Submission',
//     text: `You have a new contact us form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).json({ status: 500, message: 'Failed to send message.' });
//     }
//     console.log('Message sent: %s', info.messageId);
//     res.status(200).json({ status: 200, message: 'Message sent successfully!' });
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
