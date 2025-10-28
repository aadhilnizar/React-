import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Models", href: "/" , current: true },
  { name: "Shop", href: "/shop", current: false },
  { name: "Owners", href: "/owners", current: false },
  { name: "Experience", href: "/exp", current: false },
  { name: "Motorsport", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-black sticky top-0 z-50 shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              
              {/* Logo */}
              <div className="flex items-center">
                <a href="/">
                  <img
                    src="/logo.png" 
                    alt="Porsche"
                    className="h-6 w-auto"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:space-x-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 p-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-white hover:text-red-600 hover:border-b-2 hover:border-red-600",
                      "px-2 py-2 text-sm font-medium transition duration-200 border-b-2 border-transparent"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-red-600 transition">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-red-600 transition">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>

                {/* Mobile Menu Button */}
                <Disclosure.Button className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                      : "text-gray-900 hover:bg-gray-50 hover:text-red-600 hover:border-l-4 hover:border-red-600",
                    "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium transition"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Mobile Icons */}
            <div className="border-t border-gray-200 pt-4 pb-3 px-4 flex space-x-4">
              <button className="text-white hover:text-red-600 transition flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
              <button className="text-white hover:text-red-600 transition flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
