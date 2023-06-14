import Image from "next/image";
import Link from "next/link";
export default function Tech_Concepts_Page (){
    return (
        <main className='w-full h-fit'>
            <Link className="absolute flex rounded-xl h-24 w-auto bg-slate-100 m-8 justify-center items-center" href={'/'}>
                <Image className="w-full h-full" alt="" src='/logo.png' width={225} height={225}/>
            </Link>
            <div className="flex h-fit justify-center">
                <div className="justify-center backdrop-blur-xl w-3/5 h-fit border-amber-100 bg-slate-500 bg-opacity-20 border mt-8 mb-8 rounded-xl">
                    <div className="w-full text-center text-5xl mt-10 font-semibold">Technical Concepts</div>
                    <div className="flex w-full justify-center mt-20">    
                        <Image className="w-[150px]" src='/gear.svg' alt='' height={50} width={50}/>
                    </div>

                    <div className="mt-20 text-center text-3xl">Lessons</div>
                    <div className="flex justify-center w-full h-fit mb-20">
                        <div className="grid grid-rows-3 grid-cols-2 w-5/6 h-fit grid-flow-col mt-10 rounded-2xl gap-3">
                            <Link className="h-[200px] text-center bg-slate-500 rounded-2xl border" href={'/Sections/Tech_Concepts/lessons/torque'}>
                                <p>Torque</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-1/2 rounded-xl h-32 " alt="" src='/torque.png' width={658} height={365}/>
                                </div>
                            </Link>
                            <div className="h-[200px] text-center bg-slate-500 rounded-2xl border">
                                <p>Mechanical Advantage</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-5/6 rounded-xl " alt="" src='/current.png' width={939} height={190}/>
                                </div>
                            </div>
                            <div className="h-[200px] text-center bg-slate-500 rounded-2xl border">
                                <p>Voltage</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-5/6 rounded-xl " alt="" src='/current.png' width={939} height={190}/>
                                </div>
                            </div>
                            <div className="h-[200px] text-center bg-slate-500 rounded-2xl border">
                                <p>Current</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-5/6 rounded-xl " alt="" src='/current.png' width={939} height={190}/>
                                </div>
                            </div>
                            <div className="h-[200px] text-center bg-slate-500 rounded-2xl border">
                                <p>Wires</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-5/6 rounded-xl h-full " alt="" src='/wire.svg' width={30} height={30}/>
                                </div>
                            </div>
                            <div className="h-[200px] text-center bg-slate-500 rounded-2xl border">
                                <p>Electric Motors</p>
                                <div className="flex w-full h-5/6 items-center justify-center">
                                    <Image className="w-1/3 h-full rounded-xl " alt="" src='/electric_motor.png' width={939} height={190}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}