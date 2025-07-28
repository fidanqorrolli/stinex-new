# Stinex Website - Frontend/Backend Integration Contracts

## Overview
This document defines the API contracts between the Stinex cleaning service frontend and backend, outlining what data is currently mocked and what needs to be implemented in the backend.

## Current Mock Data Status

### Frontend Mock Implementation
The frontend currently uses mock data from `/app/frontend/src/mock/mockData.js` for:
- Service information and pricing
- Customer testimonials
- Team member information
- Company contact details
- Service areas and certifications
- Contact form submissions (simulated)

## Required Backend APIs

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "service": "string (optional)", 
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": boolean,
  "message": "string",
  "submissionId": "string"
}
```

**Frontend Integration:**
- Remove mock `submitContactForm` function from Contact.jsx
- Replace with actual API call to backend
- Handle loading states and error responses

### 2. Service Quote Request
**Endpoint:** `POST /api/quote`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "serviceType": "string (required)",
  "propertySize": "string (optional)",
  "frequency": "string (optional)",
  "additionalDetails": "string (optional)"
}
```

**Response:**
```json
{
  "success": boolean,
  "quoteId": "string",
  "estimatedResponse": "string",
  "message": "string"
}
```

### 3. Services Management
**Endpoint:** `GET /api/services`

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string", 
    "pricing": "string",
    "features": ["string"],
    "category": "string",
    "active": boolean
  }
]
```

### 4. Testimonials Management
**Endpoint:** `GET /api/testimonials`

**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "company": "string",
    "text": "string",
    "rating": number,
    "approved": boolean,
    "createdAt": "string (ISO date)"
  }
]
```

## MongoDB Data Models

### Contact Submission
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String (optional),
  service: String (optional),
  message: String,
  status: String (enum: ['new', 'in_progress', 'completed']),
  createdAt: Date,
  updatedAt: Date
}
```

### Quote Request
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String (optional),
  serviceType: String,
  propertySize: String (optional),
  frequency: String (optional),
  additionalDetails: String (optional),
  status: String (enum: ['pending', 'quoted', 'accepted', 'declined']),
  quoteAmount: Number (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### Service
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  pricing: String,
  features: [String],
  category: String (enum: ['commercial', 'residential', 'industrial']),
  active: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Testimonial
```javascript
{
  _id: ObjectId,
  name: String,
  company: String,
  text: String,
  rating: Number (1-5),
  approved: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Integration Steps

### Phase 1: Contact Form Backend
1. Create Contact model in MongoDB
2. Implement POST /api/contact endpoint
3. Add email notification service (optional)
4. Update frontend Contact.jsx to use real API

### Phase 2: Services Management
1. Create Service model in MongoDB
2. Seed database with current mock services
3. Implement GET /api/services endpoint
4. Update frontend to fetch services from API

### Phase 3: Testimonials System
1. Create Testimonial model in MongoDB
2. Seed database with current mock testimonials
3. Implement GET /api/testimonials endpoint
4. Update Homepage.jsx to fetch testimonials from API

### Phase 4: Quote System (Optional Enhancement)
1. Create Quote model in MongoDB
2. Implement POST /api/quote endpoint
3. Add quote management endpoints for admin
4. Create quote request form on frontend

## Environment Variables Needed

### Backend (.env)
```
MONGO_URL=<existing>
DB_NAME=<existing>
EMAIL_HOST=<smtp host for notifications>
EMAIL_USER=<email username>
EMAIL_PASS=<email password>
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<existing>
```

## Error Handling

### Backend Error Responses
All endpoints should return consistent error format:
```json
{
  "success": false,
  "error": "error_code",
  "message": "Human readable error message"
}
```

### Frontend Error Handling
- Display user-friendly error messages
- Handle network errors gracefully
- Show loading states during API calls
- Validate form inputs before submission

## Testing Requirements

### Backend Testing
- Test all API endpoints with valid/invalid data
- Test database connections and operations
- Test error handling and edge cases

### Frontend Integration Testing
- Test form submissions with backend
- Test error state handling
- Test loading state UI
- Verify data display from backend APIs

## Security Considerations

### Backend Security
- Input validation and sanitization
- Rate limiting on form endpoints
- CORS configuration
- Basic request validation

### Frontend Security
- Client-side form validation
- Sanitize user inputs
- Handle sensitive data appropriately
- Secure API communication