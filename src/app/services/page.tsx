import { BuildingOfficeIcon, HomeModernIcon, ScaleIcon, UserIcon, BriefcaseIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      name: 'Corporate Law',
      description: 'Comprehensive legal services for businesses of all sizes, from startups to multinational corporations.',
      icon: BuildingOfficeIcon,
      features: [
        'Business Formation & Structuring',
        'Contracts & Agreements',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Compliance & Regulatory Matters'
      ]
    },
    {
      name: 'Real Estate',
      description: 'Expert guidance through all aspects of real estate transactions and disputes.',
      icon: HomeModernIcon,
      features: [
        'Residential & Commercial Transactions',
        'Lease Agreements',
        'Title & Survey Review',
        'Zoning & Land Use',
        'Real Estate Litigation'
      ]
    },
    {
      name: 'Family Law',
      description: 'Compassionate representation for all family-related legal matters.',
      icon: UserIcon,
      features: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Prenuptial Agreements',
        'Adoption',
        'Domestic Violence Cases'
      ]
    },
    {
      name: 'Intellectual Property',
      description: 'Protecting your intellectual property assets and defending your rights.',
      icon: DocumentTextIcon,
      features: [
        'Trademark Registration',
        'Copyright Protection',
        'Patent Law',
        'IP Licensing',
        'IP Litigation'
      ]
    },
    {
      name: 'Employment Law',
      description: 'Representing both employers and employees in workplace legal matters.',
      icon: BriefcaseIcon,
      features: [
        'Employment Contracts',
        'Wrongful Termination',
        'Discrimination Claims',
        'Workplace Policies',
        'Labor Disputes'
      ]
    },
    {
      name: 'Immigration Law',
      description: 'Navigating the complexities of immigration law for individuals and businesses.',
      icon: ScaleIcon,
      features: [
        'Work Visas',
        'Family-Based Immigration',
        'Citizenship & Naturalization',
        'Deportation Defense',
        'Business Immigration'
      ]
    }
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
              Our Legal Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Comprehensive legal solutions tailored to meet your specific needs and achieve the best possible outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Practice Areas</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Legal Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team of experienced attorneys specializes in a wide range of legal practice areas to serve all your needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="group relative bg-white p-6 shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <service.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">{service.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="rounded-3xl bg-primary-700 px-6 py-16 sm:p-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Need legal assistance?</h2>
              <p className="mt-6 text-lg leading-8 text-primary-100">
                Our team of experienced attorneys is here to help you navigate even the most complex legal challenges.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule a Consultation
                </a>
                <a href="tel:+12125551234" className="text-sm font-semibold leading-6 text-white">
                  Call us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
