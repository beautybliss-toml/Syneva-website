import React from "react";
import { Git, Linkdin, Mail, Telegram, Twitter } from "../assets/images";
import { Link } from "react-router-dom";

const FooterLink = ({ text, link }: { text: string; link: string }) => (
  <Link
    to={link}
    className="text-[#1e2337] text-sm font-medium leading-tight hover:text-[#007bff] transition"
  >
    {text}
  </Link>
);

const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="md:w-6 md:h-6 w-9 h-9 mx-2 flex items-center justify-center">
    <img src={icon} alt="social icon" className="w-full h-full" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#f7f9fb] py-8">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid md:grid-cols-4 grid-cols-2 py-5 gap-5">
          {/* Logo Section */}
          <div className="grid items-center mb-6 md:mb-0 lg:col-span-1 col-span-2">
            <div className="flex items-center mb-3 md:mb-0">
              <img
                className="w-[38px] h-[30px] mr-2"
                src="/logo.svg"
                alt="Syneva Logo"
              />
              <h1 className="text-[#1e2337] text-4xl font-bold">Syneva</h1>
            </div>
            <p className="max-w-[172px] opacity-70 text-[#1e2337] text-sm font-normal md:my-5 my-2">
              Fast, secure, and scalable DeFi solutions built on The Open
              Network.
            </p>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 mb-6 md:mb-0 lg:col-span-1 col-span-1">
            <FooterLink text="Team" link="#team" />
            <FooterLink text="Stake" link="#stake" />
            <FooterLink text="Swap" link="#swap" />
            <FooterLink text="Reward" link="#reward" />
          </nav>
          <nav className="flex flex-col gap-3 mb-6 md:mb-0 lg:col-span-2 col-span-1">
            <FooterLink text="Download" link="#download" />
            <FooterLink text="Privacy Policy" link="#privacy" />
            <FooterLink text="Terms of Use" link="#terms" />
          </nav>
        </div>
        <div className="flex justify-between md:flex-row flex-col-reverse">
          {/* Footer Bottom Text */}
          <div className="text-[#98b2bf] text-sm">
            Syneva © 2024 All Rights Reserved
          </div>
          {/* Social Media Icons */}
          <div className="flex md:justify-end mb-4">
            <SocialIcon icon={Linkdin} />
            <SocialIcon icon={Telegram} />
            <SocialIcon icon={Git} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Mail} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
