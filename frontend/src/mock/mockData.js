// Mock data for Stinex cleaning service website
// This file contains sample data used throughout the application
// In a real application, this data would come from a backend API

export const mockServices = [
  {
    id: 1,
    title: "Büroreinigung",
    description: "Professionelle Reinigung für Büros, Praxen und Verwaltungsgebäude",
    icon: "Building2",
    pricing: "Ab 15€ pro Stunde",
    features: [
      "Tägliche oder wöchentliche Reinigung",
      "Schreibtische und Arbeitsflächen",
      "Sanitäranlagen und Küchen", 
      "Staubsaugen und Wischen",
      "Fensterreinigung",
      "Müllentsorgung"
    ],
    category: "commercial"
  },
  {
    id: 2,
    title: "Wohnungsreinigung",
    description: "Gründliche Reinigung für Ihr Zuhause - von der Grundreinigung bis zur regelmäßigen Pflege",
    icon: "Home",
    pricing: "Ab 25€ pro Stunde",
    features: [
      "Grundreinigung bei Umzug",
      "Regelmäßige Haushaltsreinigung",
      "Bad- und Küchenreinigung",
      "Fenster innen und außen",
      "Treppenhaus reinigen",
      "Balkon und Terrasse"
    ],
    category: "residential"
  },
  {
    id: 3,
    title: "Gewerbereinigung", 
    description: "Spezialisierte Reinigung für Geschäfte, Restaurants und Industrieobjekte",
    icon: "Store",
    pricing: "Individuell kalkuliert",
    features: [
      "Ladenlokale und Geschäfte",
      "Restaurants und Cafés",
      "Lagerhallen und Werkstätten",
      "Hotelreinigung",
      "Praxen und Kliniken",
      "Industriereinigung"
    ],
    category: "industrial"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Maria Schmidt",
    company: "Schmidt & Partner",
    text: "Stinex reinigt unsere Büroräume seit 2 Jahren. Immer zuverlässig und gründlich!",
    rating: 5,
    avatar: null
  },
  {
    id: 2,
    name: "Thomas Weber", 
    company: "Weber Immobilien",
    text: "Hervorragender Service! Die Qualität stimmt und das Team ist sehr professionell.",
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: "Anna Müller",
    company: "Privatkundin",
    text: "Endlich eine Reinigungsfirma, die hält, was sie verspricht. Sehr empfehlenswert!",
    rating: 5,
    avatar: null
  }
];

export const mockTeamMembers = [
  {
    id: 1,
    name: "Anna Stinex",
    role: "Geschäftsführerin", 
    description: "Gründerin von Stinex mit über 15 Jahren Erfahrung in der Reinigungsbranche",
    avatar: null,
    email: "anna.stinex@stinex.de"
  },
  {
    id: 2,
    name: "Michael Weber",
    role: "Teamleiter",
    description: "Koordiniert unsere Reinigungsteams und sorgt für höchste Qualitätsstandards", 
    avatar: null,
    email: "michael.weber@stinex.de"
  },
  {
    id: 3,
    name: "Sarah König",
    role: "Kundenbetreuung",
    description: "Ihre Ansprechpartnerin für alle Fragen rund um unsere Dienstleistungen",
    avatar: null,
    email: "sarah.koenig@stinex.de"
  }
];

export const mockContactInfo = {
  company: "Stinex Reinigungsservice",
  address: {
    street: "Musterstraße 123",
    city: "Hamburg", 
    postalCode: "20095",
    country: "Deutschland"
  },
  contact: {
    phone: "+49 123 456 789",
    email: "info@stinex.de",
    emergencyPhone: "+49 123 456 000"
  },
  hours: {
    monday: "8:00 - 18:00",
    tuesday: "8:00 - 18:00", 
    wednesday: "8:00 - 18:00",
    thursday: "8:00 - 18:00", 
    friday: "8:00 - 18:00",
    saturday: "9:00 - 16:00",
    sunday: "Nach Vereinbarung"
  },
  socialMedia: {
    facebook: "https://facebook.com/stinex",
    instagram: "https://instagram.com/stinex", 
    twitter: "https://twitter.com/stinex"
  }
};

export const mockServiceAreas = [
  "Hamburg und Umgebung",
  "Norderstedt, Ahrensburg", 
  "Pinneberg, Elmshorn",
  "Lüneburg, Stade",
  "Auf Anfrage: weitere Gebiete"
];

export const mockCompanyStats = {
  customersServed: "500+",
  yearsExperience: "10+", 
  monthlyProjects: "50+",
  availability: "24/7"
};

export const mockCertifications = [
  "ISO 9001 Qualitätsmanagement",
  "Berufsgenossenschaft registriert",
  "Vollversichert und boniert", 
  "HACCP zertifiziert",
  "Umweltschutz Standards"
];

// Mock function to simulate API call for contact form submission
export const submitContactForm = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock validation
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Bitte füllen Sie alle Pflichtfelder aus.");
  }
  
  // Mock successful submission
  console.log("Mock API: Contact form submitted", formData);
  
  return {
    success: true,
    message: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns binnen 24 Stunden bei Ihnen.",
    submissionId: `SUB-${Date.now()}`
  };
};

// Mock function to simulate API call for service quotes
export const requestServiceQuote = async (quoteData) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log("Mock API: Quote requested", quoteData);
  
  return {
    success: true,
    quoteId: `QUO-${Date.now()}`,
    estimatedResponse: "24 Stunden",
    message: "Ihr Angebot wird erstellt. Sie erhalten es in Kürze per E-Mail."
  };
};