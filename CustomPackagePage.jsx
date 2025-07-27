// File: CustomPackageForm.jsx
import React, { useState } from "react";
import "../pages/CustomPackageForm.css";

export default function CustomPackageForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/custom-package", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        alert("Package submitted successfully!");
        setFormData({});
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting package:", error);
      alert("Server error. Please try again later.");
    }
  };

  const createOptionButtons = (field, options) => (
    <div className="option-group mt-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`option-button ${formData[field] === opt ? "selected" : ""}`}
          onClick={() => handleChange(field, opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <div className="pt-24 px-6 text-gray-800 font-sans overflow-y-auto h-screen">
      <div className="h-24"></div>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          Build Your Own Package Here...
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="form-section">
            <h2 className="section-title">Main Decoration Setup</h2>
            <div className="mb-4">
              <p className="font-medium">1. Choose the primary color palette for your event?</p>
              {createOptionButtons("colorPalette", ["Red", "White", "Orange", "Pink"])}
            </div>
            <div className="mb-4">
              <p className="font-medium">2. What type of flowers do you want?</p>
              {createOptionButtons("flowers", ["Fresh Flowers", "Artificial Flowers"])}
            </div>
            <div className="mb-4">
              <p className="font-medium">3. Would you like a floral arch entrance?</p>
              {createOptionButtons("archEntrance", ["Yes", "No"])}
            </div>
            <div>
              <p className="font-medium">4. What type of event backdrop do you prefer?</p>
              {createOptionButtons("backdrop", ["Heart shaped", "Round", "Oval", "Square"])}
            </div>
          </section>

          <section className="form-section">
            <h2 className="section-title">Additional Decoration Setup</h2>
            <div className="mb-4">
              <p className="font-medium">5. Do you want a custom cake?</p>
              {createOptionButtons("customCake", ["Yes", "No"])}
            </div>
            <div className="mb-4">
              <p className="font-medium">6. Would you like live music?</p>
              {createOptionButtons("liveMusic", ["Yes", "No"])}
            </div>
            <div>
              <p className="font-medium">7. Would you like fireworks during the event?</p>
              {createOptionButtons("fireworks", ["Yes", "No"])}
            </div>
          </section>

          <section className="form-section">
            <h2 className="section-title">Event Logistics</h2>
            <div className="mb-4">
              <p className="font-medium">8. How many guests will be attending?</p>
              {createOptionButtons("guests", [
                "Less than 50",
                "50 -100",
                "100-200",
                "200-500",
                "More than 500",
              ])}
            </div>
            <div className="mb-4">
              <p className="font-medium">9. What is the time of the event?</p>
              {createOptionButtons("time", ["Morning", "Afternoon", "Evening", "Night"])}
            </div>
            <div>
              <p className="font-medium">10. Tell us about your event briefly.</p>
              <textarea
                rows="4"
                className="w-full border mt-2 p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Enter details about your event..."
              ></textarea>
            </div>
          </section>

          <div className="flex flex-col items-center mt-12">
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
              >
                Send Package Request
              </button>
              <button
                type="reset"
                className="bg-gray-200 px-8 py-3 rounded hover:bg-gray-300 transition-colors font-medium"
                onClick={() => setFormData({})}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
