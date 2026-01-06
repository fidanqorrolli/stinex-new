import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Satisfied Customers" },
    { number: "12", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every cleaning task, ensuring the highest quality results."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Fully bonded and insured team members you can trust in your home or office."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent, punctual service that fits your schedule and meets your expectations."
    },
    {
      icon: Users,
      title: "Care",
      description: "We treat every space with the same care and attention we'd give our own homes."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "With over 15 years in the cleaning industry, Sarah founded Stinex with a vision of providing exceptional cleaning services."
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      description: "Michael ensures our cleaning teams maintain the highest standards and deliver consistent quality across all services."
    },
    {
      name: "Emma Davis",
      role: "Customer Success",
      description: "Emma works closely with our clients to ensure their cleaning needs are met and exceeded every time."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section">
        <div className="container text-center">
          <h1 className="mb-8">About Stinex</h1>
          <p className="text-large text-muted max-w-3xl mx-auto">
            For over a decade, we've been transforming spaces and exceeding expectations 
            with our professional cleaning services. What started as a small local business 
            has grown into a trusted cleaning partner for hundreds of satisfied customers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-8">Our Story</h2>
              <div className="space-y-6 text-muted">
                <p>
                  Stinex was founded in 2012 with a simple mission: to provide exceptional 
                  cleaning services that give our customers more time to focus on what matters most. 
                  What began as a small team of three has grown into a company of over 25 professional 
                  cleaning specialists.
                </p>
                <p>
                  Our success is built on three core principles: exceptional service, fair pricing, 
                  and absolute reliability. These values have made us the preferred cleaning partner 
                  for residential and commercial clients throughout the region.
                </p>
                <p>
                  Today, we maintain over 300 regular cleaning accounts and have completed more than 
                  2,000 one-time cleaning projects. Despite our growth, our commitment remains unchanged: 
                  every customer deserves nothing less than perfect results.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <p>Professional Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-sm bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-large text-muted max-w-2xl mx-auto">
              These core values guide everything we do and set us apart in the cleaning industry.
            </p>
          </div>
          <div className="grid grid-2 lg:grid-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-large text-muted max-w-2xl mx-auto">
              Get to know the dedicated professionals behind Stinex's exceptional service.
            </p>
          </div>
          <div className="grid grid-3">
            {team.map((member, index) => (
              <div key={index} className="minimal-card text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-gray-500" />
                </div>
                <h3 className="mb-2">{member.name}</h3>
                <div className="text-small text-muted mb-4">{member.role}</div>
                <p className="text-muted">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-black text-white">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Stinex with their cleaning needs.
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

export default About;