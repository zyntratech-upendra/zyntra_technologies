import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Can I buy Nomad insurance and where am I covered?",
    a: "Yes. You can purchase Nomad Insurance from anywhere. Coverage applies globally, excluding countries under sanctions or travel restrictions."
  },
  {
    q: "How do I cancel my Nomad Insurance plan?",
    a: "You can cancel anytime from your dashboard. Coverage will remain active until the end of the billing period."
  },
  {
    q: "What do I need to submit a claim?",
    a: "You’ll need medical invoices, proof of payment, and any related medical reports. Claims are submitted digitally."
  },
  {
    q: "Which procedures need pre-approval on the Complete plan and why?",
    a: "Major procedures require pre-approval to ensure coverage eligibility and cost transparency."
  },
  {
    q: "What are pre-existing conditions and why aren’t they covered?",
    a: "Pre-existing conditions are illnesses present before coverage begins and are excluded to keep plans affordable."
  }
];

const FaqSection = () => {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(
      f =>
        f.q.toLowerCase().includes(query.toLowerCase()) ||
        f.a.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
        .faq-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .faq-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-color);
        }

        /* SEARCH */
        .faq-search {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 14px 18px;
          margin-bottom: 42px;
          transition: background 0.3s ease;
        }

        [data-theme="dark"] .faq-search {
        
          background: rgba(255,255,255,0.06);
        }

        .faq-search input {
          border: none;
          outline: none;
          width: 100%;
          background: transparent;
          font-size: 16px;
          color: var(--text-color);
        }

        .faq-search input::placeholder {
          color: rgba(127,127,127,0.7);
        }

        .faq-search svg {
          color: #5cc6c7;
        }

        /* FAQ CARD */
        .faq-item {
          background: #7fd4d4;
          border-radius: 20px;
          padding: 22px 26px;
          margin-bottom: 14px;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-2px);
        }

        [data-theme="dark"] .faq-item {
          background: #1e3a44;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
        }

        [data-theme="dark"] .faq-question {
          color: #ffffff;
        }

        .faq-answer {
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.7;
          color: #1f2937;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        [data-theme="dark"] .faq-answer {
          color: #e5e7eb;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
        }

        .faq-chevron {
          transition: transform 0.35s ease;
          color: inherit;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        @media (max-width: 576px) {
          .faq-question {
            font-size: 16px;
          }
          .faq-answer {
            font-size: 15px;
          }
        }
        `}
      </style>

      {/* ================= FAQ CONTENT ================= */}
      <div className="faq-wrapper">
        <h2 className="faq-title">Ask us anything</h2>

        {/* SEARCH */}
        <div className="faq-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Type your question or search topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* FAQ LIST */}
        {filteredFaqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              {faq.q}
              <ChevronDown className="faq-chevron" size={20} />
            </div>
            <div className="faq-answer">{faq.a}</div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <p className="text-muted mt-3">No results found.</p>
        )}
      </div>
    </>
  );
};

export default FaqSection;
