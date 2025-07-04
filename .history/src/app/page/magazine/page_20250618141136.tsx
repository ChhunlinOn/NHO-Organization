"use client";

import dynamic from 'next/dynamic';

// Dynamically import PDFViewer with SSR disabled
const PDFViewer = dynamic(() => import('../../component/PDFViewer'), {
  ssr: true,
});

export default function MagazinePage() {
  return (
    <div className="p-6">
      <PDFViewer />
    </div>
  );
}
