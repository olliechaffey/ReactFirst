import React, { useState } from 'react';

const PageWithIframe = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: 'John Doe',
      job: 'CEO',
      imageSrc: 'images/icons-1.png',
    },
    {
      name: 'Jane Smith',
      job: 'CEO',
      imageSrc: 'images/icons-1.png',
    },
    {
      name: 'Jane Smith',
      job: 'CEO',
      imageSrc: 'images/icons-1.png',
    },
    {
      name: 'Jane Smith',
      job: 'CEO',
      imageSrc: 'images/icons-1.png',
    },
    // Add more team members as needed
  ];

  const faqs = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    // Add more FAQs as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container">
      <div className="text-container mt-5">
        <h1 className="co-white text-center">Meet the team</h1>

        <div className="row mt-5">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="text-center">
                <div className="d-flex flex-column align-items-center">
                  <div className="double-border-team">
                    <img
                      className="rounded-circle"
                      src={member.imageSrc}
                      alt={member.name}
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <h5 className="mt-4 co-white">{member.name}</h5>
                  <h6 className="co-job">{member.job}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-container mt-5">
        <h1 className="co-white text-center">FAQ</h1>
        {faqs.map((faq, index) => (
          <div className="mt-4" key={index}>
            <div className="card faq-card">
              <div
                className="card-header"
                onClick={() => handleToggle(index)}
                style={{ cursor: 'pointer' }}
              >
                <h5 className="mb-0 co-white">{faq.question}</h5>
              </div>
              {expandedIndex === index && (
                <div className="card-body">
                  <p className="co-white">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageWithIframe;
