/**
 * ============================================================================
 * MODERN DEVELOPER PORTFOLIO - JAVASCRIPT
 * Developer: Nidhish (BCA Student & Aspiring Software Developer)
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM ELEMENTS
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const desktopNavLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const currentYearSpan = document.getElementById('currentYear');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailContactLink = document.getElementById('emailContactLink');
  const contactForm = document.getElementById('contactForm');
  const formStatusAlert = document.getElementById('formStatusAlert');
  const revealItems = document.querySelectorAll('.reveal-item');

  // Check user's motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --------------------------------------------------------------------------
  // 2. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 3. HEADER SCROLL & GLASSMORPHISM EFFECT
  // --------------------------------------------------------------------------
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run initially in case page loaded scrolled

  // --------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION DRAWER TOGGLE
  // --------------------------------------------------------------------------
  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) return;
    mobileMenuToggle.classList.add('is-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuToggle) return;
    mobileMenuToggle.classList.remove('is-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Close mobile navigation when clicking any mobile link
  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  // Close mobile navigation on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
      mobileMenuToggle.focus();
    }
  });

  // Close mobile navigation when resizing past mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // --------------------------------------------------------------------------
  // 5. SMOOTH SCROLLING WITH OFFSET FOR FIXED HEADER
  // --------------------------------------------------------------------------
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

  allAnchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Calculate offset position to account for fixed header
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        // Update URL hash without jump
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }

        // Accessibility: set focus to target if applicable
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. ACTIVE SECTION HIGHLIGHTING (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          updateActiveNavLinks(currentId);
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function updateActiveNavLinks(activeId) {
    desktopNavLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. SCROLL REVEAL ANIMATIONS
  // --------------------------------------------------------------------------
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Reveal only once for performance
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    // If reduced motion or no IntersectionObserver, display items immediately
    revealItems.forEach(function (item) {
      item.classList.add('revealed');
    });
  }

  // --------------------------------------------------------------------------
  // 8. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  function handleBackToTopVisibility() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. COPY CODE SNIPPET TO CLIPBOARD
  // --------------------------------------------------------------------------
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', function () {
      const codeSnippet = `const developer = {
  name: "Nidhish Devadiga",
  github: "codewithdizzzy",
  linkedin: "nidhish-devadiga-0632092b5",
  degree: "BCA (Computer Applications)",
  role: "Aspiring Software Developer",
  primaryLanguages: ["Python", "Java", "JavaScript"],
  focusAreas: ["Practical Problem Solving", "Clean Code Practices", "Modern Web Interfaces"],
  openForInternships: true,
  sayHello: function() {
    return "Let's build something great together!";
  }
};`;

      copyTextToClipboard(codeSnippet, copyCodeBtn);
    });
  }

  // --------------------------------------------------------------------------
  // 10. COPY EMAIL TO CLIPBOARD
  // --------------------------------------------------------------------------
  if (copyEmailBtn && emailContactLink) {
    copyEmailBtn.addEventListener('click', function () {
      const emailText = emailContactLink.textContent.trim();
      copyTextToClipboard(emailText, copyEmailBtn);
    });
  }

  function copyTextToClipboard(text, triggerButton) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () {
          showCopyFeedback(triggerButton);
        },
        function () {
          fallbackCopyText(text, triggerButton);
        }
      );
    } else {
      fallbackCopyText(text, triggerButton);
    }
  }

  function fallbackCopyText(text, triggerButton) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showCopyFeedback(triggerButton);
    } catch (err) {
      console.warn('Fallback copy failed: ', err);
    }

    document.body.removeChild(textArea);
  }

  function showCopyFeedback(triggerButton) {
    const tooltip = triggerButton.querySelector('.copy-tooltip');
    if (tooltip) {
      tooltip.classList.add('show');
      setTimeout(function () {
        tooltip.classList.remove('show');
      }, 2000);
    }
  }

  // --------------------------------------------------------------------------
  // 11. CONTACT FORM CLIENT-SIDE VALIDATION & MAILTO FALLBACK
  // --------------------------------------------------------------------------
  if (contactForm) {
    const senderNameInput = document.getElementById('senderName');
    const senderEmailInput = document.getElementById('senderEmail');
    const messageSubjectInput = document.getElementById('messageSubject');
    const senderMessageInput = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Input blur real-time validation
    senderNameInput.addEventListener('blur', validateName);
    senderEmailInput.addEventListener('blur', validateEmail);
    senderMessageInput.addEventListener('blur', validateMessage);

    function validateName() {
      const val = senderNameInput.value.trim();
      if (!val) {
        showError(senderNameInput, nameError, 'Please enter your name.');
        return false;
      }
      if (val.length < 2) {
        showError(senderNameInput, nameError, 'Name must be at least 2 characters.');
        return false;
      }
      clearError(senderNameInput, nameError);
      return true;
    }

    function validateEmail() {
      const val = senderEmailInput.value.trim();
      if (!val) {
        showError(senderEmailInput, emailError, 'Please enter your email address.');
        return false;
      }
      if (!emailRegex.test(val)) {
        showError(senderEmailInput, emailError, 'Please enter a valid email address.');
        return false;
      }
      clearError(senderEmailInput, emailError);
      return true;
    }

    function validateMessage() {
      const val = senderMessageInput.value.trim();
      if (!val) {
        showError(senderMessageInput, messageError, 'Please enter a message.');
        return false;
      }
      if (val.length < 10) {
        showError(senderMessageInput, messageError, 'Message must be at least 10 characters.');
        return false;
      }
      clearError(senderMessageInput, messageError);
      return true;
    }

    function showError(inputElement, errorElement, message) {
      inputElement.classList.add('is-invalid');
      inputElement.setAttribute('aria-invalid', 'true');
      errorElement.textContent = message;
    }

    function clearError(inputElement, errorElement) {
      inputElement.classList.remove('is-invalid');
      inputElement.removeAttribute('aria-invalid');
      errorElement.textContent = '';
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        // Focus the first invalid input
        if (!isNameValid) senderNameInput.focus();
        else if (!isEmailValid) senderEmailInput.focus();
        else if (!isMessageValid) senderMessageInput.focus();
        return;
      }

      const name = senderNameInput.value.trim();
      const email = senderEmailInput.value.trim();
      const subject = messageSubjectInput ? messageSubjectInput.value.trim() : '';
      const message = senderMessageInput.value.trim();

      // Recipient placeholder email (user can change this in index.html/script.js)
      const recipientEmail = 'your.email@example.com';
      const emailSubject = subject || `Portfolio Inquiry from ${name}`;
      const emailBody = `Hi Nidhish,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

      // Construct mailto link as reliable fallback for static site
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

      // Display informative success message
      formStatusAlert.className = 'form-status-alert alert-success';
      formStatusAlert.innerHTML = `
        <strong>Message prepared!</strong><br>
        Opening your default email client to send your message to <em>${recipientEmail}</em>. 
        <br><small>To send directly without an email app, configure a backend like Formspree or Web3Forms.</small>
      `;
      formStatusAlert.style.display = 'block';

      // Open email client
      setTimeout(function () {
        window.location.href = mailtoUrl;
      }, 600);

      // Reset form fields
      contactForm.reset();

      // Clear alert after 8 seconds
      setTimeout(function () {
        formStatusAlert.style.display = 'none';
      }, 8000);
    });
  }

})();
