import React from "react";

import data from "../data/content.json";

export default function Footer() {
  const { name } = data.profile;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="site-footer-meta">
          © {new Date().getFullYear()} {name}
        </span>
      </div>
    </footer>
  );
}
