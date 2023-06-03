import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen w-full bg-gradient-to-tr from-cyan-300 to-blue-700'>
      {/*titlebar*/}
      <div className='flex float-top w-full h-20 justify-start items-center'>
          <div className='p-2 ml-2 text-xl rounded-xl bg-blue-600 text-blue-200 items-center'>  
            <div className='float-left ml-1 mr-2'>Chapters</div> 
            <Image className='mt-2 mr-1' src='/down_arrow.png' alt='^' width={15} height={15}/>
          </div>
          <div className='p-2 ml-2 text-xl rounded-xl bg-blue-600 text-blue-200'>Info</div>
          <div className='p-2 ml-2 text-xl rounded-xl bg-blue-600 text-blue-200 '>Credits</div>
      </div>
      <div className='flex h-5/6 justify-center items-center'>
        <div className='text-5xl'> 2023 Programming Manual</div>
      </div>
      <div className='float-right'>
          <div>dev</div>
      </div>
    </main>
  )
}
