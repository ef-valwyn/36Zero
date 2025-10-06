export const config = {
  // App Configuration
  app: {
    name: '36Zero',
    description: 'Sustainable marine transportation with zero emissions',
    version: '1.0.0',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
  },
  
  // Email Configuration
  email: {
    from: process.env.EMAIL_FROM || 'noreply@36zero.com',
    replyTo: process.env.EMAIL_REPLY_TO || 'info@36zero.com',
  },
  
  // Contact Information
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'info@36zero.com',
    address: {
      street: '123 Harbor Drive',
      city: 'Marina Bay',
      state: 'CA',
      zip: '90210',
      country: 'USA',
    },
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/36zero',
    twitter: 'https://twitter.com/36zero',
    instagram: 'https://instagram.com/36zero',
    linkedin: 'https://linkedin.com/company/36zero',
  },
  
  // Features
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableEmailNotifications: true,
    enableMaintenanceMode: false,
  },
  
  // Environment
  env: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
  },
} as const;

export type Config = typeof config;
