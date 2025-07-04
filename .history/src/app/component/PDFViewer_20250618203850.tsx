"use client";

import { Document, Page } from "react-pdf";
import { useState, useRef, useCallback } from "react"; // Import useRef and useCallback
import HTMLFlipBook from "react-pageflip";
import "@/utils/pdfWorker";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function PDFFlipViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const flipBookRef = useRef<any>(null); // Ref for HTMLFlipBook

  // Callback for when the document loads successfully
  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  // Function to go to the previous page
  const goToPrevPage = useCallback(() => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().prev();
    }
  }, []);

  // Function to go to the next page
  const goToNextPage = useCallback(() => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().next();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4"> {/* Added padding and min-height for better centering */}
      <Document
        file="/chhunlin.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {numPages && (
          <div className="flex items-center justify-center w-full max-w-4xl mx-auto"> {/* Wrapper for responsiveness and centering */}
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 mr-4"
              aria-label="Previous Page"
            >
              {/* Simple SVG left arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flip Book Container */}
            <div className="flex-shrink-0" style={{ width: '100%', maxWidth: '700px', height: 'auto' }}> {/* Max width for responsiveness */}
              <HTMLFlipBook
                width={350} // Base width - will be scaled by CSS
                height={500} // Base height - will be scaled by CSS
                showCover={true}
                className="flip-book"
                size="fixed"
                minWidth={200} // Adjusted minWidth for smaller screens
                maxWidth={600}
                minHeight={300} // Adjusted minHeight
                maxHeight={800}
                drawShadow={true}
                flippingTime={600}
                useMouseEvents={true}
                usePortrait={false}
                autoSize={true} // Keep autoSize true
                clickEventForward={true}
                mobileScrollSupport={true}
                maxShadowOpacity={0}
                swipeDistance={0}
                showPageCorners={true}
                disableFlipByClick={false}
                style={{ margin: '0 auto' }} // Center the flipbook within its container
                startPage={0}
                startZIndex={1}
                ref={flipBookRef} {/* Assign the ref here */}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <div
                    key={index}
                    className="page-wrapper"
                    style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Centering page content
                  >
                    <Page
                      pageNumber={index + 1}
                      width={350} // This width will be relative to the flipbook's dynamic size
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className="pdf-page"
                      // You might need to adjust the scale or width of the Page component
                      // based on how react-pdf handles its internal scaling within HTMLFlipBook's responsive container.
                      // Often, setting width on the Page is still helpful as a reference for react-pdf.
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ml-4"
              aria-label="Next Page"
            >
              {/* Simple SVG right arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </Document>
    </div>
  );
}