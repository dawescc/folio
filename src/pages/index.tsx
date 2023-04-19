import { Inter } from "next/font/google"
import GithubRelease from "@/components/lastestgithub"
import GithubStars from "@/components/starsgithub"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faPython, faDocker, faReact,
        faGithubAlt,
        } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAfrica, faStar } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-slate-100">
                        folio
                    </h2>
                </div>
                <div className="lg:max-w-96 mx-auto mt-16 max-w-2xl rounded-3xl bg-slate-800 ring-1 ring-slate-500 sm:mt-20 lg:flex">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-100">emems</h3>
                        <h4 className="flex-none text-xs font-semibold leading-6 text-slate-300">2023</h4>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            A dead simple memo storage web app. Deployed via Docker.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-slate-300">Made with</h4>
                            <div className="h-px flex-auto" />
                        </div>
                        <div className="mt-5 grid grid-cols-1 gap-4 text-xl leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                            <FontAwesomeIcon icon={faJs} name="JavaScript"/>
                            <FontAwesomeIcon icon={faReact} name="React"/>
                            <FontAwesomeIcon icon={faDocker} name="Docker"/>
                        </div>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="h-full rounded-2xl bg-slate-900 py-10 text-center ring-1 ring-inset ring-gray-500/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                            <p className="text-4xl font-semibold text-slate-300">
                                    <img
                                        src="images/emems.png"
                                        alt="emems logo"
                                    />
                                </p>
                               <GithubRelease repo="emems" />
                                <p className="text-s mt-6 flex flex-row justify-evenly leading-5 text-slate-300">
                                    <a href="https://github.com/dawescc/emems" className="shadow-sm hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300">
                                        <FontAwesomeIcon icon={faGithubAlt} name="Github"/>
                                    </a>
                                    <a href="https://emems.dawes.cc" className="shadow-sm hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300">
                                        <FontAwesomeIcon icon={faGlobeAfrica} name="Globe"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-96 mx-auto mt-16 max-w-2xl rounded-3xl bg-slate-800 ring-1 ring-slate-500 sm:mt-20 lg:flex">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-100">porpo</h3>
                        <h4 className="flex-none text-xs font-semibold leading-6 text-slate-300">2022</h4>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            A desktop app for analysing Formula 1 session data.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-slate-300">Made with</h4>
                            <div className="h-px flex-auto" />
                        </div>
                        <div className="mt-5 grid grid-cols-1 gap-4 text-xl leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                            <FontAwesomeIcon icon={faPython} name="Python"/>
                        </div>
                        <GithubStars repo="porpo" />
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="h-full rounded-2xl bg-slate-900 py-10 text-center ring-1 ring-inset ring-gray-500/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-4xl font-semibold text-slate-300">
                                    <img
                                        src="images/porpo.png"
                                        alt="porpo logo"
                                    />
                                </p>
                                <GithubRelease repo="porpo" />
                                <p className="text-s mt-6 flex flex-row justify-evenly leading-5 text-slate-300">
                                    <a href="https://github.com/dawescc/porpo" className="relative shadow-sm hover:text-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
                                        <FontAwesomeIcon icon={faGithubAlt} name="Github"/>
                                    </a>
                                    <a href="https://porpo.dawes.cc" className="shadow-sm hover:text-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
                                        <FontAwesomeIcon icon={faGlobeAfrica} name="Globe"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
