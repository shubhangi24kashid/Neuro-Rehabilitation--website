import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "./SuccessStories.css"; // Import the CSS file

const testimonials = [
  {
    initials: "MR",
    name: "Michael Roberts",
    condition: "TBI Patient",
    feedback:
      "Improvements in my mobility. The platform's comprehensive approach to rehabilitation has been truly transformative.",
    rating: 5,
  },
  {
    initials: "JD",
    name: "James Davis",
    condition: "Spinal Injury",
    feedback:
      "The interactive games make therapy engaging and fun while helping me improve my cognitive abilities. It's been a game-changer in my recovery. The real-time feedback and progress tracking keep me motivated.",
    rating: 5,
  },
  {
    initials: "AL",
    name: "Amy Lee",
    condition: "Multiple Sclerosis",
    feedback:
      "The flexibility of the program allows me to maintain my therapy schedule despite my varying energy levels. The progress tracking keeps me motivated, and the community support is incredibly encouraging.",
    rating: 5,
  },
  {
    initials: "RK",
    name: "Robert King",
    condition: "Parkinson's Disease",
    feedback:
      "The balance exercises and cognitive training have significantly improved my daily activities. The support from the community is incredibly encouraging, and the progress tracking helps me stay motivated.",
    rating: 5,
  },
  {
    initials: "MP",
    name: "Maria Patel",
    condition: "Cerebral Palsy",
    feedback:
      "The adaptive exercises have helped me build strength and coordination. The progress tracking shows my improvement over time, and the virtual consultations with specialists are incredibly helpful.",
    rating: 5,
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="success-stories-container">
      <h2 className="text-center text-2xl font-semibold mb-6">Success Stories</h2>
      <div className="success-card">
        <div className="user-avatar">{testimonials[currentIndex].initials}</div>
        <h3 className="user-name">{testimonials[currentIndex].name}</h3>
        <p className="user-condition">{testimonials[currentIndex].condition}</p>
        <p className="testimonial-text">{testimonials[currentIndex].feedback}</p>

        {/* Star Rating */}
        <div className="star-rating">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button onClick={prevTestimonial} className="swiper-button-prev">
            <MdNavigateBefore size={24} />
          </button>
          <button onClick={nextTestimonial} className="swiper-button-next">
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
