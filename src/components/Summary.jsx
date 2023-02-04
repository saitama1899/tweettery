import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import separateAndClean from '../utils/utils'

function Summary({ data, isLoading, error }) {
	const [color, setColor] = useState('#fff')
	const [output, setOutput] = useState(['', ''])
	const controls = useAnimation()

	useEffect(() => {
		controls.start("initial")
		isLoading && setColor('#efefef')
		error && setColor('#f2b7b7')
		data && setColor('#fff')
	}, [data, isLoading, error])

	useEffect(() => {
		data && data?.data?.cohere && setOutput(separateAndClean(data?.data?.cohere))
		console.log('output', output)
	}, [data])

	const variants = {
		initial: {
			translateX: 10,
			opacity: 0
		},
		animate: {
			translateX: -10,
			opacity: 0.85,
			transition: {
				translateX: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: 8,
					stiffness: 200,
					damping: 10
				},
				opacity: {
					duration: 0.5
				}
			}
		}
	}

	const variantsTopics = {
		initial: {
			translateY: 15,
			opacity: 0
		},
		animate: {
			translateY: 0,
			opacity: 0.85,
			transition: {
				translateY: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: 10,
					stiffness: 200,
					damping: 10
				},
				opacity: {
					duration: 0.5
				}
			}
		}
	}

	return (
		<>
			<motion.div
				className="flex wrap w-full items-center"
				controls={controls}
				initial="initial"
				animate="animate"
				variants={variants}
				exit="initial"
			>
				{data?.data?.twitter && (
					<>
						<img src={data?.data?.twitter} alt="avatar" className="w-auto h-16 rounded-full translate-x-4 max-sm:hidden" />
						<img src="/assets/img/ro.png" alt="bird" className="w-auto h-10 max-sm:hidden" />
					</>
				)}
				<motion.div
					className="shadow-md p-4 w-full overflow-hidden"
					animate={{ backgroundColor: color }}
				>
					{isLoading && 'Wait please. This can take a few seconds...'}
					{data?.data?.cohere && (output[1] ? output[1] : 'No summary available')}
					{error && error?.response?.data?.error}
				</motion.div>
			</motion.div>

			<div className='flex flex-wrap gap-4 max-sm:gap-2 my-8 justify-center'>
				{data?.data?.cohere && output[0].length > 0 && output[0].map((item, index) => (
					<>
						<motion.div
							key={item}
							className="p-4 bg-pink-200 rounded-full max-sm:p-2"
							controls={controls}
							initial="initial"
							animate="animate"
							variants={variantsTopics}
						>
							{item}
						</motion.div>
					</>
				))}			
				
			</div>
		</>
	)
}

export default Summary