import React, { useEffect, useState } from "react";
import { getScholarships } from "./api/scholarships"; // Import API function

function App() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    getScholarships().then(setScholarships);
  }, []);

  return (
    <div>
      <h1>Scholarship Opportunities</h1>
      <ul>
        {scholarships.map((scholarship) => (
          <li key={scholarship.id}>{scholarship.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
