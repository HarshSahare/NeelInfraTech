"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { Company } from "../lib/company";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    purpose: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/append", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: Object.values(formData),
          header: Object.keys(formData),
          sheetName: "Vrindavan Park / Naveen Nagpur",
        }),
      });

      alert("Successfully sent the request");

      setFormData({
        name: "",
        phone: "",
        city: "",
        budget: "",
        purpose: "",
        message: "",
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.fb}>
      <h3>📋 Book Site Visit / Get Details</h3>
      <p>Executive will call within 2 hours</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.frow}>
          <div className={styles.fg}>
            <label>FULL NAME *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.fg}>
            <label>PHONE *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.frow}>
          <div className={styles.fg}>
            <label>YOUR CITY</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select city</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Bengaluru</option>
              <option>Delhi/NCR</option>
              <option>Nagpur</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.fg}>
            <label>BUDGET RANGE</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Under ₹15L</option>
              <option>₹15–25L</option>
              <option>₹25–40L</option>
              <option>₹40–60L</option>
              <option>Above ₹60L</option>
            </select>
          </div>
        </div>

        <div className={styles.fg}>
          <label>PURPOSE</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Investment / Appreciation</option>
            <option>Build Own Home</option>
            <option>Both — invest now, build later</option>
            <option>NRI Investment</option>
          </select>
        </div>

        <div className={styles.fg}>
          <label>MESSAGE (OPTIONAL)</label>
          <textarea
            name="message"
            placeholder="Questions about plots, payment plans, booking..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles["btn-sub"]} disabled={loading}>
          {loading
            ? "Submitting..."
            : "🏡 Book FREE Site Visit & Get Full Details"}
        </button>

        <div className={styles.or}>or</div>

        <button
          type="button"
          className={styles["btn-call"]}
          onClick={() => (window.location.href = `tel:${Company.phone}`)}
        >
          📞 Call Our Expert Directly
        </button>

        <p className={styles.fn}>🔒 100% private. No spam. No third parties.</p>

        {submitted && (
          <div className={styles.ok}>
            ✅ Received! Our executive will call you within 2 hours.
          </div>
        )}
      </form>
    </div>
  );
}
