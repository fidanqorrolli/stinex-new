import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/services" },
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/contact" }
  ];

  const services = [
    { name: "Büroreinigung", href: "/services" },
    { name: "Wohnungsreinigung", href: "/services" },
    { name: "Gewerbereinigung", href: "/services" },
    { name: "Grundreinigung", href: "/services" }
  ];

  const legalLinks = [
    { name: "Impressum", href: "#impressum" },
    { name: "Datenschutz", href: "#datenschutz" },
    { name: "AGB", href: "#agb" },
    { name: "Widerruf", href: "#widerruf" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Stinex</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professionelle Reinigungsdienstleistungen für Büros, Wohnungen und Gewerbeobjekte. 
              Zuverlässig, gründlich und zu fairen Preisen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@stinex.de</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Musterstraße 123, 20095 Hamburg</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com/stinex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/stinex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/stinex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            <h4 className="font-semibold mb-2">Öffnungszeiten</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <div>Mo-Fr: 8:00 - 18:00 Uhr</div>
              <div>Sa: 9:00 - 16:00 Uhr</div>
              <div>So: Nach Vereinbarung</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Stinex Reinigungsservice. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Impressum Modal Content (Hidden by default, would be shown in modal) */}
        <div id="impressum" className="hidden">
          <h2>Impressum</h2>
          <p>
            <strong>Stinex Reinigungsservice</strong><br />
            Musterstraße 123<br />
            20095 Hamburg<br />
            Deutschland
          </p>
          <p>
            <strong>Vertreten durch:</strong><br />
            Anna Stinex (Geschäftsführerin)
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: +49 123 456 789<br />
            E-Mail: info@stinex.de
          </p>
          <p>
            <strong>Registereintrag:</strong><br />
            Handelsregister: HRB 123456<br />
            Registergericht: Amtsgericht Hamburg
          </p>
          <p>
            <strong>Umsatzsteuer-ID:</strong><br />
            DE123456789
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;