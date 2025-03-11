import React from 'react';

const ResumeViewer = () => {
    const resumeLink = "https://vasitumprodstrgacc.blob.core.windows.net/test-bulk-resumes/65f410baa5c80a4229ed0823%2F1741706102215%2FVishalRanjanCVFinal4.pdf";

    return (
        <>
            <div className="resume-container">
                <div className="resume-box">
                    <div className="resume-frame">
                        <iframe
                            src={resumeLink}
                            className="resume-iframe"
                            title="Resume"
                        ></iframe>
                    </div>
                    <div className="resume-download">
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .resume-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 20px 20px 20px;
        }

        .resume-box {
          max-width: 800px;
          width: 100%;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
        }

        .resume-title {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }

        .resume-frame {
          width: 100%;
          height: 80vh;
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
        }

        .resume-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .resume-download {
          margin-top: 15px;
        }

        .resume-button {
          display: inline-block;
          padding: 10px 20px;
          color: white;
          background-color: #007bff;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .resume-button:hover {
          background-color: #0056b3;
        }
      `}</style>
        </>
    );
};

export default ResumeViewer;
