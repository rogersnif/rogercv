"use client";
export default function Rate() {
  return (
    // <div className="bg-white text-center px-[5%] md:px-[20%]">
    //   <p className="text-[18px] md:text-[20px]">
    //     As a junior web developer, I am not only seeking permanent employment
    //     opportunities but also open to freelance projects. For freelance work,
    //     employer can engage based on my established rate prices
    //     <span className="text-[green]"> ( R75 / Hour ) </span>
    //     upon discussion of the project requirements I will provide a detailed
    //     estimate of the time it will take to finish the task.
    //   </p>
    //   <p className="text-[20px] pt-10 font-bold">WHAT I CAN DO</p> <br />
    //   <p> Website development, Hosting, SEO, and Maintenance.</p>
    //   <p>And I can transform any design mockup into a stunning web page.</p>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    // </div>

    <section className="text-gray-700 body-font bg-slate-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-lg text-[#000d1d]">
            As a junior web developer, I am not only seeking permanent
            employment opportunities but also open to freelance projects. For
            freelance work, employer can engage based on my established rate
            prices upon discussion of the project requirements I will provide a
            detailed estimate of the time it will take to finish the task.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
          <p className="text-[20px] pt-10 font-bold">WHAT I CAN DO</p> <br />
          <p className="text-gray-600">
            Website development, Hosting, SEO, and Maintenance.
          </p>
          <p className="text-gray-600">
            And I can transform any design mockup into a stunning web page.
          </p>
        </div>
      </div>
    </section>
  );
}
