
import Link from "next/link";
import React from "react";
import { getPathname } from "@/utils";

export default function Breadcrumbs({ path }: { path?: string }) {
    // Split the path into segments
    const currentUrl = path || getPathname();
    const segments = currentUrl.split("/").filter((segment) => segment);

    return (
        <nav className="bg-gray-100 py-2 px-2">
            <ol className="list-none flex text-gray-500">
                <li className="flex items-center">
                    <Link href="/">
                        <span className="font-semibold text-gray-500 px-1">/</span>
                    </Link>
                </li>
                {segments.map((segment, index) => (
                    <li key={index} className="flex items-center">
                        <Link href={`/${segments.slice(0, index + 1).join("/")}`}>
                            {segment}
                        </Link>
                        {index < segments.length - 1 && (
                            <span className="font-semibold text-gray-500 px-1">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}