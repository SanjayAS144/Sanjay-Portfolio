import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimateSharedLayout } from 'framer-motion';

export default function Header() {
  const [selected, setSelected] = useState(0);

  const nav = [
	  { title: 'Home', link: '/' },
	  { title: 'About', link: '/about' },
	  { title: 'Projects', link: '/projects' },
	  { title: 'Testamonial', link: '/testamonial' }
  	]

	const transition = { duration: 0.5, ease: 'easeInOut' }

	const postVariants = {
		initial: { y: 10, opacity: 0 },
		enter: { y: 0, opacity: 1, transition },
		exit: { y: -10, opacity: 0, transition },
	}

	return (
		<div>
			<AnimateSharedLayout>
				<div className="row" style={{ justifyContent: 'center' }}>
				<div className='header col-6'>
					<ol style={{ transform: 'translateZ(0)', padding: '2em 0em' }}>
						{nav.map(({ title, link }, i) => (
							<motion.li
								initial='exit'
								animate='enter'
								exit='exit'
								variants={postVariants}
								key={i}
								className={`title ${i === selected && 'selected'}`}
								onClick={() => setSelected(i)}
								>
								{i === selected && (
								<motion.div
									layoutId='underline'
									className='underline'
									/>
								)}
								<Link style={{ textDecoration: 'none', color: 'black' }} to={link}>{title}</Link>
								</motion.li>
						))}
					</ol>
				</div>
				</div>

			</AnimateSharedLayout>
		</div>
	)
}
