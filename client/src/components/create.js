import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    origUrl: "", 
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newUrl = { origUrl: form.origUrl };

    try {
      const response = await fetch("http://localhost:3333/api/short", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUrl),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Shortened URL:", data.shortUrl); 
      setForm({ origUrl: "" });
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
      window.alert("An error occurred while creating the record.");
    }
  }

  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter URL</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.origUrl}
            onChange={(e) => updateForm({ origUrl: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
