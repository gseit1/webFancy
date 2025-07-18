<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="WebCraft Pro" class="logo-img me-2">
          <span class="brand-text">WebFancy</span>
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item nav-item-animated">
              <router-link class="nav-link" to="/">{{ $t('nav.home') }}</router-link>
            </li>
            <li class="nav-item nav-item-animated">
              <router-link class="nav-link" to="/templates">{{ $t('nav.gallery') }}</router-link>
            </li>
            <li class="nav-item nav-item-animated">
              <router-link class="nav-link" to="/about">{{ $t('nav.about') }}</router-link>
            </li>
            <li class="nav-item nav-item-animated">
              <router-link class="nav-link" to="/contact">{{ $t('nav.contact') }}</router-link>
            </li>
            <li class="nav-item">
              <div class="language-toggle ms-3">
                <button 
                  class="btn language-switcher"
                  @click="toggleLanguage"
                  :title="currentLanguage === 'en' ? 'Switch to Greek' : 'Switch to English'">
                  <i class="bi bi-globe2 me-1"></i>
                  <span class="lang-text">{{ currentLanguage === 'en' ? 'GR' : 'EN' }}</span>
                  <div class="language-indicator"></div>
                </button>
              </div>
            </li>
            <li class="nav-item">
              <button class="btn btn-primary-custom ms-2 pulse-animation">{{ $t('nav.getStarted') }}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main style="margin-top: 80px;">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="d-flex align-items-center mb-3">
              <img src="/logo.png" alt="WebCraft Pro" class="footer-logo me-2">
              <h5 class="mb-0">WebFancy Pro</h5>
            </div>
            <p class="mb-4">{{ $t('footer.description') }}</p>
            <div class="d-flex">
              <a href="#" class="me-3"><i class="bi bi-facebook fs-5"></i></a>
              <a href="#" class="me-3"><i class="bi bi-twitter fs-5"></i></a>
              <a href="#" class="me-3"><i class="bi bi-instagram fs-5"></i></a>
              <a href="#" class="me-3"><i class="bi bi-linkedin fs-5"></i></a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>{{ $t('footer.services') }}</h5>
            <ul class="list-unstyled">
              <li><a href="#">{{ $t('footer.webDesign') }}</a></li>
              <li><a href="#">{{ $t('footer.ecommerce') }}</a></li>
              <li><a href="#">{{ $t('footer.mobileApps') }}</a></li>
              <li><a href="#">{{ $t('footer.seo') }}</a></li>
              <li><a href="#">{{ $t('footer.maintenance') }}</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>{{ $t('footer.company') }}</h5>
            <ul class="list-unstyled">
              <li><a href="#">{{ $t('footer.aboutUs') }}</a></li>
              <li><a href="#">{{ $t('footer.portfolio') }}</a></li>
              <li><a href="#">{{ $t('footer.careers') }}</a></li>
              <li><a href="#">{{ $t('footer.blog') }}</a></li>
              <li><a href="#">{{ $t('footer.contact') }}</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>{{ $t('footer.resources') }}</h5>
            <ul class="list-unstyled">
              <li><a href="#">{{ $t('footer.documentation') }}</a></li>
              <li><a href="#">{{ $t('footer.helpCenter') }}</a></li>
              <li><a href="#">{{ $t('footer.privacy') }}</a></li>
              <li><a href="#">{{ $t('footer.terms') }}</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>{{ $t('footer.contactInfo') }}</h5>
            <p><i class="bi bi-geo-alt me-2"></i>123 Web Street<br>Digital City, DC 12345</p>
            <p><i class="bi bi-phone me-2"></i>+1 (555) 123-4567</p>
            <p><i class="bi bi-envelope me-2"></i>info@webcraft.pro</p>
          </div>
        </div>
        
        <hr class="my-4">
        
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>&copy; 2025 {{ $t('footer.copyright') }}</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p>{{ $t('footer.madeWith') }} <i class="bi bi-heart-fill text-danger"></i> {{ $t('footer.forBusinesses') }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const { locale } = useI18n()
    
    const currentLanguage = computed(() => locale.value)
    
    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'el' : 'en'
    }
    
    return {
      currentLanguage,
      toggleLanguage
    }
  }
}
</script>

<style>
/* Router link active states */
.router-link-active {
  color: #667eea !important;
  font-weight: 600;
}

/* Logo styles */
.logo-img {
  height: 40px;
  width: auto;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.navbar-brand:hover .logo-img {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
}

.brand-text {
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-text {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  -webkit-background-clip: text;
  background-clip: text;
  transform: translateX(3px);
}

/* Responsive logo adjustments */
@media (max-width: 768px) {
  .logo-img {
    height: 35px;
  }
  
  .brand-text {
    font-size: 1.25rem;
  }
}

/* Footer logo */
.footer-logo {
  height: 35px;
  width: auto;
  filter: brightness(0) invert(1); /* Makes logo white for dark footer */
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.1) rotate(-5deg);
}

/* Navigation animations */
.nav-item-animated {
  position: relative;
  overflow: hidden;
}

.nav-item-animated::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: left 0.3s ease;
}

.nav-item-animated:hover::before {
  left: 0;
}

.nav-item-animated .nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-item-animated:hover .nav-link {
  transform: translateY(-2px);
  color: #667eea !important;
}

/* Language Switcher Styles */
.language-switcher {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 25px;
  color: white;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.language-switcher::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(118, 75, 162, 0.8) 0%, rgba(102, 126, 234, 0.8) 100%);
  transition: left 0.3s ease;
  z-index: 0;
}

.language-switcher:hover::before {
  left: 0;
}

.language-switcher:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  border-color: rgba(102, 126, 234, 0.5);
}

.language-switcher:active {
  transform: translateY(0) scale(0.98);
}

.language-switcher .bi-globe2,
.language-switcher .lang-text {
  position: relative;
  z-index: 1;
}

.language-indicator {
  position: absolute;
  top: 50%;
  right: 4px;
  width: 6px;
  height: 6px;
  background: #4ade80;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-50%) scale(1.2);
  }
}

/* Mobile responsive language switcher */
@media (max-width: 768px) {
  .language-switcher {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .language-indicator {
    width: 5px;
    height: 5px;
    right: 3px;
  }
}
</style>