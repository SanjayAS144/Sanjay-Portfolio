//  Import Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { motion } from 'framer-motion'

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './../../App.css'
import fp from '../Assets/Graphics/flutterPackage/fp.gif'

const layoutConfig = {
	lg: [
		{ i: '0', x: 0, y: 0, w: 3, h: 13 },
	],
	md: [
		{ i: '0', x: 0, y: 0, w: 3, h: 13 },
	],
	sm: [
		{ i: '0', x: 0, y: 0, w: 2, h: 9 },
	],
	xs: [
		{ i: '0', x: 0, y: 9, w: 2, h: 9 },
	],
	xxs: [
		{ i: '0', x: 0, y: 0, w: 2, h: 6 },
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
					<div key='0' >
						<img src={fp} alt='project-img' />
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
