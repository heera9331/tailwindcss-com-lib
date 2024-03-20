import { Breadcrumbs } from "@/components"

const Page = () => {
    return (
        <div >
            <Breadcrumbs />
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
                B</div>

            {/* form2 */}

            <div className="max-w-[420px] border-2 p-4 m-2 rounded-md">
                <div className="flex flex-col py-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="$ 0.0"
                        className="bg-gray-100 shadow-sm border-2 border-gray-300 focus:border-blue-800 py-1 px-2 rounded-md outline-none"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="select">Selection</label>
                    <select name="select" id="select" className="bg-gray-100 shadow-sm border-2 border-gray-300 focus:border-blue-800   py-1 px-1 rounded-md outline-none">
                        <option value="op1">Option 1</option>
                        <option value="op1">Option 2</option>
                        <option value="op1">Option 3</option>
                    </select>
                </div>

                <div className="pt-6">
                    <button className="bg-gray-100 shadow-sm border-2 border-gray-300 focus:border-blue-800 hover:bg-white  py-1 px-1 rounded-md outline-none w-full">
                        Register
                    </button>
                </div>
            </div>

            <div className="border-2 p-4 m-2 rounded-md">
                {/* heading */}
                <h2>Input Form Elements</h2>
                <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="userSearch">Search</label>
                    <div className="flex gap-2">
                        <input type="text" name="userSearch" placeholder="Search here..."
                            className="border-2 border-stone-400 p-1 rounded-sm"
                        />
                        <button className="bg-stone-800 text-white py-1 px-2 rounded-sm hover:bg-stone-700">
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="userSearch">Search</label>
                    <div className="flex gap-2">
                        <input type="text" name="userSearch" placeholder="Search here..."
                            className="border-2 border-stone-400 p-1 rounded-sm"
                        />
                        <button className="border-stone-800 border-2 text-stone-800 py-1 px-2 rounded-sm hover:bg-gray-100">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
