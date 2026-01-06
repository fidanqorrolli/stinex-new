import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircle, ArrowRight, Clock, Shield, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Complete home cleaning solutions for your living space.",
      features: [
        "Weekly, bi-weekly, or monthly service",
        "Deep cleaning and maintenance",
        "Kitchen and bathroom sanitization",
        "Floor care and vacuuming",
        "Window and surface cleaning",
        "Customizable cleaning plans"
      ],
      price: "Starting at $120"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and business cleaning services.",
      features: [
        "Daily, weekly, or custom schedules",
        "Office and workspace cleaning",
        "Restroom and break room sanitation",
        "Floor maintenance and carpet care",
        "Window and glass cleaning",
        "After-hours service available"
      ],
      price: "Custom pricing"
    },
    {
      title: "Deep Cleaning",
      description: "Intensive cleaning for move-ins, move-outs, and special occasions.",
      features: [
        "Comprehensive top-to-bottom cleaning",
        "Inside appliance cleaning",
        "Detailed bathroom and kitchen work",
        "Baseboard and window sill cleaning",
        "Light fixture and fan cleaning",
        "Cabinet and drawer interior cleaning"
      ],
      price: "Starting at $250"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Get Quote",
      description: "Contact us for a free, no-obligation quote tailored to your needs."
    },
    {
      step: "02",
      title: "Schedule",
      description: "Choose a convenient time that works with your schedule."
    },
    {
      step: "03",
      title: "Clean",
      description: "Our professional team delivers exceptional cleaning results."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Saving",
      description: "Focus on what matters most while we handle the cleaning."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with full insurance coverage."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our cleaning services."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section">
        <div className="container text-center">
          <h1 className="mb-8">Our Services</h1>
          <p className="text-large text-muted max-w-3xl mx-auto">
            Professional cleaning services designed to meet your specific needs. 
            From regular maintenance to deep cleaning, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-sm">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="minimal-card">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div>
                    <h3 className="mb-4">{service.title}</h3>
                    <p className="text-muted mb-6">{service.description}</p>
                    <div className="text-2xl font-bold mb-6">{service.price}</div>
                    <Button asChild className="btn-primary">
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium mb-4">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-large text-muted max-w-2xl mx-auto">
              Getting started with our cleaning services is simple and straightforward.
            </p>
          </div>
          <div className="grid grid-3">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Our Services</h2>
            <p className="text-large text-muted max-w-2xl mx-auto">
              We're committed to providing exceptional cleaning services that exceed your expectations.
            </p>
          </div>
          <div className="grid grid-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4">{benefit.title}</h3>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-black text-white">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us take care of your cleaning needs.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;