import Image from 'next/image';
import Link from 'next/link';
import { ScaleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      name: 'Expert Legal Team',
      description: 'Our team of experienced attorneys specializes in various areas of law to provide comprehensive legal solutions.',
      icon: UserGroupIcon,
    },
    {
      name: 'Client-Focused Approach',
      description: 'We prioritize your needs and work closely with you to achieve the best possible outcome for your case.',
      icon: ScaleIcon,
    },
    {
      name: 'Proven Track Record',
      description: 'With years of successful cases and satisfied clients, we have established ourselves as a trusted name in legal services.',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Law firm office"
            fill
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Legal Services You Can Trust
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              We provide comprehensive legal solutions tailored to your unique needs. Our experienced team is dedicated to protecting your rights and achieving the best possible outcomes.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="btn bg-primary-600 hover:bg-primary-700"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white flex items-center"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Commitment</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Law Firm
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are dedicated to providing exceptional legal services with integrity, professionalism, and a commitment to excellence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Contact us today for a free consultation and let us help you with your legal needs.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-primary-50"
            >
              Contact Us
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
