import Image from "next/image";
import Link from "next/link";
export default function Torque_Lesson() {
    return (
        <main>
            <Link className="absolute w-24 h-24 m-10 bg-slate-100 rounded-xl" href={'/'}>
                <Image className="" src='/logo.png' width={225} height={225} alt=''/>
            </Link>   
            
            <div className="flex justify-center w-full h-fit">     
                <div className="justify-center backdrop-blur-xl w-10/12 h-[1500px] border-amber-100 bg-slate-500 bg-opacity-20 border mt-8 mb-8 rounded-xl">
                    <div className="w-full text-center text-[100px] font-semibold">Torque</div>
                </div>
            </div>
        </main>
    );
}