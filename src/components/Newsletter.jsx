import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setStatus(null);
    
    // Simulate API call - replace with actual API call in production
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration purposes - success response
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="modern-card backdrop-blur-oneui p-6 md:p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary-500/10 dark:bg-primary-400/10 blur-2xl"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get the latest AI tool updates and exclusive content
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-modern w-full px-4 py-3 rounded-xl border border-gray-200/50 dark:border-gray-700/30 bg-white/90 dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary-500/30 focus:border-primary-500/40"
                disabled={isSubmitting}
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              className={`btn-modern px-6 py-3 rounded-xl font-medium text-white transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          {status === 'success' && (
            <div className="mt-3 text-green-600 dark:text-green-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Thank you! You've been subscribed to our newsletter.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-3 text-red-600 dark:text-red-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              Please enter a valid email address and try again.
            </div>
          )}
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
