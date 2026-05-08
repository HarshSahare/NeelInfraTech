"use client";

import { FormEvent, useState } from "react";
import styles from "./project-page.module.css";
import { useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function EnquiryModal({ isOpen, onClose, projectName }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;

    try {
      const response = await fetch("/api/append", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          sheetName: `${projectName} Project Enquiries`,

          header: [
            "Timestamp",
            "Project",
            "Name",
            "Phone",
            "Email",
            "Preferred Visit Date",
          ],

          values: [
            new Date().toLocaleString(),
            projectName,
            name,
            phone,
            email || "-",
            date || "-",
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      alert("Your enquiry has been submitted successfully!");
      router.push("/thankyou");

      onClose();
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}
      id="enquireModal"
    >
      <div className={styles.modal}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>

        <h3>Book a Site Visit</h3>

        <p>
          Our team will call you within 1 working hour to confirm your visit
          slot.
        </p>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="project" value={projectName} />

          <label>Full Name *</label>

          <input type="text" name="name" required placeholder="Your name" />

          <label>Phone Number *</label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 99999 99999"
            pattern="[0-9+\s\-]{10,15}"
          />

          <label>Email</label>

          <input type="email" name="email" placeholder="you@example.com" />

          <label>Preferred Visit Date</label>

          <input type="date" name="date" />

          <button
            type="submit"
            className={`${styles.btn} ${styles.btnPrimary}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm Site Visit"}
          </button>
        </form>
      </div>
    </div>
  );
}
