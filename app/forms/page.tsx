const Page = () => {
    return (
        <div className="px-2 flex flex-wrap gap-2">
            {/* form1 */}
            <div className="max-w-[420px] p-4 border w-full rounded-md bg-gray-100">
                <div className="py-6">
                    <div className="flex flex-col m-1">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="outline-none border-2  rounded-sm p-1 border-gray-200 focus:shadow-md" placeholder="Enter username" />
                    </div>
                    <div className="flex flex-col m-1">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className="outline-none border-2  rounded-sm p-1 border-gray-200 focus:shadow-md" placeholder="Enter password" />
                    </div>
                </div>
                <div className="flex flex-col m-1">
                    <button className="outline-none border-2  rounded-sm p-1 border-gray-200 font-semibold hover:shadow-sm hover:shadow-gray-800 hover:bg-gray-200"  >
                        Login
                    </button>
                </div>
            </div>
            {/* form2 */}

            <div className="max-w-[420px] p-4 border w-full bg-gray-800 text-gray-200 rounded-md">
                <div className="py-6">
                    <div className="flex flex-col m-1">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="outline-none border  rounded-sm p-1 bg-gray-800 border-gray-200 focus:bg-gray-900" placeholder="Enter username" />
                    </div>
                    <div className="flex flex-col m-1">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className="outline-none border rounded-sm p-1 bg-gray-800 focus:bg-gray-900" placeholder="Enter password" />
                    </div>
                </div>
                <div className="flex flex-col m-1">
                    <button className="outline-none border  rounded-sm p-1 border-gray-100 font-semibold hover:shadow-sm hover:shadow-gray-800 hover:bg-gray-900"  >
                        Login
                    </button>
                </div>
            </div>
            {/* form3 */}

            <div className="max-w-[420px] p-4 border w-full bg-slate-800 text-gray-200 rounded-md">
                <div className="py-6">
                    <div className="flex flex-col m-1">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="outline-none border  rounded-sm p-1 bg-gray-800 border-gray-200 focus:bg-gray-900" placeholder="Enter username" />
                    </div>
                    <div className="flex flex-col m-1">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" className="outline-none border rounded-sm p-1 bg-gray-800 focus:bg-gray-900" placeholder="Enter password" />
                    </div>
                </div>
                <div className="flex flex-col m-1">
                    <button className="outline-none border  rounded-sm p-1 border-gray-100 font-semibold hover:shadow-sm hover:shadow-gray-800 hover:bg-gray-900"  >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page;
