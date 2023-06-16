import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='h-fit'>
      {/*titlebar*/}
      <div className='flex w-full h-28 justify-start items-center'>
          <div className='transition ease-in-out delay-150 hover:bg-blue-800 hover:-translate-y-2 duration-150 p-2 ml-2 text-xl rounded-xl bg-yellow-600 items-center' >  
            <Link className='float-left ml-1 mr-2' href="/Chapters">Chapters</Link> 
            <Image className='mt-2 mr-1' src='/down_arrow.png' alt='^' width={15} height={15}/>
          </div>
          <div className='transition ease-in-out delay-150 hover:bg-blue-800 hover:-translate-y-2 duration-150 p-2 ml-2 text-xl rounded-xl bg-yellow-600'>Info</div>
          <div className='transition ease-in-out delay-150 hover:bg-blue-800 hover:-translate-y-2 duration-150 p-2 ml-2 text-xl rounded-xl bg-yellow-600'>Credits</div>
      </div>

      {/*box in the middle*/}
      <div className='flex h-[1000px] justify-center'>            
        <div className='justify-center backdrop-blur-xl w-3/5 h-[1500px] border-amber-100 bg-slate-500 bg-opacity-20 border mt-8 mb-8 rounded-xl'>
          <div className='flex justify-center items-center w-full h-[300px]'>
            <Image className='h-40 w-40 bg-slate-100 rounded-2xl' height={100} width={100} src='/logo.png' alt=''/>
          </div>

          <div className='h-12 w-full text-5xl font-bold text-center mb-40'> Learn everything you need to become an effective programmer</div>

          <p className='text-center w-full mb-20 '>This manual covers essential features and concepts that you will use while programming for the castle robotics team</p>
          <h1 className='text-5xl font-bold text-center mb-9'>Sections</h1>

          {/*Grid layout for sections part of the page*/}
          <div className='flex w-full items-center justify-center'>
            <div className='grid grid-cols-3 w-[90%] h-[400px] justify-self-center gap-6'>

              {/*Each block here works as a button*/}
              <Link className='block border-amber-100 border rounded-xl' href ='/Sections/Tech_Concepts'>
                <div className='h-11 w-full float-top mt-3 text-center'>Technical Concepts</div>
                <div className='flex w-full justify-center'>
                  <Image className='w-1/2 h-[200px]' alt='' src='/gear.svg' width={50} height={50} ></Image>
                </div> 
              </Link>

              <Link className='block border-amber-100 border rounded-xl' href={'/Sections/Math'}>
                <div className='h-11 w-full float-top mt-3 text-center'>Math</div>
                <div className='flex w-full justify-center'>
                  <Image className='w-1/2 h-[200px]' src = '/math.svg' alt='' width={50} height={30}/>
                </div>
              </Link>

              <Link className='block border-amber-100 border rounded-xl justify-center' href={'/Sections/Java'}>
                <div className='h-11 w-full float-top mt-3 text-center'>Java</div>
                <div className='flex w-full justify-center'>
                  <Image className='w-1/2 h-[200px]' alt='' src='/java.svg' width={50} height={50}/>
                </div>
              </Link>

              <Link className='block border-amber-100 border rounded-xl justify-center' href={'/Sections/WPILib'}>
                <div className='h-11 w-full float-top mt-3 text-center'>WPILib</div>
                <div className='flex w-full justify-center'>
                  <Image className='w-1/2 h-[170px] mb-5' src='/WPILibDev.png' alt='' width={50} height={50}/>
                </div>
              </Link>

              <Link className='block border-amber-100 border rounded-xl justify-center' href={'/Sections/Past_Bots'}>
                <div className='h-11 w-full float-top mt-3 text-center'>past Robots </div>
                <div className='flex w-full justify-center'>
                   <Image className='w-1/2 h-[170px] mb-5' alt='' height={50} width={50} src='robot.svg'/>
                </div>
              </Link>

              <Link className='block border-amber-100 border rounded-xl justify-center'href={'/Sections/Web_Docs'}>
                <div className='h-11 w-full float-top mt-3 text-center'>Web Documentation</div>
                <div className='flex w-full justify-center'>
                  <Image className='w-1/2 h-[170px] mb-5' alt='' src='/book.svg' width={50} height={50}/>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    
    </main>
  );
}
