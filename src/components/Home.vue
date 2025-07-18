<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="slide-in-left">
              <h1 class="display-4 fw-bold mb-4">{{ $t('hero.title') }}</h1>
              <p class="lead mb-4">{{ $t('hero.description') }}</p>
              <div class="d-flex flex-wrap gap-3">
                <router-link to="/templates" class="btn btn-light btn-lg px-4 py-3 glow-effect">
                  <i class="bi bi-eye me-2 rotate-on-hover"></i>{{ $t('hero.viewPortfolio') }}
                </router-link>
                <router-link to="/contact" class="btn btn-outline-light btn-lg px-4 py-3 glow-effect">
                  <i class="bi bi-chat-dots me-2 pulse-animation"></i>{{ $t('hero.getStarted') }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="slide-in-right">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                   alt="Professional Web Development" class="img-fluid rounded-3 shadow-lg float-animation">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">{{ $t('features.title') }}</h2>
          <p class="lead text-muted">We deliver more than just websites - we create digital experiences</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-lightning-charge fs-4 pulse-animation"></i>
                </div>
                <h4 class="card-title">{{ $t('features.lightning.title') }}</h4>
                <p class="card-text">{{ $t('features.lightning.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-phone fs-4 rotate-on-hover"></i>
                </div>
                <h4 class="card-title">{{ $t('features.mobile.title') }}</h4>
                <p class="card-text">{{ $t('features.mobile.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-search fs-4 float-animation"></i>
                </div>
                <h4 class="card-title">{{ $t('features.seo.title') }}</h4>
                <p class="card-text">{{ $t('features.seo.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-shield-check fs-4 pulse-animation"></i>
                </div>
                <h4 class="card-title">{{ $t('features.secure.title') }}</h4>
                <p class="card-text">{{ $t('features.secure.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-heart fs-4 pulse-animation"></i>
                </div>
                <h4 class="card-title">{{ $t('features.userFocused.title') }}</h4>
                <p class="card-text">{{ $t('features.userFocused.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card h-100 text-center p-4 zoom-in glow-effect">
              <div class="card-body">
                <div class="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bounce-in" style="width: 60px; height: 60px;">
                  <i class="bi bi-headset fs-4 rotate-on-hover"></i>
                </div>
                <h4 class="card-title">{{ $t('features.support.title') }}</h4>
                <p class="card-text">{{ $t('features.support.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview -->
    <section class="section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">{{ $t('portfolio.title') }}</h2>
          <p class="lead text-muted">A glimpse of our recent work that speaks for itself</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <img src="/techEshop.png" class="card-img-top" alt="E-commerce Website">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title">Tech E-Shop</h5>
                  <span class="badge bg-primary">$2,500</span>
                </div>
                <p class="card-text">Modern e-commerce platform with advanced filtering,fancy desing and multiple pages.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Vue.js, Bootstrap, custom CSS</small>
                  <div class="d-flex gap-2">
                    <a href="https://eshoptechs.netlify.app/" target="_blank" class="btn btn-primary btn-sm">
                      <i class="bi bi-box-arrow-up-right me-1"></i>View site
                    </a>
                    <button class="btn btn-outline-custom btn-sm">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <img src="/arch.png" class="card-img-top" alt="Corporate Website">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title">Architecture office constructions</h5>
                  <span class="badge bg-success">$1,800</span>
                </div>
                <p class="card-text">Professional and minimal  corporate website with CMS, and client portal integration.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Vue.js, Bootstrap, custom CSS</small>
                  <div class="d-flex gap-2">
                    <a href="https://corporate-portal-demo.webcraft.pro" target="_blank" class="btn btn-primary btn-sm">
                      <i class="bi bi-box-arrow-up-right me-1"></i>View site
                    </a>
                    <button class="btn btn-outline-custom btn-sm">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <img src="/nightBar.png" class="card-img-top" alt="SaaS Platform">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title">Night concept bar</h5>
                  <span class="badge bg-warning">$3,200</span>
                </div>
                <p class="card-text">Landing page for menu, events, gallery and contact infomation about a night bar.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Vue.js, Bootstrap, custom CSS</small>
                  <div class="d-flex gap-2">
                    <a href="https://nightbar.netlify.app/" target="_blank" class="btn btn-primary btn-sm">
                      <i class="bi bi-box-arrow-up-right me-1"></i>View site
                    </a>
                    <button class="btn btn-outline-custom btn-sm">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <router-link to="/templates" class="btn btn-primary-custom btn-lg">
            <i class="bi bi-grid-3x3-gap me-2"></i>View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">What Our Clients Say</h2>
          <p class="lead text-muted">Don't just take our word for it</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="testimonial-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" class="testimonial-avatar" alt="Client">
              <h5>John Smith</h5>
              <p class="text-muted mb-3">CEO, TechStart Inc.</p>
              <p>"Absolutely exceptional work! Our new website increased conversions by 150% in just 3 months. The team was professional and delivered beyond expectations."</p>
              <div class="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="testimonial-card">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&h=100&fit=crop&crop=face" class="testimonial-avatar" alt="Client">
              <h5>Sarah Johnson</h5>
              <p class="text-muted mb-3">Founder, EcoShop</p>
              <p>"The e-commerce platform they built for us is simply amazing. Sales have tripled, and our customers love the user experience. Highly recommend!"</p>
              <div class="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="testimonial-card">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" class="testimonial-avatar" alt="Client">
              <h5>Mike Chen</h5>
              <p class="text-muted mb-3">Director, Global Solutions</p>
              <p>"Outstanding quality and attention to detail. Our corporate website now perfectly represents our brand values. The team understood our vision perfectly."</p>
              <div class="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Investment Packages</h2>
          <p class="lead text-muted">Choose the perfect solution for your business needs</p>
        </div>
        
        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="pricing-card">
              <h3 class="mb-3">Starter</h3>
              <div class="mb-4">
                <span class="h2">$999</span>
                <span class="text-muted">/project</span>
              </div>
              <ul class="list-unstyled mb-4">
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>5-Page Website</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Responsive Design</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Basic SEO</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Contact Form</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>30-Day Support</li>
              </ul>
              <button class="btn btn-outline-custom w-100">Get Started</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="pricing-card featured">
              <h3 class="mb-3">Professional</h3>
              <div class="mb-4">
                <span class="h2">$2,499</span>
                <span class="opacity-75">/project</span>
              </div>
              <ul class="list-unstyled mb-4">
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>10-Page Website</li>
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>Premium Design</li>
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>Advanced SEO</li>
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>CMS Integration</li>
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>E-commerce Ready</li>
                <li class="mb-2"><i class="bi bi-check2 me-2"></i>90-Day Support</li>
              </ul>
              <button class="btn btn-light w-100">Choose Plan</button>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="pricing-card">
              <h3 class="mb-3">Enterprise</h3>
              <div class="mb-4">
                <span class="h2">$4,999</span>
                <span class="text-muted">/project</span>
              </div>
              <ul class="list-unstyled mb-4">
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Unlimited Pages</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Custom Development</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Advanced Features</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>API Integration</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>Database Design</li>
                <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i>1-Year Support</li>
              </ul>
              <button class="btn btn-outline-custom w-100">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="display-5 fw-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p class="lead mb-4">Join hundreds of satisfied clients who have already boosted their business with our premium websites.</p>
            <div class="d-flex flex-wrap gap-3 justify-content-center">
              <router-link to="/contact" class="btn btn-light btn-lg px-4 py-3">
                <i class="bi bi-rocket me-2"></i>Start Your Project
              </router-link>
              <router-link to="/templates" class="btn btn-outline-light btn-lg px-4 py-3">
                <i class="bi bi-collection me-2"></i>Browse Portfolio
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // Add staggered animation delays for different animation types
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });

    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    slideLeftElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.3}s`;
    });

    const slideRightElements = document.querySelectorAll('.slide-in-right');
    slideRightElements.forEach((el, index) => {
      el.style.animationDelay = `${0.2 + index * 0.3}s`;
    });

    const zoomElements = document.querySelectorAll('.zoom-in');
    zoomElements.forEach((el, index) => {
      el.style.animationDelay = `${0.1 * index}s`;
    });

    const bounceElements = document.querySelectorAll('.bounce-in');
    bounceElements.forEach((el, index) => {
      el.style.animationDelay = `${0.3 + index * 0.1}s`;
    });

    // Add intersection observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.zoom-in, .bounce-in, .slide-in-left, .slide-in-right, .fade-in');
    animatedElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }
}
</script>