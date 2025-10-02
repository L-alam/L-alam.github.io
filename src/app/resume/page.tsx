// pages/resume.tsx (or app/resume/page.tsx if using app router)
import Navigation from '../components/Navigation';

export default function Resume() {
  return (
    <div className="min-h-screen relative">
      
      <div className="fixed inset-0 z-0 bg-[#297373]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main className="max-w-3xl mx-auto px-8 py-12 sm:px-12">
          <div className="text-white mb-6">
            <h1 className="text-4xl font-bold mb-2">Resume</h1>
            <p className="text-lg opacity-90">
              View my complete resume below or 
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-200 ml-1"
              >
                download PDF
              </a>
            </p>
          </div>
          
          {/* PDF Embed Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/assets/resume.pdf"
              width="100%"
              height="800"
              className="border-0"
              title="Resume PDF Viewer"
            >
              <p className="p-4 text-center text-gray-600">
                Your browser doesn&apos;t support PDF viewing. 
                <a href="/resume.pdf" className="text-blue-600 hover:underline ml-1">
                  Download the PDF instead
                </a>
              </p>
            </iframe>
          </div>
          
          {/* Fallback for mobile or unsupported browsers */}
          <div className="mt-4 text-center">
            <p className="text-white text-sm opacity-75 mb-2">
              Having trouble viewing the resume above?
            </p>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#297373] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Open in New Tab
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}