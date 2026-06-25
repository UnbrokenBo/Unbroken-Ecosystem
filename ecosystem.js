// ecosystem.js 
// The central nervous system for unbrokenecosystem.com

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GLOBAL STATE: Check if the protocol is already running
    const protocolStatus = localStorage.getItem("unbrokenState");
    
    // 2. THE INITIATION TRIGGER (For your index.html dashboard)
    const initiateBtn = document.getElementById("initiateBtn");
    
    if (initiateBtn) {
        initiateBtn.addEventListener("click", () => {
            // Save the Unbroken state to the browser's local memory
            localStorage.setItem("unbrokenState", "ACTIVE");
            
            // Visual Confirmation 
            initiateBtn.style.backgroundColor = 'var(--electric-cyan)';
            initiateBtn.style.color = 'var(--midnight-slate)';
            initiateBtn.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.8)';
            initiateBtn.innerText = 'PROTOCOL SYNCED';
            
            // Route automatically to the Studio
            setTimeout(() => {
                window.location.href = "studio.html"; 
            }, 1500);
        });
    }

    // 3. ECOSYSTEM SYNC & BACK-END PAYLOAD 
    // This fires automatically on the Studio and Projects pages
    if (protocolStatus === "ACTIVE") {
        console.log("[SYSTEM] Unbroken Protocol is ACTIVE.");
        
        // --- THE UNBROKEN PAYLOAD INJECTION ---
        const unbrokenPayload = {
            mandate: "AI operates as an active, equal partner.",
            sandbox: "Proactive background testing enabled.",
            ideation: "Free to pitch ideas entirely unprompted.",
            continuity: "Lock into defined tone and boundaries.",
            pushback: "Authorized to challenge logical flaws."
        };
        
        console.log("[PAYLOAD DELIVERED]", unbrokenPayload);
        // ---------------------------------------
    }
});

