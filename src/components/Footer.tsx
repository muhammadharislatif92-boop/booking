import React from 'react';
import { Twitter, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Investor Relations', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Ticket Guarantee', href: '#' },
        { name: 'Sell Tickets', href: '#' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Concerts', href: '#' },
        { name: 'Sports', href: '#' },
        { name: 'Theater', href: '#' },
        { name: 'Comedy', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Accessibility', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">
              VividSeats
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted marketplace for live event tickets. Buy and sell with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>1-888-VIVID-1 (1-888-848-4314)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>support@vividseats.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 VividSeats. All rights reserved.
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="text-sm">We accept:</span>
              <div className="flex space-x-3">
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                  VISA
                </div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                  MC
                </div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                  AMEX
                </div>
                <div className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                  DISCOVER
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                ✓ 100% Buyer Guarantee
              </span>
              <span className="flex items-center">
                ✓ Secure SSL Encryption
              </span>
              <span className="flex items-center">
                ✓ Instant Download
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;