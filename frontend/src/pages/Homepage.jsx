import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { servicesAPI, testimonialsAPI } from "../services/api";
import { ArrowRight, CheckCircle, Quote, Star, Zap, Shield, Award, Leaf } from "lucide-react";

const Homepage = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [servicesData, testimonialsData] = await Promise.all([
          servicesAPI.getServices(true),
          testimonialsAPI.getTestimonials(true)
        ]);
        setServices(servicesData || []);
        setTestimonials(testimonialsData || []);
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const stats = [
    { number: "500+", label: "Zufriedene Kunden", icon: Star },
    { number: "12", label: "Jahre Erfahrung", icon: Award },
    { number: "98%", label: "Kundenzufriedenheit", icon: Shield },
    { number: "24/7", label: "Service verfügbar", icon: Zap }
  ];

  const features = [
    {
      icon: Leaf,
      title: "🌿 Umweltfreundlich",
      description: "100% ökologische Reinigungsmittel für nachhaltige Sauberkeit"
    },
    {
      icon: Zap,
      title: "⚡ Blitzschnell",
      description: "Express-Service und Same-Day-Termine nach Ihren Wünschen"
    },
    {
      icon: Shield,
      title: "🛡️ Vollversichert",
      description: "Kompletter Versicherungsschutz und geprüfte Mitarbeiter"
    },
    {
      icon: Award,
      title: "🏆 Premium-Qualität",
      description: "Erstklassiger Service zu fairen und transparenten Preisen"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section gradient-shift relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-300/30 rounded-full blur-2xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container text-center relative z-10">
          <div className="fade-in-up max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-bold border border-white/30 shadow-lg">
                <Zap className="h-4 w-4 mr-2" />
                Hamburgs modernster Reinigungsservice
              </span>
            </div>
            <h1 className="mb-8 text-white">
              Sauberkeit der
              <br />
              <span className="text-white">Zukunft</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Erleben Sie <span className="font-bold text-white">revolutionäre Reinigungstechnologie</span> – 
              wo Innovation auf Perfektion trifft und jeder Raum zum strahlenden Wohlfühlort wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-in-scale">
              <Button asChild className="bg-white text-sky-600 hover:bg-gray-50 text-lg px-10 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <Link to="/contact">
                  🚀 Jetzt kostenlos anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary text-lg px-10 py-4 h-auto">
                <Link to="/services">
                  ✨ Services entdecken
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center modern-card group hover:scale-105 transition-all duration-300">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-sky-600 group-hover:text-cyan-600 transition-colors" />
                  <div className="text-4xl font-black mb-2 text-gradient">{stat.number}</div>
                  <div className="text-small text-muted font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 rounded-full text-sm font-bold border border-sky-200 mb-8">
              <Star className="h-4 w-4 mr-2" />
              Unsere Premium-Services
            </span>
            <h2 className="mb-6 text-gradient">
              Revolutionäre
              <br />Reinigungslösungen
            </h2>
            <p className="text-large text-muted max-w-3xl mx-auto leading-relaxed">
              Von der gemütlichen Wohnung bis zum modernen Bürokomplex – 
              wir verwandeln <span className="font-bold text-sky-700">jeden Raum in eine Oase der Sauberkeit</span> 
              mit modernster Technologie und nachhaltigen Methoden.
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="modern-card loading-shimmer">
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-3">
              {services.slice(0, 3).map((service, index) => (
                <div key={service.id || index} className="modern-card group hover:scale-105 transition-all duration-300">
                  <div className="icon-container group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CheckCircle className="h-10 w-10 text-white relative z-10" />
                  </div>
                  <h3 className="mb-4 group-hover:text-sky-600 transition-colors text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-full">
                      <span className="text-sky-700 font-bold text-sm">
                        💎 {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Button asChild className="btn-secondary text-lg px-10 py-4">
              <Link to="/services">
                🎯 Alle Services entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-sm bg-gradient-to-br from-emerald-50/50 to-sky-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-800 rounded-full text-sm font-bold border border-emerald-200 mb-8">
              <Award className="h-4 w-4 mr-2" />
              Warum Stinex?
            </span>
            <h2 className="mb-6 text-gradient">
              Außergewöhnliche
              <br />Vorteile
            </h2>
            <p className="text-large text-muted max-w-3xl mx-auto leading-relaxed">
              Diese einzigartigen Stärken machen uns zum <span className="font-bold text-sky-700">führenden Reinigungspartner</span> 
              anspruchsvoller Kunden in Hamburg und Umgebung.
            </p>
          </div>
          
          <div className="grid grid-2 lg:grid-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="modern-card text-center group hover:scale-105 transition-all duration-300">
                  <Icon className="h-12 w-12 mx-auto mb-6 text-sky-600 group-hover:text-emerald-600 transition-colors" />
                  <h3 className="mb-4 group-hover:text-sky-700 transition-colors text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          {!loading && testimonials.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <div className="modern-card text-center">
                <Quote className="h-16 w-16 mx-auto mb-8 text-sky-400" />
                <blockquote className="text-3xl font-light leading-relaxed mb-8 text-slate-700 italic">
                  "{testimonials[0].text}"
                </blockquote>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[0].rating || 5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-900">{testimonials[0].name}</div>
                  <div className="text-sky-600 font-semibold">{testimonials[0].company}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm gradient-shift text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-white mb-6 text-5xl font-black">
            Bereit für die
            <span className="block">Sauberkeits-Revolution? 🚀</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Kontaktieren Sie uns noch heute für Ihr <span className="font-bold text-white">kostenloses Premium-Angebot</span> 
            und entdecken Sie, warum Hunderte von Kunden uns als ihren Reinigungspartner vertrauen!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-gray-50 text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact">
                💎 Jetzt kostenlos beraten lassen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-10 py-6 h-auto">
              <Link to="/about">
                🏆 Mehr über uns erfahren
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;