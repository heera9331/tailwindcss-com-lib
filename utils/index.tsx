import { headers } from 'next/headers';

const headersList = headers();

const getPathname = () => {
 
    const fullUrl = headersList.get('referer') || "";
    const pathname = fullUrl.slice(fullUrl.indexOf('/', 10))
    return pathname;
}


export { getPathname }