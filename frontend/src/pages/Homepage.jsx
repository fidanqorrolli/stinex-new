import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { servicesAPI, testimonialsAPI } from "../services/api";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";

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
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "12", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    "Professional cleaning solutions",
    "Eco-friendly products",
    "Flexible scheduling",
    "Fully insured & bonded"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section">
        <div className="container text-center">
          <div className="fade-in-up max-w-4xl mx-auto">
            <h1 className="mb-8">
              Professional Cleaning
              <br />
              <span className="text-gray-600">Made Simple</span>
            </h1>
            <p className="text-large text-muted mb-12 max-w-2xl mx-auto">
              Transform your space with our premium cleaning services. 
              Reliable, thorough, and trusted by hundreds of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up-delay">
              <Button asChild className="btn-primary">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-small text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-large text-muted max-w-2xl mx-auto">
              From residential homes to commercial offices, we provide 
              comprehensive cleaning solutions tailored to your needs.
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="minimal-card animate-pulse">
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-3">
              {services.slice(0, 3).map((service, index) => (
                <div key={service.id || index} className="minimal-card group">
                  <h3 className="mb-4 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-small font-medium">
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose Us</h2>
              <p className="text-large text-muted">
                We're committed to delivering exceptional cleaning services 
                that exceed your expectations.
              </p>
            </div>
            <div className="grid grid-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-4 flex-shrink-0" />
                  <span className="text-large">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          {!loading && testimonials.length > 0 && (
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 mx-auto mb-8 text-gray-300" />
              <blockquote className="text-2xl font-light leading-relaxed mb-8">
                "{testimonials[0].text}"
              </blockquote>
              <div>
                <div className="font-medium text-lg">{testimonials[0].name}</div>
                <div className="text-muted">{testimonials[0].company}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-black text-white">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why hundreds of customers 
            trust us with their cleaning needs.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;