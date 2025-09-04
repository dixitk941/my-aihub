import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserTestimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Content Creator",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "AiToolCraft has been a game-changer for my workflow. I found three AI tools that have cut my content creation time in half!",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "The comparison feature is brilliant. I was able to find the perfect code generation tool that fit my budget and requirements.",
    },
    {
      id: 3,
      name: "Elena Diaz",
      title: "Digital Marketer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "I appreciate how comprehensive the tool descriptions are. Helped me make informed decisions about which AI marketing tools to invest in.",
    }
  ];

  return (
    <div className={`py-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What People Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Join thousands of users who have discovered the perfect AI tools for their needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-soft-sm p-6 border border-gray-100/30 dark:border-gray-700/30 transition-all duration-500`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-700 shadow-sm"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=random';
                  }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-5 h-5 text-yellow-400" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  5.0
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Explore AI Tools
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserTestimonials;
