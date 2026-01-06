import React from "react";
import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Residential Cleaning", href: "/services" },
    { name: "Commercial Cleaning", href: "/services" },
    { name: "Deep Cleaning", href: "/services" },
    { name: "Move-in/Move-out", href: "/services" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-black rounded-full mr-3"></div>
              <span className="text-xl font-bold">Stinex</span>
            </div>
            <p className="text-muted mb-6 leading-relaxed">
              Professional cleaning services that transform your space. 
              Reliable, thorough, and trusted by hundreds of satisfied customers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-muted">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@stinex.com</span>
              </div>
              <div className="flex items-center text-muted">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">123 Main Street, City, State</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted hover:text-black transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-muted hover:text-black transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-medium mb-6">Business Hours</h3>
            <div className="text-muted space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted text-sm mb-4 md:mb-0">
              © {currentYear} Stinex. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-muted hover:text-black text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;