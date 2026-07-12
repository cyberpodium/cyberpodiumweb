/**
 * CYBERPODIUM RUNTIME ENGINE LAYER
 * Production Grade Vanilla Interaction & Telemetry Scripting
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Structural Layers
    initStickyNavbar();
    initMobileMenu();
    initThemeManager();
    initScrollTelemetry();
    initTypingEngine();
    initCounterMetrics();
    initScrollRevealEngine();
    initAccordionSystems();
    initTestimonialCarousel();
    initCookieShield();
    initFormInterceptors();
});

// Sticky Navbar Logic
function initStickyNavbar() {
    const nav = document.getElementById("mainNavbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}

// Mobile Menu Responsive Controller
function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("navMenu");
    
    if(hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
            hamburger.classList.toggle("open");
            // Animate hamburger lines
            const bars = hamburger.querySelectorAll(".bar");
            if(hamburger.classList.contains("open")) {
                bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    }
}

// Theme Engine Implementation
function initThemeManager() {
    const toggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("cp-theme") || "dark";
    
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateToggleIcon(toggle, currentTheme);

    if(toggle) {
        toggle.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme");
            const targetTheme = activeTheme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", targetTheme);
            localStorage.setItem("cp-theme", targetTheme);
            updateToggleIcon(toggle, targetTheme);
        });
    }
}

function updateToggleIcon(btn, theme) {
    if(!btn) return;
    const icon = btn.querySelector("i");
    if(theme === "light") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

// Global Scroll Monitoring Telemetry
function initScrollTelemetry() {
    const progress = document.getElementById("scrollProgress");
    const btt = document.getElementById("backToTop");
    
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if(progress) progress.style.width = scrolled + "%";
        
        if(btt) {
            if (window.scrollY > 400) {
                btt.classList.add("visible");
            } else {
                btt.classList.remove("visible");
            }
        }
    });

    if(btt) {
        btt.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

// Typography Telemetry (Hero Automation Loop)
function initTypingEngine() {
    const element = document.getElementById("typing-text");
    if(!element) return;
    
    const operationalPhrases = [
        "Architect for high availability.",
        "Automate isolated container pipelines.",
        "Deploy robust multi-tenant arrays."
    ];
    
    let phraseIndex = 0;
    let characterIndex = 0;
    let deletionFlag = false;
    
    function processTypeSequence() {
        const rawPhrase = operationalPhrases[phraseIndex];
        
        if (!deletionFlag) {
            element.textContent = rawPhrase.substring(0, characterIndex + 1);
            characterIndex++;
            
            if (characterIndex === rawPhrase.length) {
                deletionFlag = true;
                setTimeout(processTypeSequence, 2200); // Wait state at string termination
            } else {
                setTimeout(processTypeSequence, 55);
            }
        } else {
            element.textContent = rawPhrase.substring(0, characterIndex - 1);
            characterIndex--;
            
            if (characterIndex === 0) {
                deletionFlag = false;
                phraseIndex = (phraseIndex + 1) % operationalPhrases.length;
                setTimeout(processTypeSequence, 400);
            } else {
                setTimeout(processTypeSequence, 30);
            }
        }
    }
    processTypeSequence();
}

// Interactive Dashboard Stats Counter Engine
function initCounterMetrics() {
    const metrics = document.querySelectorAll(".stat-number");
    if(metrics.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const targetValue = parseInt(entry.target.getAttribute("data-target"));
                executeCountIncrement(entry.target, targetValue);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    
    metrics.forEach(node => observer.observe(node));
}

function executeCountIncrement(element, maxLimit) {
    let rawStart = 0;
    const timingStep = maxLimit > 1000 ? Math.floor(maxLimit / 60) : 2;
    const interval = setInterval(() => {
        rawStart += timingStep;
        if(rawStart >= maxLimit) {
            element.textContent = maxLimit.toLocaleString() + "+";
            clearInterval(interval);
        } else {
            element.textContent = rawStart.toLocaleString();
        }
    }, 20);
}

// Intersection Visibility Engine Trigger
function initScrollRevealEngine() {
    const actions = document.querySelectorAll(".reveal-fade, .reveal-slide-up");
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                item.target.classList.add("active");
                revealObserver.unobserve(item.target);
            }
        });
    }, { threshold: 0.15 });
    
    actions.forEach(element => {
        // Force active flag immediately if in view layout baseline
        if(element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("active");
        } else {
            revealObserver.observe(element);
        }
    });
}

// Accordion Execution Module
function initAccordionSystems() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(head => {
        head.addEventListener("click", () => {
            const scopeParent = head.parentElement;
            const icon = head.querySelector("i");
            scopeParent.classList.toggle("open");
            
            if(scopeParent.classList.contains("open")) {
                icon.className = "fa-solid fa-minus";
            } else {
                icon.className = "fa-solid fa-plus";
            }
        });
    });
}

// Sliding Slider System Mechanism
function initTestimonialCarousel() {
    const strip = document.getElementById("testimonialTrack");
    const next = document.getElementById("nextBtn");
    const prev = document.getElementById("prevBtn");
    
    if(!strip || !next || !prev) return;
    
    let logicalPos = 0;
    
    next.addEventListener("click", () => {
        logicalPos = -50;
        strip.style.transform = `translateX(${logicalPos}%)`;
    });
    
    prev.addEventListener("click", () => {
        logicalPos = 0;
        strip.style.transform = `translateX(${logicalPos}%)`;
    });
}

// Cookie Verification Operations
function initCookieShield() {
    const panel = document.getElementById("cookieBanner");
    const confirmBtn = document.getElementById("acceptCookies");
    
    if(!panel) return;
    
    if(!localStorage.getItem("cp-telemetry-auth")) {
        setTimeout(() => panel.classList.add("active"), 1500);
    }
    
    if(confirmBtn) {
        confirmBtn.addEventListener("click", () => {
            localStorage.setItem("cp-telemetry-auth", "authorized");
            panel.classList.remove("active");
        });
    }
}

// Forms Data Validation Pipelines
function initFormInterceptors() {
    const terminalForm = document.getElementById("contactTerminalForm");
    if(!terminalForm) return;
    
    terminalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let passing = true;
        const nameNode = document.getElementById("contactName");
        const mailNode = document.getElementById("contactEmail");
        const msgNode = document.getElementById("contactMessage");
        
        if(nameNode.value.trim().length < 3) {
            document.getElementById("nameError").style.display = "block";
            passing = false;
        } else {
            document.getElementById("nameError").style.display = "none";
        }
        
        if(!mailNode.value.includes("@") || mailNode.value.trim().length < 5) {
            document.getElementById("emailError").style.display = "block";
            passing = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }
        
        if(msgNode.value.trim().length < 10) {
            document.getElementById("messageError").style.display = "block";
            passing = false;
        } else {
            document.getElementById("messageError").style.display = "none";
        }
        
        if(passing) {
            alert("Packet transmission successful. Operations validation verified.");
            terminalForm.reset();
        }
    });
}