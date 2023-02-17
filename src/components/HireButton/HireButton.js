import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import resumePdf from "../HireButton/ajitKushwaha.pdf";
import "./hirebutton.css"

const HireButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setIsDownloading(false);
  }

  return (
    <div className='Hire'>
        <button className="hire-button" onClick={handleDownload} disabled={isDownloading}>
          {isDownloading ? 'Downloading...' : 'Hire'} 
        </button>
        <BsArrowRightShort className="hirearrow"/> 
    </div>
  );
};

export default HireButton;
