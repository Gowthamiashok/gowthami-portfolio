// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  serviceId: 'service_w90lgzj', // Replace with your EmailJS service ID
  templateId: 'template_xnfh8vf', // Replace with your EmailJS template ID
  publicKey: 'ueAe5KnGRBQpYoW6e', // Replace with your EmailJS public key
  toEmail: 'gowthamiashok29@gmail.com', // Your email address
}

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_email: string
}
