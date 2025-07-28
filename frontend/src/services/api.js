import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making API request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API response error:', error);
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      throw new Error(data.message || `Server error: ${status}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Server nicht erreichbar. Bitte versuchen Sie es später erneut.');
    } else {
      // Something else happened
      throw new Error('Ein unerwarteter Fehler ist aufgetreten.');
    }
  }
);

// Contact API
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    try {
      const response = await apiClient.post('/contact/', contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all contacts (admin only)
  getContacts: async (skip = 0, limit = 100) => {
    try {
      const response = await apiClient.get(`/contact/?skip=${skip}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific contact (admin only)
  getContact: async (contactId) => {
    try {
      const response = await apiClient.get(`/contact/${contactId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update contact status (admin only)
  updateContactStatus: async (contactId, status) => {
    try {
      const response = await apiClient.put(`/contact/${contactId}/status`, { status });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Services API
export const servicesAPI = {
  // Get all services
  getServices: async (activeOnly = true) => {
    try {
      const response = await apiClient.get(`/services/?active_only=${activeOnly}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific service
  getService: async (serviceId) => {
    try {
      const response = await apiClient.get(`/services/${serviceId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create service (admin only)
  createService: async (serviceData) => {
    try {
      const response = await apiClient.post('/services/', serviceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update service (admin only)
  updateService: async (serviceId, serviceData) => {
    try {
      const response = await apiClient.put(`/services/${serviceId}`, serviceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete service (admin only)
  deleteService: async (serviceId) => {
    try {
      const response = await apiClient.delete(`/services/${serviceId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Testimonials API
export const testimonialsAPI = {
  // Get all testimonials
  getTestimonials: async (approvedOnly = true) => {
    try {
      const response = await apiClient.get(`/testimonials/?approved_only=${approvedOnly}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific testimonial
  getTestimonial: async (testimonialId) => {
    try {
      const response = await apiClient.get(`/testimonials/${testimonialId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create testimonial
  createTestimonial: async (testimonialData) => {
    try {
      const response = await apiClient.post('/testimonials/', testimonialData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Approve testimonial (admin only)
  approveTestimonial: async (testimonialId) => {
    try {
      const response = await apiClient.put(`/testimonials/${testimonialId}/approve`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update testimonial (admin only)
  updateTestimonial: async (testimonialId, testimonialData) => {
    try {
      const response = await apiClient.put(`/testimonials/${testimonialId}`, testimonialData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete testimonial (admin only)
  deleteTestimonial: async (testimonialId) => {
    try {
      const response = await apiClient.delete(`/testimonials/${testimonialId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Health check API
export const healthAPI = {
  // Check API health
  checkHealth: async () => {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get basic info
  getInfo: async () => {
    try {
      const response = await apiClient.get('/');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default apiClient;