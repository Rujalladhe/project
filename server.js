import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables from .env (make sure .env is in project root)
dotenv.config();

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

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Nodemailer verification failed:', error);
  } else {
    console.log('✅ Nodemailer is ready to send emails');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Log for debugging
  console.log('Received contact form submission:', { name, email });
  console.log('Environment variables:', {
    user: process.env.EMAIL_USER,
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    hasPassword: !!process.env.EMAIL_PASSWORD
  });

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields' 
    });
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('✅ Email sent:', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending failed:', {
      code: error.code,
      response: error.response,
      message: error.message
    });
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
  console.log(`- EMAIL_USER: ${process.env.EMAIL_USER ? '✓ Set' : '✗ Missing'}`);
  console.log(`- EMAIL_PASSWORD: ${process.env.EMAIL_PASSWORD ? '✓ Set' : '✗ Missing'}`);
  console.log(`- EMAIL_FROM: ${process.env.EMAIL_FROM ? '✓ Set' : '✗ Missing (using EMAIL_USER as fallback)'}`);
  console.log(`- EMAIL_TO: ${process.env.EMAIL_TO ? '✓ Set' : '✗ Missing (using EMAIL_USER as fallback)'}`);
});