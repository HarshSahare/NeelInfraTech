"use client";

export default function CTASection() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-classica mb-4">
          Ready to invest today?
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm font-poppins mb-8">
          Schedule a consultation with our team to explore the right plot for
          your goals.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-800 transition cursor-pointer">
            Schedule
          </button>

          <button className="border border-gray-400 px-6 py-3 text-sm rounded hover:bg-gray-100 transition cursor-pointer">
            Call us
          </button>
        </div>
      </div>
    </section>
  );
}
