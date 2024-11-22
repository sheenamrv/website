import React from "react";

const QuoteSection = () => {
  return (
    <section id="quote" className="mb-32" data-aos="fade-right">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16">
        <div></div>
        <div></div>

        <div className="col-span-1 lg:col-span-8 text-center">
          <h1 className="text-[#577BE6] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 italic">
            I build reliable applications with a blend of creativity and
            intuitive design. &#9889;
          </h1>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
