"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "I've worked with clinics, retail stores, real estate companies, and exhibition organizers, but any business that needs a website, landing page, online store, or web-based system is a good fit. Whether you're a startup or an established company, I'll build something that matches your needs.",
  },
  {
    question: "How long does a website take to build?",
    answer:
      "It depends on the complexity. A simple landing page can be ready in 3–7 days. A business website typically takes 2–4 weeks. An e-commerce store or business system can take 4–8 weeks or more. You'll get a clear timeline in my proposal before we start. Timelines also depend on how quickly I receive your content and feedback.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the scope of the project: the number of pages, features, and whether you need things like online payments or a dashboard. Once you tell me what you need, I'll send a clear quote before any work starts, with no hidden costs. Small projects such as landing pages start from [YOUR STARTING PRICE].",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. I handle the full project, from deciding the look and feel of your website to building and launching it. If you already have a design or a specific vision, I can work from that too. You'll see progress along the way and can give feedback and request revisions before launch.",
  },
  {
    question: "Can you improve or update an existing website?",
    answer:
      "Yes. If you have an existing website that needs updates, better performance, or new features, I can take a look and tell you what's possible. I'm comfortable working with sites built on WordPress as well as custom React and Next.js projects, including ones built by someone else.",
  },
  {
    question: "Do you work with Saudi clients remotely?",
    answer:
      "Yes, absolutely. I work with clients in Saudi Arabia fully remotely. Communication is handled via WhatsApp, email, or video calls, whichever is most convenient for you, and I'm comfortable working in both Arabic and English. Project files and updates are shared digitally throughout the process.",
  },
  {
    question: "Who owns the website, and do you help with hosting and domains?",
    answer:
      "You do. Once the project is complete and paid for, the website and its content belong to you. I can also help you choose and set up a domain and hosting, so you don't have to figure out the technical side on your own.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. After launch I'm available for follow-up support, content updates, bug fixes, and improvements. We can agree on a support arrangement that makes sense for your business.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Simple: send me a message using the contact form below, or reach out on WhatsApp. Tell me a little about your business and what you need, and I'll reply within 24 hours to discuss the details and next steps. You'll work directly with me, with no middlemen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-label reveal">06 — FAQ</div>
        <h2 className="section-title reveal">
          Common <span className="accent">Questions</span>
        </h2>
        <p className="section-sub reveal">
          Everything you need to know before we start working together
        </p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? " open" : ""}`}
            >
              <button
                className="faq-question"
                aria-expanded={openIndex === index}
                onClick={() => handleClick(index)}
              >
                {item.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
