import React, { useState } from "react";
import { Link, Navigate, json, useNavigate } from "react-router-dom";

function Signup() {
  // State variables to manage form data, error, and loading state
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // `useNavigate` hook from React Router for programmatic navigation
  const navigate = useNavigate();
  // Event handler for input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // Event handler for form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Set loading state to true while making the API request
      setLoading(true);
      // Make a POST request to the "/api/v1/signup" endpoint with form data
      const res = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // Parse the response as JSON

      // Check if the API response indicates failure
      if (data.success === false) {
        // Update state with error message and set loading state to false
        setLoading(false);
        setError(data.message);
        return;
      }
      setError(false);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-5">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loadding..." : "Sign Up"}
        </button>
      </form>
      <div className="mt-5 flex gap-3">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default Signup;
