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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
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
          <div className="flex flex-1 items-center justify-start sm:items-center sm:justify-between">
            <div className="flex flex-shrink-0 items-center gap-1">
              <img
                alt="Your Company"
                src="/logo.svg"
                height={30}
                width={30}
                className="h-7 w-auto"
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
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-[#1E2337]"
                  : "text-[#1E2337] hover:bg-gray-700 hover:text-[#1E2337]",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <Button className="inline-flex sm:hidden w-full justify-center items-center px-4 py-2 border border-[#E9EEF1] rounded-full text-[#1E2337] bg-white hover:bg-gray-100">
            Download
          </Button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
