import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LightIcon from "../assets/icons/Light"
import DarkIcon from "../assets/icons/Dark"

function ToggleTheme() {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark")
		} else {
			setTheme("light")
		}
	}, [])

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [theme])

	const spring = {
		type: "spring",
		damping: 12,
		stiffness: 100
	}

	return (
		<div
			className={`
				h-8 w-20 flex items-center box-border cursor-pointer z-50 fixed right-16 top-6 px-[2px] rounded-[25px] 
				dark:bg-gradient-to-r dark:from-sky-400 dark:via-sky-600 dark:to-gray-900 
				bg-gradient-to-l from-rose-400 via-rose-200 to-white
			`}
			onClick={handleThemeSwitch}
			style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
		>
			<motion.div layout transition={spring} className="rounded-full h-6 w-6 grid items-center dark:bg-white bg-sky-900 overflow-hidden justify-items-center">
				<AnimatePresence mode="wait" initial={false}>
					<motion.i
						key={theme === "dark" ? "moon" : "sun"}
						initial={{ y: -30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 30, opacity: 0 }}
						transition={{ duration: .3 }}
					>
						{
							theme === "dark" 
								? <LightIcon /> 
								: <DarkIcon fill={"#fdffff"}/>
						}
					</motion.i>
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export default ToggleTheme