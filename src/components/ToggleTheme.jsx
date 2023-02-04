import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LightIcon from "../icons/Light"
import DarkIcon from "../icons/Dark"

function ToggleTheme() {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme)
			document.documentElement.classList.add(storedTheme)
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark")
			document.documentElement.classList.add("dark")
		} else {
			setTheme("light")
		}
	}, [])

	const handleThemeSwitch = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
	}

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
				bg-gradient-to-l from-rose-400 via-rose-200 to-white max-lg:bottom-6 max-lg:top-auto max-lg:right-8
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