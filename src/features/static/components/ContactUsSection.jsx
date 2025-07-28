import React from 'react'

const ContactUsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 max-w-screen-md mx-auto rounded-lg shadow-md">
      <h2 className=" text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-xs sm:text-base">
        Have questions or need support? We're here to help. Fill out the form below and we'll get back to you soon.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            className="mt-1 placeholder:text-xs block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="mt-1 placeholder:text-xs block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message here..."
            className="mt-1 placeholder:text-xs block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            
          />
        </div>
        <div>
          <button
            type="submit"
            
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-blue-600 opacity-50 cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactUsSection
