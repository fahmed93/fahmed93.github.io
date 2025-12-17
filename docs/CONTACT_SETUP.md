# Contact Page Setup

## Overview
The contact page is now implemented at `/contact`. It allows visitors to send messages to fahmed93@gmail.com.

## How It Works

### Default Behavior (No Configuration Required)
By default, the contact form uses the `mailto:` protocol, which opens the user's default email client with pre-filled information from the form. This works immediately without any configuration.

### Optional: EmailJS Integration
For a better user experience (sending emails directly from the browser without opening an email client), you can configure EmailJS:

1. **Sign up for EmailJS**: Visit [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account

2. **Create an Email Service**:
   - Connect your email account (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template**:
   - Create a template with the following variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
   - Set the recipient to: fahmed93@gmail.com
   - Note your Template ID

4. **Get Your Public Key**:
   - Find your Public Key in the EmailJS dashboard
   - (Account > API Keys)

5. **Configure Environment Variables**:
   Create a `.env` file in the project root with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Deploy with Environment Variables**:
   - For GitHub Pages, add these as repository secrets
   - Update the GitHub Actions workflow to inject them during build

## Features

- ✅ Client-side form validation
- ✅ Email validation with regex
- ✅ Responsive design matching the site's aesthetic
- ✅ Dark theme with code-focused styling
- ✅ Success/error status messages
- ✅ Fallback to mailto: link if EmailJS not configured
- ✅ Direct email link for quick contact
- ✅ Loading states during submission

## Testing

The contact form has been tested with:
- Empty form submission (validation works)
- Complete form submission (mailto link triggers)
- Direct email link (opens email client)
