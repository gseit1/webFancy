<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">About WebCraft Pro</h1>
            <p class="lead mb-4">We are a passionate team of digital craftsmen dedicated to creating exceptional web experiences that drive business growth and user engagement.</p>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/contact" class="btn btn-light btn-lg">
                <i class="bi bi-chat-dots me-2"></i>Work With Us
              </router-link>
              <router-link to="/templates" class="btn btn-outline-light btn-lg">
                <i class="bi bi-collection me-2"></i>View Our Work
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                 alt="Our Team" class="img-fluid rounded-3 shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold mb-4">Our Story</h2>
            <p class="lead text-muted mb-5">Founded in 2020, WebCraft Pro emerged from a simple belief: every business deserves a website that not only looks amazing but also delivers real results. What started as a small team of developers has grown into a full-service digital agency trusted by companies worldwide.</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 text-center">
            <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
              <i class="bi bi-lightbulb fs-3"></i>
            </div>
            <h4>Innovation First</h4>
            <p class="text-muted">We stay ahead of the curve, incorporating the latest technologies and design trends to give your business a competitive edge.</p>
          </div>
          
          <div class="col-lg-4 text-center">
            <div class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
              <i class="bi bi-people fs-3"></i>
            </div>
            <h4>Client-Focused</h4>
            <p class="text-muted">Your success is our success. We work closely with each client to understand their unique needs and deliver solutions that exceed expectations.</p>
          </div>
          
          <div class="col-lg-4 text-center">
            <div class="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
              <i class="bi bi-award fs-3"></i>
            </div>
            <h4>Quality Driven</h4>
            <p class="text-muted">We never compromise on quality. Every line of code, every design element is crafted with precision and attention to detail.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-primary mb-2">200+</h2>
              <h5>Projects Completed</h5>
              <p class="text-muted">Successful websites delivered across various industries</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-success mb-2">150+</h2>
              <h5>Happy Clients</h5>
              <p class="text-muted">Businesses that trust us with their digital presence</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-warning mb-2">99.9%</h2>
              <h5>Uptime Guarantee</h5>
              <p class="text-muted">Reliable hosting and maintenance services</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-info mb-2">24/7</h2>
              <h5>Support Available</h5>
              <p class="text-muted">Round-the-clock assistance for all our clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Meet Our Team</h2>
          <p class="lead text-muted">The talented individuals who bring your digital dreams to life</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="John Doe">
                <h5 class="card-title">John Doe</h5>
                <p class="text-primary fw-semibold mb-3">CEO & Lead Developer</p>
                <p class="card-text text-muted mb-3">Full-stack developer with 8+ years of experience in creating scalable web applications and leading development teams.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-twitter text-info"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-github text-dark"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="Sarah Smith">
                <h5 class="card-title">Sarah Smith</h5>
                <p class="text-primary fw-semibold mb-3">Creative Director</p>
                <p class="card-text text-muted mb-3">Award-winning designer specializing in user experience and brand identity with a passion for creating memorable digital experiences.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-dribbble text-danger"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-behance text-info"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="Mike Johnson">
                <h5 class="card-title">Mike Johnson</h5>
                <p class="text-primary fw-semibold mb-3">Technical Lead</p>
                <p class="card-text text-muted mb-3">Expert in modern JavaScript frameworks and cloud architecture, ensuring our solutions are both innovative and reliable.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-github text-dark"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-stack-overflow text-warning"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="Emily Chen">
                <h5 class="card-title">Emily Chen</h5>
                <p class="text-primary fw-semibold mb-3">Project Manager</p>
                <p class="card-text text-muted mb-3">Certified PMP with expertise in agile methodologies, ensuring projects are delivered on time and within budget.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-twitter text-info"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="David Wilson">
                <h5 class="card-title">David Wilson</h5>
                <p class="text-primary fw-semibold mb-3">DevOps Engineer</p>
                <p class="card-text text-muted mb-3">Cloud infrastructure specialist focused on security, scalability, and continuous deployment practices.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-github text-dark"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="card team-card text-center">
              <div class="card-body p-4">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" 
                     class="team-avatar mb-3" alt="Lisa Rodriguez">
                <h5 class="card-title">Lisa Rodriguez</h5>
                <p class="text-primary fw-semibold mb-3">Marketing Specialist</p>
                <p class="card-text text-muted mb-3">Digital marketing expert specializing in SEO, content strategy, and conversion optimization.</p>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="bi bi-linkedin text-primary"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-twitter text-info"></i></a>
                  <a href="#" class="me-2"><i class="bi bi-instagram text-danger"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Our Values</h2>
          <p class="lead text-muted">The principles that guide everything we do</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <i class="bi bi-shield-check fs-4"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Integrity</h5>
                <p class="text-muted mb-0">We believe in transparent communication, honest pricing, and delivering exactly what we promise. Your trust is our most valuable asset.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <i class="bi bi-rocket-takeoff fs-4"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Innovation</h5>
                <p class="text-muted mb-0">We continuously explore new technologies and methodologies to provide cutting-edge solutions that give our clients a competitive advantage.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <i class="bi bi-people-fill fs-4"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Collaboration</h5>
                <p class="text-muted mb-0">We work as an extension of your team, fostering open communication and collaborative problem-solving to achieve the best results.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <i class="bi bi-graph-up-arrow fs-4"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>Excellence</h5>
                <p class="text-muted mb-0">We strive for perfection in every project, from initial concept to final delivery. Quality is never negotiable in our work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Our Process</h2>
          <p class="lead text-muted">How we turn your vision into reality</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="process-step">
              <div class="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                <span class="fw-bold">1</span>
              </div>
              <h5>Discovery</h5>
              <p class="text-muted">We start by understanding your business, goals, and target audience to create a tailored strategy.</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 text-center">
            <div class="process-step">
              <div class="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                <span class="fw-bold">2</span>
              </div>
              <h5>Design</h5>
              <p class="text-muted">Our creative team crafts beautiful, user-focused designs that align with your brand and objectives.</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 text-center">
            <div class="process-step">
              <div class="step-number bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                <span class="fw-bold">3</span>
              </div>
              <h5>Development</h5>
              <p class="text-muted">We bring designs to life with clean, efficient code and cutting-edge technology stack.</p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 text-center">
            <div class="process-step">
              <div class="step-number bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                <span class="fw-bold">4</span>
              </div>
              <h5>Launch</h5>
              <p class="text-muted">We thoroughly test, optimize, and deploy your website with ongoing support and maintenance.</p>
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
            <h2 class="display-5 fw-bold mb-4">Ready to Work With Us?</h2>
            <p class="lead mb-4">Let's discuss your project and create something amazing together. We're excited to help bring your vision to life.</p>
            <div class="d-flex flex-wrap gap-3 justify-content-center">
              <router-link to="/contact" class="btn btn-light btn-lg px-4 py-3">
                <i class="bi bi-chat-dots me-2"></i>Start a Conversation
              </router-link>
              <router-link to="/templates" class="btn btn-outline-light btn-lg px-4 py-3">
                <i class="bi bi-eye me-2"></i>See Our Work
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
  name: 'About'
}
</script>

<style scoped>
.team-card {
  transition: all 0.3s ease;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.team-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f8f9fa;
}

.social-links a {
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
}

.stat-item {
  padding: 20px;
}

.process-step {
  padding: 20px;
}

.step-number {
  font-size: 1.5rem;
}
</style>