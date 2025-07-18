<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">Get In Touch</h1>
            <p class="lead mb-4">Ready to start your project? We'd love to hear from you. Let's discuss how we can help bring your digital vision to life.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-lg rounded-3">
              <div class="card-body p-5">
                <h3 class="mb-4">Send us a message</h3>
                
                <form @submit.prevent="submitForm">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label">First Name *</label>
                      <input type="text" class="form-control form-control-lg" id="firstName" 
                             v-model="form.firstName" required>
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label">Last Name *</label>
                      <input type="text" class="form-control form-control-lg" id="lastName" 
                             v-model="form.lastName" required>
                    </div>
                  </div>
                  
                  <div class="row g-3 mt-1">
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email Address *</label>
                      <input type="email" class="form-control form-control-lg" id="email" 
                             v-model="form.email" required>
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input type="tel" class="form-control form-control-lg" id="phone" 
                             v-model="form.phone">
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <label for="company" class="form-label">Company/Organization</label>
                    <input type="text" class="form-control form-control-lg" id="company" 
                           v-model="form.company">
                  </div>
                  
                  <div class="mt-4">
                    <label for="projectType" class="form-label">Project Type *</label>
                    <select class="form-select form-select-lg" id="projectType" 
                            v-model="form.projectType" required>
                      <option value="">Select project type</option>
                      <option value="ecommerce">E-commerce Website</option>
                      <option value="corporate">Corporate Website</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="portfolio">Portfolio Website</option>
                      <option value="custom">Custom Development</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  
                  <div class="mt-4">
                    <label for="budget" class="form-label">Project Budget</label>
                    <select class="form-select form-select-lg" id="budget" v-model="form.budget">
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                    </select>
                  </div>
                  
                  <div class="mt-4">
                    <label for="timeline" class="form-label">Project Timeline</label>
                    <select class="form-select form-select-lg" id="timeline" v-model="form.timeline">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush Job)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div class="mt-4">
                    <label for="message" class="form-label">Project Details *</label>
                    <textarea class="form-control" id="message" rows="6" 
                              v-model="form.message" required
                              placeholder="Please describe your project, goals, and any specific requirements..."></textarea>
                  </div>
                  
                  <div class="mt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="newsletter" 
                             v-model="form.newsletter">
                      <label class="form-check-label" for="newsletter">
                        Subscribe to our newsletter for web development tips and updates
                      </label>
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <button type="submit" class="btn btn-primary-custom btn-lg px-5" 
                            :disabled="isSubmitting">
                      <span v-if="isSubmitting">
                        <i class="bi bi-arrow-clockwise me-2"></i>Sending...
                      </span>
                      <span v-else>
                        <i class="bi bi-send me-2"></i>Send Message
                      </span>
                    </button>
                  </div>
                </form>
                
                <!-- Success Message -->
                <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
                  <i class="bi bi-check-circle me-2"></i>
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="col-lg-4">
            <div class="sticky-top" style="top: 100px;">
              <!-- Contact Details -->
              <div class="card border-0 shadow rounded-3 mb-4">
                <div class="card-body p-4">
                  <h5 class="card-title mb-4">Contact Information</h5>
                  
                  <div class="contact-item d-flex align-items-center mb-3">
                    <div class="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px;">
                      <i class="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <h6 class="mb-1">Address</h6>
                      <p class="text-muted mb-0">123 Web Street<br>Digital City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex align-items-center mb-3">
                    <div class="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px;">
                      <i class="bi bi-phone"></i>
                    </div>
                    <div>
                      <h6 class="mb-1">Phone</h6>
                      <p class="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex align-items-center mb-3">
                    <div class="contact-icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px;">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <div>
                      <h6 class="mb-1">Email</h6>
                      <p class="text-muted mb-0">info@webcraft.pro</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex align-items-center">
                    <div class="contact-icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 45px; height: 45px;">
                      <i class="bi bi-clock"></i>
                    </div>
                    <div>
                      <h6 class="mb-1">Business Hours</h6>
                      <p class="text-muted mb-0">Mon - Fri: 9AM - 6PM<br>Sat - Sun: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div class="card border-0 shadow rounded-3 mb-4">
                <div class="card-body p-4">
                  <h5 class="card-title mb-4">Quick Actions</h5>
                  
                  <div class="d-grid gap-2">
                    <a href="tel:+15551234567" class="btn btn-outline-custom">
                      <i class="bi bi-telephone me-2"></i>Call Us Now
                    </a>
                    <a href="mailto:info@webcraft.pro" class="btn btn-outline-custom">
                      <i class="bi bi-envelope me-2"></i>Send Email
                    </a>
                    <button class="btn btn-outline-custom" @click="scheduleCall">
                      <i class="bi bi-calendar-event me-2"></i>Schedule Call
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="card border-0 shadow rounded-3">
                <div class="card-body p-4">
                  <h5 class="card-title mb-4">Follow Us</h5>
                  
                  <div class="social-links d-flex justify-content-around">
                    <a href="#" class="social-link">
                      <i class="bi bi-facebook fs-4 text-primary"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="bi bi-twitter fs-4 text-info"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="bi bi-instagram fs-4 text-danger"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="bi bi-linkedin fs-4 text-primary"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="bi bi-github fs-4 text-dark"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
          <p class="lead text-muted">Quick answers to common questions about our services</p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    How long does it take to build a website?
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Project timelines vary based on complexity and requirements. A simple business website typically takes 1-2 weeks, while complex e-commerce or SaaS platforms can take 4-8 weeks. We provide detailed timelines during the initial consultation.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    What's included in your website packages?
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    All packages include responsive design, SEO optimization, contact forms, social media integration, and basic training. Higher-tier packages include CMS, e-commerce functionality, advanced integrations, and extended support periods.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    Do you provide ongoing support and maintenance?
                  </button>
                </h2>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes! We offer comprehensive support and maintenance packages. This includes security updates, content updates, performance monitoring, backups, and technical support. Support periods range from 30 days to 1 year depending on your package.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    Can you help with existing website improvements?
                  </button>
                </h2>
                <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Absolutely! We provide website audits, performance optimization, design updates, feature additions, and complete redesigns. We can work with most existing platforms and technologies.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    What payment methods do you accept?
                  </button>
                </h2>
                <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We accept various payment methods including credit cards, bank transfers, PayPal, and cryptocurrency. We typically require 50% upfront and 50% upon project completion, with flexible payment plans for larger projects.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-0">
      <div style="height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
        <div class="text-center text-white">
          <i class="bi bi-geo-alt display-4 mb-3"></i>
          <h4>Visit Our Office</h4>
          <p class="mb-0">123 Web Street, Digital City, DC 12345</p>
          <button class="btn btn-light mt-3">
            <i class="bi bi-map me-2"></i>Get Directions
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        newsletter: false
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        
        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          newsletter: false
        };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    },
    
    scheduleCall() {
      alert('Calendar booking system would open here. For now, please call us directly at +1 (555) 123-4567');
    }
  }
}
</script>

<style scoped>
.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-icon {
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1);
}

.social-link {
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.accordion-button {
  font-weight: 600;
  border-radius: 15px !important;
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.sticky-top {
  z-index: 1000;
}
</style>