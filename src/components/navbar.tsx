import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Stake", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Swap", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#1E2337]hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden text-[#1E2337]"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block text-[#1E2337]"
              />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-start flex-1 px-5 md:px-0 sm:items-center sm:justify-between">
            <div className="flex items-center flex-shrink-0 gap-1">
              <img
                alt="Your Company"
                src="/logo.svg"
                height={30}
                width={30}
                className="w-auto h-7"
              />
              <h4 className="font-bold text-[32px]">syneva</h4>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-[#1E2337]"
                        : "text-[#1E2337] hover:text-[#1E2337]",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <Button className="sm:inline-flex hidden items-center px-4 py-2 border border-[#E9EEF1] rounded-full text-[#1E2337] bg-white hover:bg-gray-100">
              Download
            </Button>
          </div>
          <DisclosurePanel className="absolute top-0 right-0 z-10 w-[80%] h-screen bg-[#F7F9FB] sm:hidden">
            <div className="relative py-10">
              <div className="absolute inset-y-0 top-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#1E2337]hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden text-[#1E2337]"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block text-[#1E2337]"
                  />
                </DisclosureButton>
              </div>
              <div className="absolute w-full px-10 py-5 space-y-1 top-32">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-200 text-[#1E2337]"
                        : "text-[#1E2337] hover:bg-gray-200 hover:text-[#1E2337]",
                      "block rounded-md px-3 py-5 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <Button className="!mt-6 inline-flex sm:hidden w-full justify-center items-center px-4 py-5 border border-[#E9EEF1] rounded-full text-[#1E2337] bg-transparent hover:bg-gray-100">
                  Download
                </Button>
              </div>
            </div>
          </DisclosurePanel>
        </div>
      </div>
    </Disclosure>
  );
}
