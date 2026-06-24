// ===========================
// MENIU MOBIL
// ===========================

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const mobileBackdrop = document.querySelector(".mobile-backdrop");

function closeMobileMenu() {
    sidebar?.classList.remove("open");
    menuToggle?.classList.remove("open");
    mobileBackdrop?.classList.remove("show");
    menuToggle?.setAttribute("aria-expanded", "false");
}

function openMobileMenu() {
    sidebar?.classList.add("open");
    menuToggle?.classList.add("open");
    mobileBackdrop?.classList.add("show");
    menuToggle?.setAttribute("aria-expanded", "true");
}

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        const isOpen = sidebar?.classList.contains("open");
        isOpen ? closeMobileMenu() : openMobileMenu();
    });
}

if(mobileBackdrop){
    mobileBackdrop.addEventListener("click", closeMobileMenu);
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 900){
        closeMobileMenu();
    }
});

// ===========================
// NAVIGARE ÎNTRE PAGINI
// ===========================

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetPage = button.dataset.page;

        navButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        pages.forEach(page =>
            page.classList.remove("active")
        );

        button.classList.add("active");

        const page =
            document.getElementById(targetPage);

        if(page){
            page.classList.add("active");
        }

        closeMobileMenu();

        const main = document.querySelector(".main");

        if(main){
            main.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    });

});

// ===========================
// CARDURI EXTENSIBILE PENTRU LUCRĂRI
// ===========================

function initializeJobCards() {

    const buttons =
        document.querySelectorAll(".expand-btn");

    buttons.forEach(button => {

        if(button.dataset.initialized === "true") return;

        button.dataset.initialized = "true";

        button.addEventListener("click", () => {

            const card =
                button.closest(".job-card");

            card.classList.toggle("open");

            const isOpen =
                card.classList.contains("open");

            button.textContent =
                isOpen
                ? "Ascunde detaliile"
                : "Vezi detalii";

        });

    });

}

initializeJobCards();

// ===========================
// ACCORDION TRANSPORT
// ===========================

const transportRows =
    document.querySelectorAll(".transport-row");

transportRows.forEach(row => {

    const toggle =
        row.querySelector(".transport-toggle");

    if(!toggle) return;

    toggle.addEventListener("click", () => {

        const isOpen =
            row.classList.contains("open");

        transportRows.forEach(item =>
            item.classList.remove("open")
        );

        if(!isOpen){
            row.classList.add("open");
        }

    });

});

// ===========================
// CÂNTAR LIVE DEMO
// ===========================

const liveWeight =
    document.querySelector(".weight-display h2");

if(liveWeight){

    let weight = 44620;

    setInterval(() => {

        const random =
            Math.floor(Math.random() * 60) - 30;

        weight += random;

        liveWeight.textContent =
            `${weight.toLocaleString()} KG`;

    }, 2500);

}

// ===========================
// LUCRARE NOUĂ DEMO
// ===========================

const newJobButton =
    document.querySelector("#weighings .primary-btn");

if(newJobButton){

    newJobButton.addEventListener("click", () => {

        const container =
            document.querySelector(".job-grid");

        if(!container) return;

        const truckNumber =
            Math.floor(Math.random() * 999);

        const card =
            document.createElement("div");

        card.className =
            "glass job-card";

        card.innerHTML = `
            <div class="job-header">

                <div>
                    <h3>TR${truckNumber}VSD</h3>
                    <p>MATERIAL NOU</p>
                </div>

                <span class="badge pending">
                    În incintă
                </span>

            </div>

            <div class="job-weight">
                ${(Math.floor(Math.random() * 30000) + 10000).toLocaleString()} KG
            </div>

            <button class="expand-btn">
                Vezi detalii
            </button>

            <div class="job-details">

                <div class="details-grid">

                    <div>
                        <label>Șofer</label>
                        <strong>ȘOFER NOU</strong>
                    </div>

                    <div>
                        <label>Furnizor</label>
                        <strong>FURNIZOR NOU</strong>
                    </div>

                    <div>
                        <label>Client</label>
                        <strong>UNILEVER</strong>
                    </div>

                    <div>
                        <label>Data</label>
                        <strong>${new Date().toLocaleDateString("ro-RO")}</strong>
                    </div>

                </div>

            </div>
        `;

        container.prepend(card);

        initializeJobCards();

    });

}

// ===========================
// EFECTE BUTOANE
// ===========================

document
.querySelectorAll("button")
.forEach(button => {

    button.addEventListener("mouseenter", () => {

        if(window.innerWidth <= 900) return;

        button.style.transform =
            "translateY(-2px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});

// ===========================
// ACTIVITATE LIVE DEMO
// ===========================

const activities = [
    "Camion intrat în incintă",
    "Greutate preluată",
    "Șofer alocat",
    "Tichet tipărit",
    "Camion ieșit din incintă",
    "Lucrare finalizată"
];

const activityContainer =
    document.querySelector(".activity");

if(activityContainer){

    setInterval(() => {

        const item =
            document.createElement("div");

        item.className =
            "activity-item";

        item.innerHTML = `
            <strong>TR${Math.floor(Math.random() * 999)}</strong>
            <span>
                ${activities[
                    Math.floor(
                        Math.random() *
                        activities.length
                    )
                ]}
            </span>
        `;

        activityContainer.prepend(item);

        const rows =
            activityContainer.querySelectorAll(
                ".activity-item"
            );

        if(rows.length > 6){
            rows[rows.length - 1].remove();
        }

    }, 8000);

}
