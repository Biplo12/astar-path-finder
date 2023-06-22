import React from "react";
import FooterLinks from "./FooterLinks";

const GITHUB_LINK = "https://github.com/Biplo12";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="bg-[#0e142c] text-gray-300 text-center w-full h-[10vh] flex justify-center items-center flex-col gap-3 p-6">
      <p className="text-sm">
        Made by{" "}
        <a
          href={GITHUB_LINK}
          className="text-primary-secondary font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Robert Siński
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
      <FooterLinks />
    </div>
  );
};
export default Footer;
