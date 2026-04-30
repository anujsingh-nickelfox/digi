const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Model ko link kiya
const nodemailer = require('nodemailer');
// ... existing imports ...

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;
    const newContact = new Contact(req.body);
    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS
      }
    });

    // 2nd Image wala Professional HTML Design
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #1a1a1a; border-radius: 8px; overflow: hidden; color: #ffffff;">
          <div style="background-color: #1e4b7a; padding: 20px; text-align: left;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0; font-size: 14px; color: #a0c4ff;">Received from your educational website</p>
          </div>
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse; color: #ffffff;">
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 15px 0; color: #888; width: 30%;">Name</td>
                <td style="padding: 15px 0;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 15px 0; color: #888;">Email</td>
                <td style="padding: 15px 0; color: #a0c4ff;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 15px 0; color: #888;">Phone</td>
                <td style="padding: 15px 0;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 15px 0; color: #888;">Course</td>
                <td style="padding: 15px 0; color: #a0c4ff;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 15px 0; color: #888; vertical-align: top;">Message</td>
                <td style="padding: 15px 0; line-height: 1.5;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #222; padding: 10px 20px; text-align: center; font-size: 12px; color: #666;">
            Submitted on ${new Date().toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"EduLearn Contact Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry from ${name} — ${course}`,
      html: htmlContent // Yahan HTML use kar rahe hain design ke liye
    });

    res.status(200).json({ success: true, message: 'Enquiry sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Minimum 10 characters required' });
  }
});


module.exports = router;