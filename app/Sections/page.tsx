import Link from "next/link";
import Image from "next/image"
export default function ChapterDashboard() {
    return(
     <main className='w-full h-screen bg-blue-300'>
        <div className="flex h-28 bg-gradient-to-r from-blue-900 to-blue-700">
                <a href="/" className="relative w-20 h-20 mt-4 ml-7 rounded-lg bg-white">
                    <Image src="/logo.png" alt="Home" width={100} height={100} />
                    </a>
        </div>
        

     </main>   
    );
}