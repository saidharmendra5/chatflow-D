// Enhanced email template for OTP verification
const createEmailTemplate = (otp, userEmail) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification - ChatFlow</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #f9fafb;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }
        
        .logo-icon {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: 700;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .header-title {
            font-size: 28px;
            font-weight: 700;
            color: white;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
        }
        
        .header-subtitle {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 18px;
            font-weight: 600;
            color: #111827;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 30px;
            line-height: 1.7;
        }
        
        .otp-container {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            border: 2px dashed #d1d5db;
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            position: relative;
            overflow: hidden;
        }
        
        .otp-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%);
            animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .otp-label {
            font-size: 14px;
            font-weight: 500;
            color: #6b7280;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
            z-index: 1;
        }
        
        .otp-code {
            font-size: 36px;
            font-weight: 700;
            color: #1f2937;
            letter-spacing: 8px;
            margin-bottom: 15px;
            font-family: 'Courier New', monospace;
            position: relative;
            z-index: 1;
        }
        
        .otp-validity {
            font-size: 14px;
            color: #ef4444;
            font-weight: 500;
            position: relative;
            z-index: 1;
        }
        
        .warning-box {
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            border: 1px solid #fecaca;
            border-radius: 12px;
            padding: 20px;
            margin: 25px 0;
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }
        
        .warning-icon {
            width: 20px;
            height: 20px;
            color: #ef4444;
            flex-shrink: 0;
            margin-top: 2px;
        }
        
        .warning-text {
            font-size: 14px;
            color: #dc2626;
            font-weight: 500;
        }
        
        .info-section {
            background: #f8fafc;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
        }
        
        .info-text {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 15px;
        }
        
        .footer {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer-text {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 15px;
        }
        
        .company-name {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
            margin: 25px 0;
        }
        
        /* Mobile responsiveness */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header, .content, .footer {
                padding: 25px 20px;
            }
            
            .header-title {
                font-size: 24px;
            }
            
            .otp-code {
                font-size: 28px;
                letter-spacing: 4px;
            }
            
            .otp-container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                
                <span class="logo-text">💬 ChatFlow</span>
            </div>
            <h1 class="header-title">Email Verification</h1>
            <p class="header-subtitle">Secure your account with email verification</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <div class="greeting">Hello there! 👋</div>
            
            <p class="message">
                Thank you for signing up with ChatFlow! To complete your registration and secure your account, 
                please verify your email address using the verification code below.
            </p>
            
            <!-- OTP Section -->
            <div class="otp-container">
                <div class="otp-label">Your Verification Code</div>
                <div class="otp-code">${otp}</div>
                <div class="otp-validity">⏰ Valid for 10 minutes only</div>
            </div>
            
            <!-- Warning -->
            <div class="warning-box">
                <svg class="warning-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <div class="warning-text">
                    <strong>Security Notice:</strong> Never share this verification code with anyone. 
                    ChatFlow will never ask for your verification code via phone or email.
                </div>
            </div>
            
            <div class="divider"></div>
            
            <!-- Additional Info -->
            <div class="info-section">
                <p class="info-text">
                    <strong>What happens next?</strong><br>
                    Once you enter this code on our verification page, your email will be confirmed 
                    and you'll have full access to all ChatFlow features.
                </p>
                <p class="info-text">
                    <strong>Didn't request this?</strong><br>
                    If you didn't create an account with ChatFlow, you can safely ignore this email. 
                    Your email address will not be used without verification.
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p class="footer-text">
                This email was sent from a secure, monitored service. Please do not reply to this email.
            </p>
            <div class="company-name">ChatFlow Team</div>
            <p class="footer-text" style="margin-top: 10px; font-size: 12px;">
                © 2025 ChatFlow. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

// // Usage example for your Node.js backend:
// const mailOptions = {
//     from: process.env.EMAIL,
//     to: email,
//     subject: "🔐 Verify Your Email - ChatFlow",
//     text: `Your ChatFlow verification code is: ${otp}. This code is valid for 10 minutes. Do not share this code with anyone.`,
//     html: createEmailTemplate(otp, email)
// };

module.exports = { createEmailTemplate };