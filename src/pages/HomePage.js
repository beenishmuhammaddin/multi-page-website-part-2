// src/pages/HomePage.js
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
      <div className="text-center text-white p-8 bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Our Website!</h1>
        <p className="text-xl mb-8">Building cool things with React & Tailwind CSS.</p>
        <a
          href="#"
          className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HomePage;
