import React from "react";
import Reveal from "./Reveal";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

const CHANNELS = [
  { key: "email", label: "Email", Icon: FiMail },
  { key: "github", label: "GitHub", Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedin },
  { key: "telegram", label: "Telegram", Icon: FaTelegram },
];

export default function Connect() {
  const { socials, email } = data.profile;

  return (
    <div className="section connectdiv">
      <Reveal>
        <SectionHead
          index="06"
          eyebrow="Contact"
          title="Get in touch"
          lead="Open to remote and relocation roles in AI engineering."
          centered
        />

        <div className="connect-grid">
          {CHANNELS.map(({ key, label, Icon }) => {
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
                <Icon className="iconf" size={26} aria-hidden="true" />
                <span className="connect-label">{label}</span>
              </a>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
