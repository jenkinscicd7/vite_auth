import React, { useState } from "react";

function Form() {
  const [isEmployed, setIsEmployed] = useState(false);
  const [sector, setSector] = useState("");
  const [terms, setTerms] = useState("");

  
  const [appointmentDate, setAppointmentDate] = useState("");
  const [publicBody, setPublicBody] = useState("");
  const [dutyStation, setDutyStation] = useState("");
  const [substantivePost, setSubstantivePost] = useState("");
  const [jobGroup, setJobGroup] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [positionHeld, setPositionHeld] = useState("");
  const [grossSalary, setGrossSalary] = useState("");

  const fieldClass = "border p-2 rounded w-[500px] mb-4";

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const formData = {
      isEmployed,
      sector,
      appointmentDate,
      public: {
        publicBody,
        dutyStation,
        substantivePost,
        terms,
        jobGroup,
      },
      private: {
        employerName,
        positionHeld,
        grossSalary,
      },
    };

    console.log("Form Data:", formData);
    
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Current Employment</h2>

        <form onSubmit={handleSubmit}>
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
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className={fieldClass}
              />

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
                    value={publicBody}
                    onChange={(e) => setPublicBody(e.target.value)}
                    placeholder="Public Body Name"
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    value={dutyStation}
                    onChange={(e) => setDutyStation(e.target.value)}
                    placeholder="Duty Station"
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    value={substantivePost}
                    onChange={(e) => setSubstantivePost(e.target.value)}
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
                    value={jobGroup}
                    onChange={(e) => setJobGroup(e.target.value)}
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
                    value={employerName}
                    onChange={(e) => setEmployerName(e.target.value)}
                    placeholder="Employer Name"
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    value={positionHeld}
                    onChange={(e) => setPositionHeld(e.target.value)}
                    placeholder="Position Held"
                    className={fieldClass}
                  />
                  <input
                    type="number"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(e.target.value)}
                    placeholder="Gross Salary"
                    className={fieldClass.replace("mb-4", "")}
                  />
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;