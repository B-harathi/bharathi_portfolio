/**
 * EmailJS Configuration
 * 
 * To make the contact form work, sign up for a free EmailJS account:
 * 1. Go to https://www.emailjs.com/ and create a free account (200 emails/month)
 * 2. Create an Email Service (e.g., Gmail, Outlook, etc.) from the Dashboard
 * 3. Create an Email Template with the following variables:
 *    - {{from_name}}    -> sender's name
 *    - {{from_email}}   -> sender's email
 *    - {{subject}}      -> message subject
 *    - {{message}}      -> message body
 *    - {{to_email}}     -> your email (gbharathitrs@gmail.com)
 * 4. Go to Account > API Keys and copy your Public Key
 * 
 * Then update the values below:
 */

const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (e.g., "service_abc123def")
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_pp8lr5j',
  
  // Your EmailJS Template ID (e.g., "template_xyz789")
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Your EmailJS Public Key (e.g., "abc123def456")
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'A2YmDQBpdmMLLQvy2',
};

export default EMAILJS_CONFIG;
