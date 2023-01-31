function App() {
  return (
    <main className="App bg-sky-200 absolute top-0 left-0 right-0 bottom-0">
      <div className='container m-auto my-5'>
        <h1 className="text-4xl text-center">Tweettery</h1>
        <div className="w-1/2 m-auto my-24">
          <h2 className="text-2xl text-center">Summary this twitter profile</h2>
          <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-2 my-2" placeholder="@midudev" />
          <button className="w-full bg-blue-500 text-white rounded-lg p-2 my-2">Search</button>
        </div>
      </div>

    </main>
  )
}

export default App
