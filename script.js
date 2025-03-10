// script.js
document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");
    const scholarshipList = document.getElementById("scholarship-list");
    
    searchBtn.addEventListener("click", function() {
        const query = searchBar.value.trim();
        if (query) {
            fetchScholarships(query);
        }
    });
    
    function fetchScholarships(query) {
        scholarshipList.innerHTML = "<p>Loading scholarships...</p>";
        
        // Simulating fetching data
        setTimeout(() => {
            const scholarships = [
                { title: "STEM Excellence Scholarship", amount: "$5000" },
                { title: "Global Leaders Grant", amount: "$3000" },
                { title: "Women in Tech Scholarship", amount: "$7000" }
            ];
            
            scholarshipList.innerHTML = scholarships.map(scholarship => `
                <div class="scholarship-item">
                    <h3>${scholarship.title}</h3>
                    <p>Amount: ${scholarship.amount}</p>
                </div>
            `).join("");
        }, 1500);
    }
});
