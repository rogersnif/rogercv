import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#080f1b] py-[50px] flex justify-around">
      <div className="flex flex-row justify-start w-[30%]  top-3 right-20 z-50 gap-5">
        <a href="https://www.linkedin.com/in/roger-banze-1650461b6/">
          <img src="/linkedin.svg" alt="linked" className="w-[30px] h-[30px]" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100091063895936">
          <img
            src="/facebook.svg"
            alt="facebook"
            className="w-[30px] h-[30px]"
          />
        </a>
        <a href="https://github.com/rogersnif">
          <img src="/github.svg" alt="git" className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="text-[12px] md:text-[17px]">
        <p className="text-slate-600">Copyright 2014 all right reserved</p>
        <p className="text-slate-600">Made with ❤ by Roger</p>
      </div>
    </footer>
  );
}
