import React from 'react';
function Logo() {
  return (
    <>
      <div className='grid grid-cols-[1fr 1fr] grid-rows-[auto auto] gap-x-5 max-sm:gap-x-2'>
        <img src="/src/assets/img/tweettery.png" alt="logo" className="w-20 h-20 max-sm:w-14 max-sm:h-14 max-[350px]:hidden rounded-full bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200 dark:bg-gray-100 dark:from-sky-600 dark:via-sky-700 dark:to-sky-900 col-[1/2] row-[1/3] self-center" />
        <h1 className="leading-none text-8xl text-left max-md:text-6xl max-[420px]:text-4xl font-arista text-sky-600 dark:text-sky-400 col-[2/3] row-[1/2]">Tweettery</h1>
        <p className="leading-none text-lg max-sm:text-xs text-gray-600 dark:text-white col-[2/3] row-[2/3] ml-4 max-sm:ml-1">{`Summary (almost) any twitter profile `}</p>
      </div>
    </>
  )
}

export default Logo