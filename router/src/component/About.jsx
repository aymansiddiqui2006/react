export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white shadow-lg shadow-gray-400 rounded-lg p-10 w-full max-w-5xl flex justify-between items-center">
        
        {/* Left: Logo / Image */}
        <div className="flex flex-col items-start">
          <span className="text-gray-500 text-[40px] leading-none">your</span>
          <span className="text-orange-500 text-[40px] leading-none">logo</span>

          <p className="mt-5 text-gray-600 text-lg max-w-sm">
            We are a team dedicated to delivering modern, clean and fast solutions.
            Our goal is to provide a great user experience through simplicity,
            design, and functionality.
          </p>
        </div>

        {/* Right: About Section */}
        <div className="w-1/2 text-right">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">About Us</h2>

          <p className="text-gray-700 text-lg mb-4">
            Our mission is to create products that are intuitive, modern, and
            user-centered. We believe in clean design and powerful performance.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            With a passion for innovation, we build tools that help people and
            businesses grow. Whether it’s development, design, or strategy —
            we aim for excellence in everything we do.
          </p>

          <button className="bg-orange-600 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:scale-95">
            Learn More
          </button>
        </div>

      </div>

    </main>
  );
}
