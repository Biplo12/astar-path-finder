import { EmailIcon, LinkedinIcon } from "next-share";
import React from "react";

const LINKEDIN_LINK =
  "https://www.linkedin.com/in/robert-si%C5%84ski-037398227/?trk=people-guest_people_search-card&originalSubdomain=pl";

const GITHUB_LINK = "https://github.com/Biplo12";

const MAIL_LINK = "mailto:robertbiplosek@gmail.com";

const FooterLinks: React.FC = (): JSX.Element => {
  const footerLinks = [
    {
      name: "LinkedIn",
      link: LINKEDIN_LINK,
      icon: <LinkedinIcon size={24} round />,
    },
    {
      name: "Email",
      link: MAIL_LINK,
      icon: <EmailIcon size={24} round />,
    },
    {
      name: "GitHub",
      link: GITHUB_LINK,
      icon: <img src="/github-icon.svg" alt="github" className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex gap-3">
      {footerLinks.map((link, index) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
export default FooterLinks;
