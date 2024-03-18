import { IoSaveSharp } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const QuickSearchButton = () => {

    return (
        <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                <path d="m19 19-3.5-3.5">
                </path>
                <circle cx="11" cy="11" r="6"></circle>
            </svg>
            <span className="flex-auto">Quick search...</span>
            <kbd className="font-sans font-semibold dark:text-slate-500">
                <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
        </button>
    )
}

const Page = () => {

    return (
        <div>
            <QuickSearchButton />
            <div className="flex flex-wrap gap-2 py-2">
                <button className="bg-gray-800 px-2 py-1 rounded-md text-white shadow-sm hover:bg-gray-700">
                    Button Text
                </button>
                <button className="bg-blue-800 px-2 py-1 rounded-md text-white shadow-sm hover:bg-blue-700">
                    Button Text
                </button>
                <button className="bg-gray-100 px-2 py-1 rounded-md   hover:bg-white border-2 border-gray-200">
                    Button Text
                </button> 
                <button className="bg-slate-700 px-2 py-1 rounded-md text-white shadow-sm hover:bg-slate-600">
                    Danger Text
                </button>
                <button className="bg-red-700 px-2 py-1 rounded-md text-white shadow-sm hover:bg-red-600">
                    Danger Text
                </button>
                <button className="flex gap-2 items-center bg-slate-700 px-2 py-1 rounded-md text-white shadow-sm hover:bg-slate-600">
                    <IoSaveSharp />
                    <span>Save Text</span>
                </button>
                <button className="flex gap-2 items-center bg-green-700 px-2 py-1 rounded-md text-white shadow-sm hover:bg-green-600">
                    <IoCheckmarkCircleSharp />
                    <span>Save Text</span>
                </button>
                <button className="flex gap-2 items-center bg-red-700 px-2 py-1 rounded-md text-white shadow-sm hover:bg-red-600">
                    <IoPower />
                    <span>Shutdown</span>
                </button>
                <button className="bg-gray-800 px-2 py-1 rounded-full text-white shadow-sm hover:bg-gray-700">
                    Button Text
                </button>
                <button className="bg-gray-100 px-2 py-1 rounded-full   hover:bg-white border-2 border-gray-200">
                    Button Text
                </button>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Page;
