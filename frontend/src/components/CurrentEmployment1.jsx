import React, { useState } from "react";

function CurrentEmployment1() {
  const [isEmployed, setIsEmployed] = useState(false);
  const [sector, setSector] = useState("");
  const [terms, setTerms] = useState("");


  
  const fieldClass = "border p-2 rounded w-[500px] mb-4";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Current Employment</h2>

        <label className="block mb-2">Are you currently employed?</label>
        <select
          value={isEmployed}
          onChange={(e) => setIsEmployed(e.target.value === "true")}
          className={fieldClass}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        {isEmployed && (
          <>
            <label className="block mb-2">Date of Appointment</label>
            <input type="date" className={fieldClass} />

            <label className="block mb-2">Employment Sector</label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className={fieldClass}
            >
              <option value="">Select Sector</option>
              <option value="public">Public Sector</option>
              <option value="private">Private Sector</option>
            </select>

            {sector === "public" && (
              <div className="bg-gray-50 border rounded-xl p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  Public Service Details
                </h3>
                <input
                  type="text"
                  placeholder="Public Body Name"
                  className={fieldClass}
                />
                <input
                  type="text"
                  placeholder="Duty Station"
                  className={fieldClass}
                />
                <input
                  type="text"
                  placeholder="Present Substantive Post"
                  className={fieldClass}
                />
              
                <select
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  className={fieldClass}
                >
                  <option value="">Select Terms</option>
                  <option value="permanent">Permanent and Pensionable</option>
                  <option value="contract">Contract</option>
                  <option value="short-term">Short Term</option>
                </select>


                <input
                  type="text"
                  placeholder="Job Group"
                  className={fieldClass.replace("mb-4", "")}
                />
              </div>
            )}

            {sector === "private" && (
              <div className="bg-gray-50 border rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Private Sector Details
                </h3>
                <input
                  type="text"
                  placeholder="Employer Name"
                  className={fieldClass}
                />
                <input
                  type="text"
                  placeholder="Position Held"
                  className={fieldClass}
                />
                <input
                  type="number"
                  placeholder="Gross Salary"
                  className={fieldClass.replace("mb-4", "")}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentEmployment1;