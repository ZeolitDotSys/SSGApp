// ===========================
// PAGE NAVIGATION
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

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// ===========================
// EXPANDABLE JOB CARDS
// ===========================

function initializeJobCards() {

    const buttons =
        document.querySelectorAll(".expand-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".job-card");

            card.classList.toggle("open");

            const isOpen =
                card.classList.contains("open");

            button.textContent =
                isOpen
                ? "Hide Details"
                : "View Details";

        });

    });

}

initializeJobCards();

// ===========================
// DEMO LIVE SCALE
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
// NEW JOB DEMO
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
                    <p>NEW MATERIAL</p>
                </div>

                <span class="badge pending">
                    On Site
                </span>

            </div>

            <div class="job-weight">
                ${(Math.floor(Math.random() * 30000) + 10000).toLocaleString()} KG
            </div>

            <button class="expand-btn">
                View Details
            </button>

            <div class="job-details">

                <div class="details-grid">

                    <div>
                        <label>Driver</label>
                        <strong>NEW DRIVER</strong>
                    </div>

                    <div>
                        <label>Supplier</label>
                        <strong>NEW SUPPLIER</strong>
                    </div>

                    <div>
                        <label>Client</label>
                        <strong>UNILEVER</strong>
                    </div>

                    <div>
                        <label>Date</label>
                        <strong>${new Date().toLocaleDateString()}</strong>
                    </div>

                </div>

            </div>
        `;

        container.prepend(card);

        initializeJobCards();

    });

}

// ===========================
// BUTTON EFFECTS
// ===========================

document
.querySelectorAll("button")
.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-2px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});

// ===========================
// FAKE REAL-TIME ACTIVITY
// ===========================

const activities = [
    "Truck entered site",
    "Weight captured",
    "Driver assigned",
    "Ticket printed",
    "Truck exited",
    "Job completed"
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