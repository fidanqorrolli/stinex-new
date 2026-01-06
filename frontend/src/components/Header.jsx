import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Sparkles, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/services" },
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cyan-100 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-black tracking-tight text-gradient">Stinex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-semibold transition-all duration-300 hover:text-sky-600 relative ${
                  isActive(item.href) ? "text-sky-600" : "text-slate-700"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Info + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-sky-600 bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-bold text-sm">+49 123 456 789</span>
            </div>
            <Button asChild className="btn-primary">
              <Link to="/contact">Kostenlos anfragen</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sky-100 py-8 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-semibold transition-all duration-300 hover:text-sky-600 ${
                    isActive(item.href) ? "text-sky-600" : "text-slate-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center text-sky-600 bg-sky-50 px-4 py-3 rounded-xl border border-sky-200 w-fit">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-bold">+49 123 456 789</span>
              </div>
              <Button asChild className="btn-primary w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Kostenlos anfragen
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;