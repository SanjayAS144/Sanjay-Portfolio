//  Import Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { motion } from 'framer-motion'

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Arrow from './../Assets/Graphics/arrow.svg'
import './../../App.css'
import { Link } from 'react-router-dom'

const layoutConfig = {
	lg: [
		{ i: '0', x: 0, y: 0, w: 1, h: 6 },
		{ i: '1', x: 1, y: 0, w: 2, h: 6 },
		{ i: '3', x: 0, y: 9, w: 2, h: 6 },
		{ i: '4', x: 2, y: 9, w: 1, h: 6 },
	],
	md: [
		{ i: '0', x: 0, y: 0, w: 1, h: 6 },
		{ i: '1', x: 1, y: 0, w: 2, h: 6 },
		{ i: '3', x: 0, y: 9, w: 2, h: 6 },
		{ i: '4', x: 2, y: 9, w: 1, h: 6 },
	],
	sm: [
		{ i: '0', x: 2, y: 0, w: 1, h: 6 },
		{ i: '1', x: 0, y: 0, w: 2, h: 6 },
		{ i: '3', x: 2, y: 9, w: 2, h: 6 },
		{ i: '4', x: 0, y: 9, w: 1, h: 6 },
	],
	xs: [
		{ i: '0', x: 0, y: 9, w: 1, h: 6 },
		{ i: '1', x: 0, y: 0, w: 2, h: 6 },
		{ i: '3', x: 0, y: 9, w: 2, h: 6 },
		{ i: '4', x: 0, y: 0, w: 1, h: 6 },
	],
	xxs: [
		{ i: '0', x: 0, y: 9, w: 1, h: 4.5 },
		{ i: '1', x: 0, y: 0, w: 2, h: 4.5 },
		{ i: '3', x: 0, y: 9, w: 2, h: 4.5 },
		{ i: '4', x: 2, y: 0, w: 1, h: 4.5 },
	],
}

const ResponsiveReactGridLayout = WidthProvider(Responsive)
const transition = { duration: 0.5, ease: 'easeInOut' }

const postVariants = {
	initial: { y: -5, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 5, opacity: 0, transition },
}

export default class ProjectLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentBreakpoint: '',
			compactType: 'vertical',
			mounted: false,
			layouts: layoutConfig,
		}

		this.onBreakpointChange = this.onBreakpointChange.bind(this)
		this.onLayoutChange = this.onLayoutChange.bind(this)
	}

	componentDidMount() {
		this.setState({ mounted: true })
	}

	onBreakpointChange(breakpoint) {
		this.setState({
			currentBreakpoint: breakpoint,
		})
	}

	onLayoutChange = (layout, layouts) => {
		this.setState({ layouts })
	}

	render() {
		const { layouts } = this.state

		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={postVariants}>
				<ResponsiveReactGridLayout
					cancel='.btn'
					animate
					isResizable='false'
					isBounded='true'
					{...this.props}
					className='project-grid-container'
					layouts={{
						lg: layouts.lg,
						md: layouts.md,
						sm: layouts.sm,
						xs: layouts.xs,
						xxs: layouts.xxs,
					}}
					breakpoints={{ lg: 1000, md: 750, sm: 660, xs: 450, xxs: 400 }}
					onBreakpointChange={this.onBreakpointChange}
					onLayoutChange={this.onLayoutChange}
					measureBeforeMount={false}
					useCSSTransforms={this.state.mounted}
					compactType={this.state.compactType}
					preventCollision={!this.state.compactType}>
					<div key='0' style={{display:"flex",justifyContent:"center",background:"#98d0ff"}}>
						<img src={this.props.key4} alt='project-img' style={{margin:"auto",justifyContent:"center",width:"180%",height:"100%"}}/>
					</div>
					<div key='1' >
						<img src={this.props.key1} alt='project-img' style={{width:"130%",height:"100%"}} />
					</div>
					<div key='3'>
						<img src={this.props.key3} alt='project-img' />
					</div>
					<Link to='https://play.google.com/store/apps/details?id=com.bmsit.gilitz&hl=en&gl=US'>
					</Link>
					<div key='4' style={{display:"flex",justifyContent:"center",background:"#98d0ff"}}>
						<img src={this.props.key0} alt='project-img' style={{margin:"auto",justifyContent:"center"}}/>
						<a href='https://play.google.com/store/apps/details?id=com.bmsit.gilitz&hl=en&gl=US'
						target='_blank'
						rel='noopener noreferrer'
						alt='github-repo' >
							<button
								className='ps-widget-button'
								style={{
									position: 'absolute',
									bottom: '1.5em',
									left: '1.5em',
									padding: '.8em',
								}}>
								<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
							</button>
						</a>
					</div>
				</ResponsiveReactGridLayout>
			</motion.div>
		)
	}
}

ProjectLayout.propTypes = {
	onLayoutChange: PropTypes.func.isRequired,
}

ProjectLayout.defaultProps = {
	className: 'layout',
	rowHeight: 30,
	onLayoutChange: function () {},
	cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
	breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 },
}
