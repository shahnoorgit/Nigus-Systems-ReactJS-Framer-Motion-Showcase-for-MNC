import React from "react";

const ImageWithSideText = () => {
  return (
    <section className="py-12 bg-gray-300 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="./confrence.png"
            alt="Description"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-sm md:text-2xl font-bold mb-4">
            Our services are designed to help businesses establish a robust
            online presence in the digital age. We empower our clients to create
            impactful websites that effectively engage users and provide
            seamless experiences. Whether it's an enterprise software, a
            corporate website, or a web application, we leverage our creativity
            and technical expertise to develop responsive, user-friendly.
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Web Development.</li>
            <li>Application Development.</li>
            <li>Software Development.</li>
            <li>AI/ML Development.</li>
            <li>System Integration.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageWithSideText;
