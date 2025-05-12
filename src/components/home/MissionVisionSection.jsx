const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600">
            We're dedicated to empowering educators with cutting-edge knowledge and tools in educational technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#f6f7eb] to-[#e9f0ff] p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary h-7 w-7"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Mission</h3>
            <p className="text-gray-700">
              To equip teachers with the knowledge of educational technology, helping them thrive and adapt
              confidently within the modern, digital classroom.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f6f7eb] to-[#e9f0ff] p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-secondary-teal/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-secondary-teal h-7 w-7"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Vision</h3>
            <p className="text-gray-700">
              To become the trusted global resource for teachers everywhere who are passionate about transforming the
              teaching and learning experience through innovative educational technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection 