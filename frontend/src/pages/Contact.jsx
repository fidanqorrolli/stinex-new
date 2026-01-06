import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { contactAPI } from "../services/api";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await contactAPI.submitContact(formData);
      
      toast({
        title: "✅ Message sent successfully!",
        description: response.message || "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      toast({
        title: "❌ Error sending message",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@stinex.com",
      description: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Main Street, City, State 12345",
      description: "Our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8:00 AM - 6:00 PM",
      description: "Sat: 9:00 AM - 4:00 PM"
    }
  ];

  const services = [
    "Residential Cleaning",
    "Commercial Cleaning", 
    "Deep Cleaning",
    "Move-in/Move-out Cleaning",
    "Post-Construction Cleanup",
    "Window Cleaning",
    "Other"
  ];

  const serviceAreas = [
    "Downtown Area",
    "North District",
    "South District", 
    "East Side",
    "West Side",
    "Suburban Areas",
    "Surrounding Counties"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="section">
        <div className="container text-center">
          <h1 className="mb-8">Get In Touch</h1>
          <p className="text-large text-muted max-w-3xl mx-auto">
            Have questions or ready to schedule your cleaning service? 
            We'd love to hear from you and provide a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="minimal-card">
                <h2 className="mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm font-medium mb-2 block">
                        Service Needed
                      </Label>
                      <Select 
                        onValueChange={handleSelectChange} 
                        value={formData.service}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your cleaning needs, property size, frequency, or any special requirements..."
                      className="form-textarea"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-small text-muted text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="minimal-card">
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{info.title}</h4>
                          <p className="font-medium">{info.content}</p>
                          <p className="text-small text-muted">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Service Areas */}
              <div className="minimal-card">
                <h3 className="mb-4">Service Areas</h3>
                <p className="text-small text-muted mb-4">
                  We proudly serve these areas:
                </p>
                <div className="space-y-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-small">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-black text-white">
        <div className="container text-center">
          <h2 className="text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Call us now for immediate assistance or to schedule your free consultation.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100">
            <a href="tel:+15551234567">
              <Phone className="mr-2 h-4 w-4" />
              Call Now: (555) 123-4567
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;