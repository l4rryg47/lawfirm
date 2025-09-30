import Image from 'next/image';
import { BuildingOfficeIcon, UserGroupIcon, TrophyIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { id: 1, name: 'Years of Experience', value: '25+', icon: TrophyIcon },
    { id: 2, name: 'Expert Attorneys', value: '50+', icon: UserGroupIcon },
    { id: 3, name: 'Cases Handled', value: '5000+', icon: ScaleIcon },
    { id: 4, name: 'Office Locations', value: '10+', icon: BuildingOfficeIcon },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Law firm office building"
            fill
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Our Law Firm
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              With over two decades of legal excellence, we are committed to providing exceptional legal services with integrity and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Legacy of Legal Excellence</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded in 1998, our law firm has grown from a small practice to one of the most respected legal institutions in the region. Our journey has been marked by a steadfast commitment to our clients and the pursuit of justice.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe in building long-term relationships with our clients, understanding their unique needs, and providing tailored legal solutions that help them achieve their goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/office-interior.jpg"
                alt="Law firm office interior"
                width={1024}
                height={768}
                className="rounded-xl shadow-2xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our core values guide everything we do and define who we are as a firm.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                    <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Integrity
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We uphold the highest standards of professional ethics and personal integrity in all our dealings.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                    <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Client Focus
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our clients are at the heart of everything we do. We listen, understand, and respond to their unique needs.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                    <TrophyIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Excellence
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We strive for excellence in every aspect of our work, delivering exceptional results for our clients.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                    <BuildingOfficeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Community
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We are committed to making a positive impact in the communities where we live and work.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
