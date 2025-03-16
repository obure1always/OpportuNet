// Scholarship data
const scholarships = [
    { 
        title: "Australia Awards Scholarships 2026", 
        country: "Australia", 
        level: "Bachelors, Masters, PhD", 
        deadline: "2025-04-30", 
        link: "https://oasis.dfat.gov.au/"
    },
    { 
        title: "Erasmus Mundus Joint Masters 2025", 
        country: "Europe", 
        level: "Masters", 
        deadline: "2025-05-15", 
        link: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
    },
    { 
        title: "Chevening Scholarships 2026", 
        country: "UK", 
        level: "Masters", 
        deadline: "2025-08-10", 
        link: "https://www.chevening.org/apply/"
    },
    { 
        title: "KNB Government Scholarship 2025", 
        country: "Indonesia", 
        level: "Bachelors, Masters, PhD", 
        deadline: "2025-04-31", 
        link: "https://opportunitiescorners.com/knb-indonesian-government-scholarship-2025/"
    }
];

// Function to load scholarships dynamically
function loadScholarships() {
    const container = document.getElementById("scholarshipContainer");
    container.innerHTML = ""; // Clear existing content

    scholarships
        .filter(s => new Date(s.deadline) >= new Date("2025-04-29")) // Filter by deadline
        .forEach(s => {
            const card = document.createElement("div");
            card.className = "scholarship-card";
            card.innerHTML = `
                <h4 class="text-xl font-bold">${s.title}</h4>
                <p><strong>Host Country:</strong> ${s.country}</p>
                <p><strong>Degree Level:</strong> ${s.level}</p>
                <p><strong>Deadline:</strong> ${new Date(s.deadline).toDateString()}</p>
                <a href="${s.link}" class="underline text-white font-bold mt-2 inline-block">Apply Now</a>
            `;
            container.appendChild(card);
        });
}

// Function to filter scholarships based on search input
function filterScholarships() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const container = document.getElementById("scholarshipContainer");
    container.innerHTML = "";

    scholarships
        .filter(s => s.title.toLowerCase().includes(query) && new Date(s.deadline) >= new Date("2025-04-29"))
        .forEach(s => {
            const card = document.createElement("div");
            card.className = "scholarship-card";
            card.innerHTML = `
                <h4 class="text-xl font-bold">${s.title}</h4>
                <p><strong>Host Country:</strong> ${s.country}</p>
                <p><strong>Degree Level:</strong> ${s.level}</p>
                <p><strong>Deadline:</strong> ${new Date(s.deadline).toDateString()}</p>
                <a href="${s.link}" class="underline text-white font-bold mt-2 inline-block">Apply Now</a>
            `;
            container.appendChild(card);
        });
}

// Load scholarships when the page is ready
window.onload = loadScholarships;
