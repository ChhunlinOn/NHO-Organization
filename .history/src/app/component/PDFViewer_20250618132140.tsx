"use client";

import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import '@/utils/pdfWorker'; // config with pdfjs.GlobalWorkerOptions.workerSrc

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <Document
      file="/chhunlin.pdf"
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.from(new Array(numPages || 0), (_, index) => (
        <Page key={index + 1} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
