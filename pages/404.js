import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound =()=>{
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/');
        }, 3000);
    },[])
    return(
        <div>
            <h1>oops link tidak ada</h1>
            <p>go back <Link href="/">home</Link></p>
        </div>
    );
}

export default NotFound;