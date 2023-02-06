import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Arrow from '../icons/Arrow'
import CircleLoader from './CircleLoader'

function Searcher(props) {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value.replace(/((?=[^\w!])@\w+\b)/g, '').slice(0, 15))
  }

  useEffect(() => {
    props.onLoading(isLoading)
  }, [isLoading])

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    axios
      .post('https://tweettery-api.vercel.app/api/cohere/summary', { username: inputValue })
      .then((response) => {
        props.onData(response)
      })
      .catch((error) => {
        props.onError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-auto flex justify-between flex-wrap mt-6 mb-4">
        <motion.input
          type="text"
          className="w-[85%] rounded-sm px-2 h-8 bg-gray-100 hover:bg-white outline-none"
          placeholder="midudev"
          value={inputValue}
          onChange={handleInputChange}
          disabled={isLoading}
          whileHover={!isLoading && { scale: 1.025 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          required
          maxLength={15}
        />
        <motion.button
          className="w-[10%] bg-gradient-to-r bg-bg-sky-600 hover:bg-sky-500 h-8 text-white rounded-sm"
          whileHover={!isLoading && { scale: 1.1 }}
          whileTap={!isLoading && { scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ background: isLoading ? 'none' : '#0284c7' }}
          disabled={isLoading}
        >
          { isLoading 
            ? <CircleLoader />
            : <Arrow className='m-auto' />
          }
        </motion.button>
      </div>
    </form>
  )
}

export default Searcher;