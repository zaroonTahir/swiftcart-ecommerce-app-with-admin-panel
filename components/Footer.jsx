import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const linkSections = [
    {
      title: "PRODUCTS",
      links: [
        { text: "Earphones", path: "/" },
        { text: "Headphones", path: "/" },
        { text: "Smartphones", path: "/" },
        { text: "Laptops", path: "/" },
      ],
    },
    {
      title: "WEBSITE?",
      links: [
        { text: "Home", path: "/" },
        { text: "Privacy Policy", path: "/" },
        { text: "Become Plus Member", path: "/pricing" },
        { text: "Create Your Store", path: "/create-store" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { text: "+1-212-456-7890", path: "/" },
        { text: "contact@example.com", path: "/" },
        { text: "794 Francisco, 94102", path: "/" },
      ],
    },
  ];

  const socialIcons = [
    { label: "Facebook", link: "https://www.facebook.com", icon: Facebook },
    { label: "Instagram", link: "https://www.instagram.com", icon: Instagram },
    { label: "Twitter", link: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", link: "https://www.linkedin.com", icon: Linkedin },
  ];

  return (
    <footer className="mx-6 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-700">
          {/* Logo + Description */}
          <div>
            <Link
              href="/"
              className="text-4xl font-semibold text-white"
            >
              <span className="text-green-500">swift</span>cart
              <span className="text-green-500 text-5xl leading-0">.</span>
            </Link>
            <p className="max-w-[410px] mt-6 text-sm text-gray-400">
              Welcome to swiftcart, your ultimate destination for the latest and
              smartest gadgets. From smartphones and smartwatches to essential
              accessories, we bring you the best in innovation — all in one
              place.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    href={item.link}
                    key={i}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-green-600 transition rounded-full"
                    aria-label={item.label}
                  >
                    <Icon size={18} className="text-white" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-white md:mb-5 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Link
                        href={link.path}
                        className="hover:text-green-400 transition"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <p className="py-4 text-sm text-gray-500 text-center md:text-left">
          Copyright 2025 © swiftcart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
