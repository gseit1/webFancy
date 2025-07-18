<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">Website Gallery</h1>
            <p class="lead mb-4">Explore our portfolio of stunning websites across various industries. Each project represents our commitment to excellence and innovation.</p>
            
            <!-- Filter Buttons -->
            <div class="d-flex flex-wrap gap-2 justify-content-center mb-4">
              <button class="btn btn-light" :class="{ active: activeFilter === 'all' }" @click="filterProjects('all')">All Projects</button>
              <button class="btn btn-outline-light" :class="{ active: activeFilter === 'ecommerce' }" @click="filterProjects('ecommerce')">E-commerce</button>
              <button class="btn btn-outline-light" :class="{ active: activeFilter === 'corporate' }" @click="filterProjects('corporate')">Corporate</button>
              <button class="btn btn-outline-light" :class="{ active: activeFilter === 'saas' }" @click="filterProjects('saas')">SaaS</button>
              <button class="btn btn-outline-light" :class="{ active: activeFilter === 'portfolio' }" @click="filterProjects('portfolio')">Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding">
      <div class="container">
        <div class="row g-4">
          <div v-for="project in filteredProjects" :key="project.id" class="col-lg-4 col-md-6 project-item" :data-category="project.category">
            <div class="card project-card">
              <div class="position-relative overflow-hidden">
                <img :src="project.image" class="card-img-top" :alt="project.title">
                <div class="overlay">
                  <div class="overlay-content">
                    <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="btn btn-light btn-sm me-2 mb-2">
                      <i class="bi bi-box-arrow-up-right me-1"></i>Live Demo
                    </a>
                    <button class="btn btn-info btn-sm me-2 mb-2" @click="viewProject(project)">
                      <i class="bi bi-eye me-1"></i>Preview
                    </button>
                    <button class="btn btn-primary-custom btn-sm mb-2" @click="purchaseProject(project)">
                      <i class="bi bi-cart-plus me-1"></i>Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title mb-0">{{ project.title }}</h5>
                  <span class="badge" :class="getBadgeClass(project.category)">{{ project.category }}</span>
                </div>
                <p class="card-text text-muted mb-3">{{ project.description }}</p>
                
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="tech-stack">
                    <span v-for="tech in project.technologies" :key="tech" class="badge bg-light text-dark me-1">{{ tech }}</span>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between align-items-center">
                  <div class="pricing">
                    <span class="h5 text-primary mb-0">${{ project.price }}</span>
                    <small class="text-muted ms-1">one-time</small>
                  </div>
                  <div class="rating">
                    <i v-for="star in 5" :key="star" class="bi bi-star-fill text-warning"></i>
                    <small class="text-muted ms-1">({{ project.reviews }})</small>
                  </div>
                </div>
                
                <div class="mt-3">
                  <div class="row text-center">
                    <div class="col-4">
                      <small class="text-muted">Pages</small>
                      <div class="fw-bold">{{ project.pages }}</div>
                    </div>
                    <div class="col-4">
                      <small class="text-muted">Delivery</small>
                      <div class="fw-bold">{{ project.delivery }}</div>
                    </div>
                    <div class="col-4">
                      <small class="text-muted">Support</small>
                      <div class="fw-bold">{{ project.support }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-5" v-if="!showingAll">
          <button class="btn btn-outline-custom btn-lg" @click="loadMore">
            <i class="bi bi-arrow-down-circle me-2"></i>Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Custom Development CTA -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-6 fw-bold mb-4">Need Something Custom?</h2>
            <p class="lead mb-4">Don't see exactly what you're looking for? Our team specializes in creating unique, tailor-made websites that perfectly match your vision and business requirements.</p>
            
            <div class="row g-3 mb-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <span>Custom Design & Development</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <span>Advanced Functionality</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <span>API Integrations</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
            
            <router-link to="/contact" class="btn btn-primary-custom btn-lg">
              <i class="bi bi-chat-dots me-2"></i>Discuss Your Project
            </router-link>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                 alt="Custom Development" class="img-fluid rounded-3 shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" v-if="selectedProject">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedProject.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img :src="selectedProject.image" class="img-fluid rounded mb-4" :alt="selectedProject.title">
            
            <div class="row">
              <div class="col-md-8">
                <h6>Project Description</h6>
                <p>{{ selectedProject.fullDescription }}</p>
                
                <h6>Key Features</h6>
                <ul>
                  <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
                </ul>
                
                <h6>Technologies Used</h6>
                <div class="mb-3">
                  <span v-for="tech in selectedProject.technologies" :key="tech" class="badge bg-primary me-1">{{ tech }}</span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center mb-3">
                      <span class="h4 text-primary">${{ selectedProject.price }}</span>
                      <small class="text-muted d-block">One-time payment</small>
                    </div>
                    
                    <ul class="list-unstyled">
                      <li class="mb-2"><i class="bi bi-check text-success me-2"></i>{{ selectedProject.pages }} Pages</li>
                      <li class="mb-2"><i class="bi bi-check text-success me-2"></i>{{ selectedProject.delivery }} Delivery</li>
                      <li class="mb-2"><i class="bi bi-check text-success me-2"></i>{{ selectedProject.support }} Support</li>
                      <li class="mb-2"><i class="bi bi-check text-success me-2"></i>Source Code Included</li>
                      <li class="mb-2"><i class="bi bi-check text-success me-2"></i>Documentation</li>
                    </ul>
                    
                    <button class="btn btn-primary-custom w-100 mb-2" @click="purchaseProject(selectedProject)">
                      <i class="bi bi-cart-plus me-2"></i>Purchase Now
                    </button>
                    <button class="btn btn-outline-custom w-100">
                      <i class="bi bi-chat me-2"></i>Ask Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Templates',
  data() {
    return {
      activeFilter: 'all',
      showingAll: false,
      selectedProject: null,
      projects: [
        {
          id: 1,
          title: 'StreetStyle eShop',
          category: 'ecommerce',
          description: 'Modern e-commerce platform with advanced filtering, payment integration, and inventory management.',
          fullDescription: 'A complete luxury e-commerce solution featuring advanced product filtering, wishlist functionality, secure payment processing, inventory management, and a beautiful admin dashboard.',
          image: '/eshop1.png',
          demoUrl: 'https://tiwraa.netlify.app/',
          price: 2500,
          pages: '3+',
          delivery: '4 days',
          support: '90 days',
          reviews: 28,
          technologies: ['React', 'Node.js', 'Stripe'],
          features: [
            'Product catalog with advanced filtering',
            'Shopping cart and checkout system',
            'User authentication and profiles',
            'Payment gateway integration',
            'Admin dashboard',
            'Inventory management',
            'Order tracking system'
          ]
        },
        {
          id: 2,
          title: 'Small greek history facts',
          category: 'corporate',
          description: 'Professional corporate website with CMS, blog functionality, and client portal integration.',
          fullDescription: 'A sophisticated corporate website featuring content management system, client portal, team profiles, service showcases, and integrated contact forms.',
          image: '/greek.png',
          demoUrl: 'https://greekhistory.netlify.app/',
          price: 1800,
          pages: '10',
          delivery: '10 days',
          support: '60 days',
          reviews: 35,
          technologies: ['Vue.js', 'Laravel', 'MySQL'],
          features: [
            'Content Management System',
            'Team member profiles',
            'Service showcase pages',
            'Client testimonials',
            'Contact forms',
            'Blog functionality',
            'SEO optimization'
          ]
        },
        {
          id: 3,
          title: 'Cooking recipes by ingredients',
          category: 'saas',
          description: 'Complete SaaS platform with user management, analytics, and subscription billing system.',
          fullDescription: 'A comprehensive SaaS platform featuring user management, subscription billing, analytics dashboard, API integrations, and multi-tenant architecture.',
          image: '/cook.png',
          demoUrl: 'https://magirikifast.netlify.app/',
          price: 3200,
          pages: '20+',
          delivery: '21 days',
          support: '120 days',
          reviews: 19,
          technologies: ['Next.js', 'Python', 'PostgreSQL'],
          features: [
            'User authentication and management',
            'Subscription billing system',
            'Analytics dashboard',
            'API management',
            'Multi-tenant architecture',
            'Real-time notifications',
            'Data export functionality'
          ]
        },
        {
          id: 4,
          title: 'Night Bar Landing page',
          category: 'portfolio',
          description: 'Stunning portfolio website for creative professionals and agencies.',
          fullDescription: 'A visually striking portfolio website designed for creative professionals, featuring smooth animations, project galleries, and client testimonials.',
          image: '/nightBar.png',
          demoUrl: 'https://nightbar.netlify.app/',
          price: 1200,
          pages: '8',
          delivery: '7 days',
          support: '30 days',
          reviews: 42,
          technologies: ['Vue.js', 'GSAP', 'Firebase'],
          features: [
            'Interactive project gallery',
            'Smooth scroll animations',
            'Contact form integration',
            'Blog functionality',
            'Social media integration',
            'SEO optimization',
            'Mobile responsive design'
          ]
        },
        {
          id: 5,
          title: 'Tech eShop',
          category: 'ecommerce',
          description: 'Modern restaurant website with online ordering and delivery system.',
          fullDescription: 'A complete restaurant solution with online menu, ordering system, delivery tracking, table reservations, and customer reviews.',
          image: '/techEshop.png',
          demoUrl: 'https://eshoptechs.netlify.app/',
          price: 2200,
          pages: '12',
          delivery: '12 days',
          support: '75 days',
          reviews: 31,
          technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
          features: [
            'Online menu with categories',
            'Order management system',
            'Delivery tracking',
            'Table reservation system',
            'Customer reviews',
            'Payment integration',
            'Admin dashboard'
          ]
        },
        {
          id: 6,
          title: 'Archtecture  constructions office',
          category: 'saas',
          description: 'Comprehensive healthcare management system with patient portal.',
          fullDescription: 'A secure healthcare platform featuring patient management, appointment scheduling, telemedicine capabilities, and medical records management.',
          image: '/arch.png',
          demoUrl: 'https://archoffice.netlify.app/',
          price: 4500,
          pages: '25+',
          delivery: '28 days',
          support: '180 days',
          reviews: 15,
          technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
          features: [
            'Patient management system',
            'Appointment scheduling',
            'Telemedicine video calls',
            'Medical records management',
            'Prescription system',
            'Insurance integration',
            'HIPAA compliance'
          ]
        },
        {
          id: 7,
          title: 'Coffee Shop',
          category: 'saas',
          description: 'Comprehensive healthcare management system with patient portal.',
          fullDescription: 'A secure healthcare platform featuring patient management, appointment scheduling, telemedicine capabilities, and medical records management.',
          image: '/9market.png',
          demoUrl: 'https://9markettest.netlify.app/',
          price: 4500,
          pages: '25+',
          delivery: '28 days',
          support: '180 days',
          reviews: 15,
          technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
          features: [
            'Patient management system',
            'Appointment scheduling',
            'Telemedicine video calls',
            'Medical records management',
            'Prescription system',
            'Insurance integration',
            'HIPAA compliance'
          ]
        },
                {
          id: 8,
          title: 'Coffee Shop',
          category: 'saas',
          description: 'Comprehensive healthcare management system with patient portal.',
          fullDescription: 'A secure healthcare platform featuring patient management, appointment scheduling, telemedicine capabilities, and medical records management.',
          image: '/neat.png',
          demoUrl: 'https://neatlandingpage.netlify.app/',
          price: 4500,
          pages: '25+',
          delivery: '28 days',
          support: '180 days',
          reviews: 15,
          technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
          features: [
            'Patient management system',
            'Appointment scheduling',
            'Telemedicine video calls',
            'Medical records management',
            'Prescription system',
            'Insurance integration',
            'HIPAA compliance'
          ]
        },
         {
          id: 9,
          title: 'E-invitations and RSVP',
          category: 'saas',
          description: 'Comprehensive healthcare management system with patient portal.',
          fullDescription: 'A secure healthcare platform featuring patient management, appointment scheduling, telemedicine capabilities, and medical records management.',
          image: '/eprosklitiria.png',
          demoUrl: 'https://eprosklitiria.netlify.app/',
          price: 4500,
          pages: '25+',
          delivery: '28 days',
          support: '180 days',
          reviews: 15,
          technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
          features: [
            'Patient management system',
            'Appointment scheduling',
            'Telemedicine video calls',
            'Medical records management',
            'Prescription system',
            'Insurance integration',
            'HIPAA compliance'
          ]
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    }
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category;
    },
    getBadgeClass(category) {
      const classes = {
        'ecommerce': 'bg-success',
        'corporate': 'bg-primary',
        'saas': 'bg-warning',
        'portfolio': 'bg-info'
      };
      return classes[category] || 'bg-secondary';
    },
    viewProject(project) {
      this.selectedProject = project;
      const modal = new bootstrap.Modal(document.getElementById('projectModal'));
      modal.show();
    },
    purchaseProject(project) {
      // Handle purchase logic here
      alert(`Initiating purchase for ${project.title} - $${project.price}`);
    },
    loadMore() {
      this.showingAll = true;
    }
  }
}
</script>

<style scoped>
.project-card {
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card:hover .overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(20px);
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.tech-stack .badge {
  font-size: 0.7rem;
}

.btn.active {
  background-color: white !important;
  color: #667eea !important;
  font-weight: 600;
}

.modal-content {
  border: none;
  border-radius: 15px;
  overflow: hidden;
}
</style>