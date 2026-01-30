import { QRCodeSVG } from 'qrcode.react'
import { generateVCard } from './utils/generateVCard'

const CONTACT = {
  name: 'John R. Marshall',
  email: 'johnrobertmarshall1@gmail.com',
  phone: '1-(609)-454-1185',
  linkedin: 'https://www.linkedin.com/in/john-marshall-277104124/',
  instagram: 'https://www.instagram.com/johnnymarshh/',
  websiteUrl: 'https://johnmarshall.thedev.me/',
}

function App() {
  const handleDownloadVCard = () => {
    generateVCard({
      ...CONTACT,
      photoUrl: import.meta.env.BASE_URL + 'headshot.jpg',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          {/* Left Column: Headshot */}
          <div className="shrink-0">
            <img
              src={import.meta.env.BASE_URL + 'headshot.jpg'}
              alt="John R. Marshall"
              className="h-48 w-48 rounded-full border-4 border-white object-cover shadow-lg md:h-64 md:w-64"
            />
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {CONTACT.name}
            </h1>

            {/* Contact Details */}
            <div className="mt-4 space-y-1 text-gray-600">
              <p>{CONTACT.email}</p>
              <p>{CONTACT.phone}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>

              <a
                href={import.meta.env.BASE_URL + 'resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-900"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume
              </a>

              <button
                onClick={handleDownloadVCard}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-900"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Save to Contacts
              </button>
            </div>

            {/* QR Code Section */}
            <div className="mt-10 flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:items-start">
              <p className="mb-3 text-sm font-medium text-gray-500">
                Scan to visit my site
              </p>
              <QRCodeSVG
                value={CONTACT.websiteUrl}
                size={140}
                level="M"
                bgColor="#ffffff"
                fgColor="#111827"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} {CONTACT.name}
      </footer>
    </div>
  )
}

export default App
