'use client';
import React, { useState } from 'react';
import './FAQ.css'; // Importing the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleRow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="faq-list">
          {/* FAQ 1 */}
          <div className="faq-item">
            <div onClick={() => toggleRow(1)} className={`faq-question ${activeIndex === 1 ? 'active' : ''}`}>
              What are the Payment Options?
            </div>
            <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
              <p>Currently, there are two Payment Options:</p>
              <ul>
                <li>
                  Direct Bank Transfer:
                  <br />
                  Name of Beneficiary: XXXX XXXXX XXXXXX
                  <br />
                  Account No.: 502XXXXXXXXXXX
                  <br />
                  Name of the Bank: XXXX BANK
                  <br />
                  IFSC Code: HXXXFXXXXXXXX
                </li>
                <li>
                  Payments through Payment Gateway (For Credit cards, Debit Cards)
                  <br />
                  *Convenience fee is applicable for payments made through Payment Gateway
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item">
            <div onClick={() => toggleRow(2)} className={`faq-question ${activeIndex === 2 ? 'active' : ''}`}>
              What is the Cancellation Policy?
            </div>
            <div className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
              <p>Cancellation Policy:</p>
              <ul>
                <li>Before 31st December 2023: Eligible for a 75% refund of the registration charges</li>
                <li>Before 27th January 2024: Eligible for a 50% refund of the registration charges</li>
                <li>After 28th January 2024: No refund</li>
              </ul>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item">
            <div onClick={() => toggleRow(3)} className={`faq-question ${activeIndex === 3 ? 'active' : ''}`}>
              What is the Refund Policy?
            </div>
            <div className={`faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
              <p>Refund Policy:</p>
              <ul>
                <li>All refunds will be processed within 30 days of a valid cancellation request.</li>
                <li>Refunds will be made to the original payment method.</li>
                <li>Attendees must request cancellation in writing via email to the Secretariat.</li>
              </ul>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="faq-item">
            <div onClick={() => toggleRow(4)} className={`faq-question ${activeIndex === 4 ? 'active' : ''}`}>
              How do I register once I have made a payment through direct bank transfer?
            </div>
            <div className={`faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
              <p>
                Once you’ve made the payment through direct bank transfer, we would suggest you keep the screenshot/pdf
                file of the payment made. Post this, kindly click on the "Register Now" button on this landing page,
                which will take you to the registration page where you can begin your registration form filling.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="faq-item">
            <div onClick={() => toggleRow(5)} className={`faq-question ${activeIndex === 5 ? 'active' : ''}`}>
              How do I claim GST input?
            </div>
            <div className={`faq-answer ${activeIndex === 5 ? 'show' : ''}`}>
              <p>
                For members who require GST input, select the GST option in the registration form and declare your GST
                details (GSTIN, Name & Address) during Registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
