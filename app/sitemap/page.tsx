import Link from "next/link";
import { Breadcrumbs } from "@/components"
const Page = () => {

    return (
        <div>
            <Breadcrumbs />
            {/* page heading */}
            <h2 className="text-2xl font-semibold">SiteMap</h2>
            <div>
                {/* group of links */}
                <div className="flex flex-col gap-1">
                    <Link href={'/'} className="text-blue-800 underline">
                        Home
                    </Link>
                    <Link href={'/forms'} className="text-blue-800 underline">
                        Forms
                    </Link>
                    <Link href={'/cards'} className="text-blue-800 underline">
                        Cards
                    </Link>
                    <Link href={'/buttons'} className="text-blue-800 underline">
                        Buttons
                    </Link>
                    <Link href={'/sitemap'} className="text-blue-800 underline">
                        Sitemap
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Page;