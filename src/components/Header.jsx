import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Searcher from './Searcher';

function Header() {
	return (
		<header>
      <Navbar />
			<div className='my-8 m-auto shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] bg-white/[.33] dark:bg-black/[.6] rounded-xl w-fit py-2 px-16 hover:bg-white/[.5] dark:hover:bg-black/[.7]  duration-500 select-none'>
				<Logo />
				<Searcher />
			</div>
		</header>
	)
}

export default Header