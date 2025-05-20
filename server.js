// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables from .env (make sure .env is in project root)
dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? 'Exists' : 'Missing');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Create nodemailer transporter using Gmail and app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,  // Must be Gmail App Password!
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Nodemailer verification failed:', error);
  } else {
    console.log('✅ Nodemailer is ready to send emails');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('📩 Incoming contact form submission:', { name, email, message });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    });

    console.log('✅ Email sent:', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
