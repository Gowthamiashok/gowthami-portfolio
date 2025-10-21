# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (starts with "service_")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy your Template ID** (starts with "template_")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

## Step 5: Update Configuration
1. Open `lib/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_your_actual_service_id',
  templateId: 'template_your_actual_template_id', 
  publicKey: 'your_actual_public_key',
  toEmail: 'gowthamiashok29@gmail.com',
}
```

## Step 6: Test
1. Save the file
2. Test the contact form
3. Check your email inbox for the message

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## Security Note
- Public key is safe to expose in frontend code
- EmailJS handles the actual email sending securely
- Your email service credentials stay private
