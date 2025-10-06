'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { z } from 'zod';

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  errors: Partial<Record<keyof FormData, string>>;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
    errors: {},
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formState.errors[name as keyof FormData]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({ status: 'loading', message: '', errors: {} });

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData);

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...validatedData,
          source: 'website_contact_form',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you! Your message has been sent successfully.',
          errors: {},
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        if (result.details) {
          // Handle validation errors
          const errors: Partial<Record<keyof FormData, string>> = {};
          result.details.forEach((error: any) => {
            errors[error.path[0] as keyof FormData] = error.message;
          });
          setFormState({
            status: 'error',
            message: 'Please correct the errors below.',
            errors,
          });
        } else {
          setFormState({
            status: 'error',
            message: result.error || 'Something went wrong. Please try again.',
            errors: {},
          });
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          errors[err.path[0] as keyof FormData] = err.message;
        });
        setFormState({
          status: 'error',
          message: 'Please correct the errors below.',
          errors,
        });
      } else {
        setFormState({
          status: 'error',
          message: 'Something went wrong. Please try again.',
          errors: {},
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          Ready to experience zero-emission marine transportation? 
          Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Status Message */}
      {formState.message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center ${
          formState.status === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {formState.status === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2" />
          )}
          {formState.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formState.errors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {formState.errors.name && (
              <p className="mt-1 text-sm text-red-600">{formState.errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formState.errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {formState.errors.email && (
              <p className="mt-1 text-sm text-red-600">{formState.errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              formState.errors.subject ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="What can we help you with?"
          />
          {formState.errors.subject && (
            <p className="mt-1 text-sm text-red-600">{formState.errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              formState.errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Tell us about your marine transportation needs..."
          />
          {formState.errors.message && (
            <p className="mt-1 text-sm text-red-600">{formState.errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={formState.status === 'loading'}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {formState.status === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
