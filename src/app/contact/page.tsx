'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

// Define form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  subject: z.string().min(3, { message: 'Please enter a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the form data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      description: '+1 (212) 555-1234',
      href: 'tel:+12125551234',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      description: 'info@lawfirm.com',
      href: 'mailto:info@lawfirm.com',
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      description: '123 Legal Street, Suite 100\nNew York, NY 10001',
      href: 'https://maps.google.com',
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative container mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Have questions or need legal assistance? Reach out to our team for expert guidance and support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="mx-auto w-full max-w-xl lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Send us a message</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  We'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Full Name *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          id="name"
                          autoComplete="name"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
                            errors.name ? 'ring-red-500' : ''
                          }`}
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
                            errors.email ? 'ring-red-500' : ''
                          }`}
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                        Phone Number *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          id="phone"
                          autoComplete="tel"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
                            errors.phone ? 'ring-red-500' : ''
                          }`}
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                        Subject *
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          id="subject"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
                            errors.subject ? 'ring-red-500' : ''
                          }`}
                          {...register('subject')}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message *
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          rows={4}
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
                            errors.message ? 'ring-red-500' : ''
                          }`}
                          defaultValue={''}
                          {...register('message')}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    </div>

                    {submitStatus && (
                      <div className="sm:col-span-2">
                        <div
                          className={`rounded-md p-4 ${
                            submitStatus.success ? 'bg-green-50' : 'bg-red-50'
                          }`}
                        >
                          <p
                            className={`text-sm ${
                              submitStatus.success ? 'text-green-800' : 'text-red-800'
                            }`}
                          >
                            {submitStatus.message}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div className="mx-auto w-full max-w-xl lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact Information</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  We're here to help and answer any questions you might have.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 text-base text-gray-600 hover:text-primary-600 whitespace-pre-line"
                          >
                            {item.description}
                          </a>
                        ) : (
                          <p className="mt-2 text-base text-gray-600 whitespace-pre-line">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    For urgent legal matters outside of business hours, please call our emergency line.
                  </p>
                  <div className="mt-4">
                    <a
                      href="tel:+12125559876"
                      className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500"
                    >
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      +1 (212) 555-9876
                    </a>
                    <p className="mt-1 text-xs text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426493!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
