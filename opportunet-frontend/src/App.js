import { useEffect, useState } from "react";

function ScholarshipsList() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scholarships") // Ensure the correct API URL
      .then((response) => response.json())
      .then((data) => {
        console.log("Scholarships Data:", data); // Debugging
        setScholarships(data);
      })
      .catch((error) => console.error("Error fetching scholarships:", error));
  }, []);

  return (
    <div>
      <h1>Scholarship Opportunities</h1>
      <ul>
        {scholarships.length > 0 ? (
          scholarships.map((scholarship) => (
            <li key={scholarship.id}>
              <strong>{scholarship.title}</strong>: {scholarship.description}
            </li>
          ))
        ) : (
          <p>No scholarships available</p>
        )}
      </ul>
    </div>
  );
}

export default ScholarshipsList;
