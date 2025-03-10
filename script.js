// Search function
function searchScholarships() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsContainer = document.getElementById("results");

    // Sample scholarship data (Replace with actual API later)
    let scholarships = [
        { name: "Google Africa Scholarship", type: "Tech" },
        { name: "MasterCard Foundation Scholarship", type: "General" },
        { name: "Commonwealth Scholarship", type: "International" },
        { name: "DAAD Scholarship", type: "Germany" }
    ];

    // Filter results
    let filtered = scholarships.filter(scholarship => 
        scholarship.name.toLowerCase().includes(input)
    );

    // Display results
    resultsContainer.innerHTML = "";
    if (filtered.length > 0) {
        filtered.forEach(scholarship => {
            let item = document.createElement("div");
            item.classList.add("result-item");
            item.innerHTML = `<h3>${scholarship.name}</h3><p>Type: ${scholarship.type}</p>`;
            resultsContainer.appendChild(item);
        });
    } else {
        resultsContainer.innerHTML = "<p>No scholarships found</p>";
    }
}
