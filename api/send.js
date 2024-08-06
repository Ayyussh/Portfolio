const nodemailer = require('nodemailer');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message , subject} = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ayush.gautam0302@gmail.com', // replace with your email
        pass: 'nhfm hvmk qwlr ymee'   // replace with your app password
      }
    });

    // Setup email data
    let mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: 'ayush.gautam0302@gmail.com',    // replace with your email address to receive form submissions
      subject: subject ,
      text: `You have a new contact us form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}`
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: 'Failed to send message.' });
      }
      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ status: 200, message: 'Message sent successfully!' });
    });
  } else {
    res.status(404).json({ status: 404, message: 'Not Found' });
  }
}
