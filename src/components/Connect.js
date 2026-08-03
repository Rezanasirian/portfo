import React from "react";

import data from "../data/content.json";

const CHANNELS = [
  { key: "email", label: "Email", icon: "fa-solid fa-envelope-circle-check" },
  { key: "github", label: "GitHub", icon: "fa-brands fa-github" },
  { key: "linkedin", label: "LinkedIn", icon: "fa-brands fa-linkedin" },
  { key: "telegram", label: "Telegram", icon: "fa-brands fa-telegram" },
];

export default function Connect() {
  const { socials, email } = data.profile;

  return (
    <div className="section connectdiv">
      <div className="text-center">
        <h1>Get in touch</h1>
        <p className="section-lead">
          Open to remote and relocation roles in AI engineering.
        </p>
      </div>

      <div className="connect-grid">
        {CHANNELS.map(({ key, label, icon }) => {
          const href = key === "email" ? `mailto:${email}` : socials[key];
          if (!href) return null;

          return (
            <a
              key={key}
              className="card-base connect-card"
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <i className={`${icon} iconf fa-2x`} aria-hidden="true"></i>
              <span className="connect-label">{label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
