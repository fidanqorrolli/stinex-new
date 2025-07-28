import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { 
  Building2, 
  Home, 
  Store, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  Award,
  Clock,
  Shield
} from "lucide-react";

const Homepage = () => {
  const services = [
    {
      icon: Building2,
      title: "Büroreinigung",
      description: "Professionelle Reinigung für Büros und Geschäftsräume",
      color: "text-blue-600"
    },
    {
      icon: Home,
      title: "Wohnungsreinigung",
      description: "Gründliche Reinigung für Ihr Zuhause",
      color: "text-green-600"
    },
    {
      icon: Store,
      title: "Gewerbereinigung",
      description: "Spezialisierte Reinigung für Gewerbeobjekte",
      color: "text-purple-600"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Erfahrenes Team",
      description: "Über 10 Jahre Erfahrung in der Reinigungsbranche"
    },
    {
      icon: Award,
      title: "Zertifizierte Qualität",
      description: "Höchste Standards und zertifizierte Verfahren"
    },
    {
      icon: Clock,
      title: "Flexible Zeiten",
      description: "Reinigung nach Ihrem Zeitplan, auch außerhalb der Geschäftszeiten"
    },
    {
      icon: Shield,
      title: "Vollversichert",
      description: "Umfassender Versicherungsschutz für Ihre Sicherheit"
    }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      company: "Schmidt & Partner",
      text: "Stinex reinigt unsere Büroräume seit 2 Jahren. Immer zuverlässig und gründlich!",
      rating: 5
    },
    {
      name: "Thomas Weber",
      company: "Weber Immobilien",
      text: "Hervorragender Service! Die Qualität stimmt und das Team ist sehr professionell.",
      rating: 5
    },
    {
      name: "Anna Müller",
      company: "Privatkundin",
      text: "Endlich eine Reinigungsfirma, die hält, was sie verspricht. Sehr empfehlenswert!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sauberkeit, die
            <span className="text-blue-600 block">überzeugt</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionelle Reinigungsdienstleistungen für Büros, Wohnungen und Gewerbeobjekte. 
            Zuverlässig, gründlich und zu fairen Preisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 h-auto"
            >
              <Link to="/contact">
                Kostenlos anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 h-auto"
            >
              <Link to="/services">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der kleinen Wohnung bis zum großen Bürogebäude - wir reinigen alles professionell
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum Stinex?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Vorteile sprechen für unseren professionellen Reinigungsservice
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vertrauen Sie auf die Erfahrungen zufriedener Kunden
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bereit für professionelle Sauberkeit?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Kontaktieren Sie uns für ein unverbindliches Angebot. 
            Wir beraten Sie gerne und finden die perfekte Lösung für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto"
            >
              <Link to="/contact">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 h-auto"
            >
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;