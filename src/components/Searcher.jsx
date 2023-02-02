import React from 'react';
function Searcher() {
  return (
    <>
      {/* <hr className="mt-5 dark:border-gray-500 border-gray-300" /> */}
      <div className="m-auto flex justify-between flex-wrap">
        <input type="text" className="w-[82%] rounded-lg p-2 my-2 selection:border-gray-100" placeholder="@midudev" />
        <button className="w-[15%] bg-sky-500 text-white rounded-lg p-2 my-2">Search</button>
      </div>
    </>
  )
}

export default Searcher