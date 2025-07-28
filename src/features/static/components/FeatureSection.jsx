import React from 'react'

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mx-auto">
      <div className="py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Features Built for Real-World Business Needs
          </h2>
          <p className="mt-4 text-xs sm:text-base text-gray-600 dark:text-gray-400">
            Manage your store with a clean dashboard, handle product inventory, sell to customers, create and store vouchers, and print them easily.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map(({ icon, title, description, bg, color }, index) => (
            <div key={index} className="flex flex-col items-start text-left ">
              <div className={`flex justify-center items-center mb-4 w-12 h-12 rounded-full ${bg} dark:${bg.replace('100', '900')}`}>
                <svg className={`w-6 h-6 ${color} dark:${color.replace('600', '300')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d={icon} />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 ">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: "M3 3h14v2H3V3zm0 4h14v2H3V7zm0 4h14v6H3v-6z",
    title: "Clean Dashboard",
    description: "A user-friendly dashboard to oversee your entire store operations at a glance.",
    bg: "bg-indigo-100",
    color: "text-indigo-600"
  },
  {
    icon: "M9 7H5v8h10V9H11v3H9V7z",
    title: "Product Management (CRUD)",
    description: "Easily create, read, update, and delete product data stored securely in the database.",
    bg: "bg-purple-100",
    color: "text-purple-600"
  },
  {
    icon: "M2 5h16v10H2V5zm2 2v6h12V7H4z",
    title: "Sales to Customers",
    description: "Process customer sales efficiently and keep track of all transactions.",
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    icon: "M7 4h6v2H7V4zm-2 4h10v2H5V8zm-2 4h14v2H3v-2z",
    title: "Voucher Creation",
    description: "Generate vouchers with customizable discounts and validity for your customers.",
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    icon: "M3 3h14v2H3V3zm0 4h14v2H3V7zm0 4h14v6H3v-6z",
    title: "Voucher Storage",
    description: "Store and organize created vouchers securely for easy access and management.",
    bg: "bg-yellow-100",
    color: "text-yellow-600"
  },
  {
    icon: "M6 2h8v2H6V2zm2 4h4v10H8V6zm-4 8v2h12v-2H4z",
    title: "Print Vouchers",
    description: "Print vouchers directly from the app for physical use in stores or events.",
    bg: "bg-pink-100",
    color: "text-pink-600"
  }
]

export default FeatureSection
