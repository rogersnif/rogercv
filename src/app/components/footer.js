import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#080f1b] py-[50px] flex justify-around">
      <div className="flex flex-row justify-start w-[30%]  top-3 right-20 z-50 gap-5">
        <img src="/linkedin.svg" alt="linked" className="w-[30px] h-[30px]" />
        <img src="/facebook.svg" alt="linked" className="w-[30px] h-[30px]" />
        <img src="/github.svg" alt="linked" className="w-[30px] h-[30px]" />
      </div>
      <div className="text-[12px] md:text-[17px]">
        <p className="text-slate-600">Copyright 2014 all right reserved</p>
        <p className="text-slate-600">Made with ❤ by Roger</p>
      </div>
    </footer>
  );
}
