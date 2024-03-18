
import { MdAccountCircle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
const Page = () => {

    return (
        <div>
            <h2 className="text-2xl font-semibold">Cards</h2>
            <div className="py-2 flex flex-wrap gap-3 relative">
                <div className="max-w-[260px] border border-gray-200 px-2 rounded-sm shadow-md">
                    {/*card heading  */}
                    <div className="border-b" >
                        <h2 className="font-semibold text-xl py-1">Card heading</h2>
                    </div>
                    {/* card body */}
                    <div className="py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore dolor eos excepturi nihil fugiat accusamus rem, veniam nisi obcaecati ratione in quasi deserunt fugit corrupti magnam inventore distinctio necessitatibus! Quo accusantium laudantium corrupti nobis id non quos sit.
                    </div>
                    {/* card footer */}
                    <div className="border-t py-2 px-1">
                        <p>Like 12k+</p>
                    </div>
                </div>
                <div className="max-w-[260px] border border-gray-200 rounded-sm shadow-md relative">
                    {/*card heading  */}
                    <div className="border-b px-2 bg-gray-300" >
                        <h2 className="font-semibold text-xl py-1">Card heading</h2>
                    </div>
                    {/* card body */}
                    <div className="p-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore dolor eos excepturi nihil fugiat accusamus rem, veniam nisi obcaecati ratione in quasi deserunt fugit corrupti magnam inventore distinctio necessitatibus! Quo accusantium laudantium corrupti nobis id non quos sit.</p>
                    </div>
                    {/* card footer */}
                    <div className="border-t py-2 px-1  absolute bottom-0 w-full">
                        <p>Like 12k+</p>
                    </div>
                </div>
                <div className="max-w-[260px] border border-gray-200 rounded-sm shadow-md relative">

                    {/* card body */}
                    <div className="p-2 flex flex-col items-center">
                        <p className="text-center">
                            <MdAccountCircle className="text-[100px]" />
                        </p>
                        <p className="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore dolor eos excepturi nihil fugiat accusamus rem, veniam nisi obcaecati ratione in quasi deserunt fugit corrupti magnam inventore distinctio necessitatibus! Quo accusantium laudantium corrupti nobis id non quos sit.</p>
                    </div>

                </div>

            </div>

            <div className="shadow-md p-4 m-auto rounded-md">
                {/* card heading */}
                <div className="flex justify-between items-center">
                    <div className="border-b py-2">
                        <h2 className="text-xl text-gray-600 font-semibold">Job Postings</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.</p>
                    </div>

                    <div>
                        <button className="bg-blue-700 text-white rounded-sm py-1 px-2 hover:bg-blue-600">Create new job</button>
                    </div>


                </div>
                <div className="py-2">
                    <h2 className="font-semibold text-gray-600">Back End Developer</h2>
                    <div className="flex gap-2 items-center py-2">
                        <IoPeopleSharp className="text-xl" />
                        <span className="text-sm">Engineering</span>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="font-semibold text-gray-600">Front-End Developer</h2>
                    <div className="flex gap-2 items-center py-2">
                        <IoPeopleSharp className="text-xl" />
                        <span className="text-sm">Engineering</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
