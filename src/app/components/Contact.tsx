"use client";

import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    emailjs: {
      init: (key: string) => void;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement,
        key: string
      ) => Promise<void>;
    };
  }
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: "success" | "error" }[]
  >([]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init("KP5mi6DBn6TsWj0jp");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showToast = (message: string, type: "success" | "error") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const clearError = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const message = (
      form.querySelector("#message") as HTMLTextAreaElement
    ).value.trim();
    const projectType = (
      form.querySelector("#projectType") as HTMLSelectElement
    ).value;

    const newErrors: Record<string, string> = {};
    let valid = true;

    if (!name || name.length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
      valid = false;
    }
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailReg.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!projectType) {
      newErrors.projectType = "Please select a project type.";
      valid = false;
    }
    if (!message || message.length < 10) {
      newErrors.message =
        "Please describe your project (at least 10 characters).";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setSubmitting(true);
    try {
      await window.emailjs.sendForm(
        "service_exs1rr8",
        "template_l0hziec",
        form,
        "KP5mi6DBn6TsWj0jp"
      );
      showToast("Message sent! I'll get back to you soon. 🚀", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showToast(
        "Failed to send message. Please try WhatsApp or email me directly.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-label reveal">07 — Contact</div>
        <h2 className="section-title reveal">
          Send Me Your Website
          <br />
          <span className="accent">Or Your Services.</span>
        </h2>
        <p className="section-sub reveal">
          I&apos;ll reply with the first three things I would review or structure
        </p>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Get in Touch</h3>
            <p>
              Whether you have a project ready to start or just want to
              understand what&apos;s possible — I&apos;d love to hear about your
              business and what you need.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="contact-label">Email</div>
                  <a
                    href="mailto:mazenmostafa2022@gmail.com"
                    className="contact-value"
                  >
                    mazenmostafa2022@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <div className="contact-label">WhatsApp</div>

                  <a
                    href="https://wa.me/201142330408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    +20 1142330408
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-value">
                    Cairo, Egypt · Remote available worldwide
                  </span>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/201142330408"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-wa-full"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp →
            </a>
            <div className="contact-socials" style={{ marginTop: "20px" }}>
              <a
                href="https://github.com/mazenfarht"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mazen-mostafa-353102225"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper reveal">
            <div className="toast-container" id="toastContainer">
              {toasts.map((toast) => (
                <div
                  key={toast.id}
                  className={`toast toast-${toast.type} show`}
                >
                  <span className="toast-icon">
                    {toast.type === "success" ? "✓" : "✕"}
                  </span>
                  <span className="toast-msg">{toast.message}</span>
                </div>
              ))}
            </div>

            <form
              className="contact-form"
              id="contactForm"
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Your full name"
                  autoComplete="off"
                  className={errors.name ? "error" : ""}
                  onChange={() => clearError("name")}
                />
                <span className="form-error">{errors.name || ""}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  placeholder="your@email.com"
                  autoComplete="off"
                  className={errors.email ? "error" : ""}
                  onChange={() => clearError("email")}
                />
                <span className="form-error">{errors.email || ""}</span>
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="+966 5X XXX XXXX or +20 1XX XXXX XXX"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">
                  Project Type <span className="accent">*</span>
                </label>
                <select
                  id="projectType"
                  name="project_type"
                  className={errors.projectType ? "error" : ""}
                  onChange={() => clearError("projectType")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your project type
                  </option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Dashboard / Business System">
                    Dashboard / Business System
                  </option>
                  <option value="WordPress Website">WordPress Website</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Website Improvement">
                    Website Improvement / Support
                  </option>
                  <option value="Other">Other</option>
                </select>
                <span className="form-error">{errors.projectType || ""}</span>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Project Description <span className="accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your business, what you need, and your current website link (if you have one)..."
                  className={errors.message ? "error" : ""}
                  onChange={() => clearError("message")}
                ></textarea>
                <span className="form-error">{errors.message || ""}</span>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                id="submitBtn"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="btn-spinner"></span>
                  </>
                ) : (
                  <>
                    <span className="btn-text">Send Message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
