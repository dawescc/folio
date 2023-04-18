import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ememsLangs = [
    'HTMl, SCSS, JS',
    'Tailwind CSS',
    'Express.js',
    'REST API',
  ]
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100">
            folio
          </h2>
        </div>

        <div className="bg-slate-800 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-500 sm:mt-20 lg:flex lg:max-w-96">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">emems</h3>
            <p className="mt-6 text-base leading-7 text-gray-300">
              A dead simple memo storage app. Deployed via Docker.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-pink-500">How its made</h4>
              <div className="h-px flex-auto" />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
              <p>
                Desc.
              </p>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-900 py-10 text-center ring-1 ring-inset ring-gray-500/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-300">
                  Logo
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <img src="https://img.shields.io/github/v/tag/dawescc/emems?label=Latest+Version" alt="Latest Version" />
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-pink-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  Github Release Download
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Github Logo, Website Logo, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
