/**
 * Argon Studio Execution Engine Vector
 * Complete implementation incorporating WebGL Shaders, GSAP Scroll Sequencing, 
 * 3D Layout Multi-perspective tracking, and Dashboard Security validations.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Master Core Sub-routines
    initCustomPointerEngine();
    initThreeJsSpaceMatrix();
    initGsapTransitionMatrix();
    initPerspectiveLayer3D();
    initLeadFunnelProcessing();
    initAdministrativeDashboard();
    initMobileNavSystem();
});

/* Pointer Tracking Logic Pipeline */
function initCustomPointerEngine() {
    const cursorOutline = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");

    if (!cursorOutline || !cursorDot) return;

    window.addEventListener("mousemove", (e) => {
        // Linear position matching via execution animation frames
        gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05 });
        gsap.to(cursorOutline, { x: e.clientX, y: e.clientY, duration: 0.15 });
    });

    // Handle interactive state scale triggers
    const interactiveTargets = document.querySelectorAll("a, button, .glass-card, input, select, textarea");
    interactiveTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.backgroundColor = "rgba(212, 255, 0, 0.08)";
        });
        target.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "20px";
            cursorOutline.style.height = "20px";
            cursorOutline.style.backgroundColor = "transparent";
        });
    });
}

/* High-Performance WebGL Fluid Particle Space Background via Three.js Shaders */
function initThreeJsSpaceMatrix() {
    const canvas = document.getElementById("webgl-bg");
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030712); // Sync deep neutral hex code baseline

    // Geometry Generation Scheme
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const scaleMatrices = new Float32Array(count);

    for (let i = 0; i < count * 3; i += 3) {
        // Generate uniform layout metrics spread in geometric box spatial boundaries
        positions[i] = (Math.random() - 0.5) * 45;
        positions[i + 1] = (Math.random() - 0.5) * 45;
        positions[i + 2] = (Math.random() - 0.5) * 45;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Shader Framework Implementation for Visual Fluid Dynamics
    const material = new THREE.PointsMaterial({
        size: 0.08,
        color: 0xd4ff00, // Argon Brand Signature Neon Highlight Core Accent
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particleSystemNode = new THREE.Points(geometry, material);
    scene.add(particleSystemNode);

    // Camera Configuration Parameters
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 25;

    // Track Mouse Coordinates to introduce subtle spatial physics turbulence tracking
    let pointerX = 0, pointerY = 0;
    window.addEventListener('mousemove', (event) => {
        pointerX = (event.clientX / window.innerWidth) - 0.5;
        pointerY = (event.clientY / window.innerHeight) - 0.5;
    });

    const clock = new THREE.Clock();

    function renderLoopFrame() {
        const elapsedTime = clock.getElapsedTime();

        // Structural geometric rotation computations
        particleSystemNode.rotation.y = elapsedTime * 0.015;
        particleSystemNode.rotation.x = elapsedTime * 0.008;

        // Introduce mouse tracking calculation matrix transformations
        camera.position.x += (pointerX * 4 - camera.position.x) * 0.05;
        camera.position.y += (-pointerY * 4 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        requestAnimationFrame(renderLoopFrame);
    }

    renderLoopFrame();

    // Adjust Viewport Parameters Fluidly
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/* GSAP Structural ScrollTrigger Sequential Controls */
function initGsapTransitionMatrix() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Structural Navigation Dynamic Transitions
    ScrollTrigger.create({
        start: "top -40px",
        onEnter: () => gsap.to(".glass-nav", { padding: "10px 0", backgroundColor: "rgba(3, 7, 18, 0.95)", duration: 0.3 }),
        onLeaveBack: () => gsap.to(".glass-nav", { padding: "0", backgroundColor: "rgba(3, 7, 18, 0.7)", duration: 0.3 })
    });

    // Reveal Sequential Text Matrix Elements
    document.querySelectorAll(".gs-reveal-text").forEach(element => {
        gsap.fromTo(element, 
            { y: 40, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Reveal Standard Interface Structural Blocks
    document.querySelectorAll(".gs-reveal-fade").forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 88%"
                }
            }
        );
    });

    // Target Dashboard Count Numbers Initialization Sequence
    document.querySelectorAll(".counter-metric, .counter-raw, .counter-percentage").forEach(counter => {
        const targetVal = parseInt(counter.getAttribute("data-target"), 10);
        const isPercent = counter.classList.contains("counter-percentage");
        
        gsap.fromTo(counter, 
            { textContent: 0 },
            {
                textContent: targetVal,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: counter,
                    start: "top 90%"
                },
                onUpdate: function() {
                    const currentVal = Math.floor(this.targets()[0].textContent);
                    this.targets()[0].textContent = currentVal + (isPercent ? "%" : "");
                }
            }
        );
    });
}

/* Layered 3D Perspective Canvas Tracker Matrix Engine */
function initPerspectiveLayer3D() {
    const spaceContainer = document.querySelector(".hero-preview-container-3d");
    const masterLayer = document.querySelector(".interactive-3d-layer");
    const sublayers = document.querySelectorAll(".interactive-3d-sublayer");

    if (!spaceContainer || !masterLayer) return;

    spaceContainer.addEventListener("mousemove", (e) => {
        const bounds = spaceContainer.getBoundingClientRect();
        const posX = e.clientX - bounds.left;
        const posY = e.clientY - bounds.top;
        
        // Compute standardized dynamic normalization metrics
        const normX = (posX / bounds.width) - 0.5;
        const normY = (posY / bounds.height) - 0.5;

        // Apply angular rotations matching computed matrix values to the master layout
        const rotY = normX * 30; // Maximum rotation limits set to 30 degrees boundary checks
        const rotX = -normY * 30;

        gsap.to(masterLayer, {
            rotateY: rotY,
            rotateX: rotX,
            transformOrigin: "center center",
            duration: 0.2,
            ease: "power2.out"
        });

        // Compute offsets dynamically for floating sibling widgets
        sublayers.forEach(layer => {
            const scalingDepth = parseFloat(layer.getAttribute("data-depth")) || 0.2;
            const shiftX = normX * (bounds.width * scalingDepth);
            const shiftY = normY * (bounds.height * scalingDepth);

            gsap.to(layer, {
                x: shiftX,
                y: shiftY,
                rotateY: rotY * 0.5,
                rotateX: rotX * 0.5,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });

    // Smoothly restore defaults upon cursor boundaries exit
    spaceContainer.addEventListener("mouseleave", () => {
        gsap.to([masterLayer, ...sublayers], {
            rotateX: 0,
            rotateY: 0,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });
}

/* --- FORM SUBMISSION LOGIC --- */
function initLeadFunnelProcessing() {
    const funnelForm = document.getElementById("argonLeadFunnelForm");
    const modal = document.getElementById("confirmationModal");
    if (!funnelForm) return;

    funnelForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // 1. Data Extraction
        const dataIdentity = document.getElementById("clientNameField").value.trim();
        const contactNum = document.getElementById("clientContactField").value.trim();
        const dataVector = document.getElementById("workTypeSelection").value;
        const dataBudgetTier = document.getElementById("targetBudgetRange").value;
        const dataTerritory = document.getElementById("clientLocationInput").value.trim();
        const dataScopeNotes = document.getElementById("additionalServicesNotes").value.trim();
        
        const adminWhatsApp = "918921100239"; 

        // 2. Construct WhatsApp Message with your specific structure
        const messageText = `*ARGON STUDIO — NEW REQUEST*%0A%0A` +
                            `*Your Full Identity / Brand Name:* ${dataIdentity}%0A` +
                            `*Contact Number:* ${contactNum}%0A` +
                            `*Core Operational Vector Selection:* ${dataVector}%0A` +
                            `*Project Investment Allocation Matrix:* ${dataBudgetTier}%0A` +
                            `*Deployment Territory Location (Kerala):* ${dataTerritory}%0A` +
                            `*Additional Structural Requests / Scope Overview:* ${dataScopeNotes}`;

        // Store globally to use inside closeModal()
        window.pendingWhatsAppUrl = `https://wa.me/${adminWhatsApp}?text=${messageText}`;

        // 3. Show Modal
        if (modal) {
            modal.style.display = "flex";
            document.getElementById("modalDetails").textContent = 
                `Thank you, ${dataIdentity}. Click Close to open WhatsApp and send your request.`;
        }
    });
}

/* --- MODAL CLOSE & REDIRECT LOGIC --- */
function closeModal() {
    const modal = document.getElementById("confirmationModal");
    if (modal) {
        modal.style.display = "none";
        
        // Check if a URL was generated and open it
        if (window.pendingWhatsAppUrl) {
            window.open(window.pendingWhatsAppUrl, '_blank');
            window.pendingWhatsAppUrl = null; // Clear to prevent reuse
        }
    }
}

/* Dashboard Administrative Simulation Validation Protocol Module */
function initAdministrativeDashboard() {
    const togglePanelBtn = document.getElementById("adminPanelToggleBtn");
    const operationalDrawer = document.getElementById("adminControlDrawer");
    const executionTriggerBtn = document.getElementById("executeMetricUpdateBtn");
    const consoleLogger = document.getElementById("adminMessageConsole");

    if (!togglePanelBtn || !operationalDrawer || !executionTriggerBtn) return;

    // Toggle administrative view state overlay configuration fluidly
    togglePanelBtn.addEventListener("click", () => {
        operationalDrawer.classList.toggle("hidden");
    });

    executionTriggerBtn.addEventListener("click", () => {
        // Retrieve credentials configurations
        const adminEmailVal = document.getElementById("adminEmailInput").value.trim().toLowerCase();
        const selectionTargetId = document.getElementById("metricSelectorField").value;
        const parsedNewValue = document.getElementById("metricNewValueInput").value.trim();

        // Standard Whitelist Protocol
        const clearedWhitelistedAdmins = ["creatorsargon@gmail.com", "kmcshibu3@gmail.com"];

        // Reset visual status indicators
        consoleLogger.className = "admin-status-console";
        consoleLogger.textContent = "";

        // 1. Validation: Input completeness
        if (!adminEmailVal || !parsedNewValue || !selectionTargetId) {
            consoleLogger.classList.add("error");
            consoleLogger.textContent = "Error: Input parameters are incomplete. Check entries and retry.";
            return;
        }

        // 2. Validation: Administrative access privileges
        if (!clearedWhitelistedAdmins.includes(adminEmailVal)) {
            consoleLogger.classList.add("error");
            consoleLogger.textContent = "Access Denied: The specified administrative identifier lacks verification clear keys.";
            return;
        }

        // 3. Match UI Node to perform precise data updates
        const DOMTargetNodeMap = {
            "projects": document.getElementById("metric-projects"),
            "clients": document.getElementById("metric-clients"),
            "hours": document.getElementById("metric-hours"),
            "photos": document.getElementById("metric-photos"),
            "designs": document.getElementById("metric-designs"),
            "sat": document.getElementById("metric-sat")
        };

        const activeDOMTarget = DOMTargetNodeMap[selectionTargetId];

        if (activeDOMTarget) {
            const numericOutputValue = parseInt(parsedNewValue, 10);
            const hasPercentageSuffix = selectionTargetId === "sat";

            // Update node dataset properties securely
            activeDOMTarget.setAttribute("data-target", numericOutputValue);

            // Apply updates dynamically using fluid GSAP animation
            gsap.to(activeDOMTarget, {
                textContent: numericOutputValue,
                duration: 1.5,
                ease: "power3.out",
                onUpdate: function () {
                    const dynamicStepValue = Math.floor(this.targets()[0].textContent);
                    this.targets()[0].textContent = dynamicStepValue + (hasPercentageSuffix ? "%" : "");
                }
            });

            consoleLogger.classList.add("success");
            consoleLogger.textContent = `Success: Metric [${selectionTargetId.toUpperCase()}] updated to [${parsedNewValue}] smoothly.`;
        } else {
            consoleLogger.classList.add("error");
            consoleLogger.textContent = "System Error: Mapping matrix identifier targets resolved incorrectly.";
        }
    });
}

/* Mobile Responsive Navigation Drawer Controller Setup */
function initMobileNavSystem() {
    const triggerToggle = document.querySelector(".mobile-menu-toggle");
    const listContainer = document.querySelector(".nav-links");

    if (!triggerToggle || !listContainer) return;

    triggerToggle.addEventListener("click", () => {
        listContainer.classList.toggle("active");
        triggerToggle.innerHTML = listContainer.classList.contains("active") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Auto Collapse menu drawer upon targeted item clicks
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            listContainer.classList.remove("active");
            triggerToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            
            // Toggle active state indicator classes smoothly
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            item.classList.add("active");
        });
    });
}

// Add this to your app.js
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});