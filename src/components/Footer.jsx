import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="p-2 bg-accent footer footer-center font-semibold">
      <div>
        <p>Copyright © 2022 - All right reserved by</p>
        <div className="flex items-center gap-1">
          <AiFillGithub />
          <a href="https://github.com/kartikpavan"> Divya Kartik Pavan</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
