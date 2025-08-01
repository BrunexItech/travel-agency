import React, { useState } from 'react';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I make a booking?',
      answer: 'Go to the destination page, select your preferred safari, fill out the form, and click "Book Now".'
    },
    {
      question: 'Can I change my profile details?',
      answer: 'Yes. Go to your profile page and click the "Edit Profile" button to update your details.'
    },
    {
      question: 'What if I forget my password?',
      answer: 'Click "Forgot Password" on the login page to reset your password via email.'
    },
    {
      question: 'How do I view my past bookings?',
      answer: 'Log into your account and go to your profile. You will find a section labeled "My Bookings".'
    },
    {
      question: 'Can I cancel or reschedule a booking?',
      answer: 'Currently, you’ll need to contact our support team via email to request a cancellation or reschedule.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes. We use secure encryption and do not share your data with third parties without your consent.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">Need Help?</h1>

      <div className="max-w-2xl bg-white p-6 shadow-md rounded-lg w-full">
        <p className="mb-4 text-gray-700">
          If you have any questions, feel free to check our FAQs below.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-yellow-700 hover:text-yellow-500">
                {faq.question}
              </h3>
              {openIndex === index && (
                <p className="text-gray-700 mt-2 pl-4 border-l-4 border-yellow-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default Help;
