//  Import Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { motion } from 'framer-motion'

// Import Components
import Map from './Widgets/Map'
import Bio from './Widgets/Bio'
import ProjectManagement from './Widgets/ProjectManagement'
import FlutterPackage from './Widgets/FlutterPackage'
import Calculator from './Widgets/Calculator'
import Spotify from './Widgets/Spotify'
import lauraMemoji from './Assets/Graphics/Sanjaygif.gif'
import mapHover from './Assets/Graphics/map-hover.png'
import LinkedIn from './Widgets/LinkedIn'
import Github from './Widgets/Github'
import layoutConfig from './Layouts/Layout'
import Gilitz from "./Widgets/Gilitz";
import GreenGrab from "./Widgets/GreenGrab";

// Import Styles
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './../App.css'
import Skills from './Widgets/Skills'
import Contact from './Widgets/Contact'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default class MobileShowcaseLayout extends React.Component {
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
			<motion.div>
				<ResponsiveReactGridLayout
					{...this.props}
					cancel='.btn'
					animate
					isResizable='false'
					isBounded='true'
					className='showcase-container'
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
					<div key='0'>
						<Bio layout={this.state.currentBreakpoint} />
					</div>
					<div key='1'>
						<div className='map-widget-overlay'>
							<img
								className='memoji-map'
								src={lauraMemoji}
								alt='laura-memoji'
							/>
							<img className='hover-map' src={mapHover} alt='map-hover' />
						</div>
						<Map />
					</div>
					<div key='2'>
						<Calculator />
					</div>
					<div key='3'>
						<Spotify />
					</div>
					<div key='4'>
						<Github />
					</div>
					<div key='5'>
						<ProjectManagement />
					</div>
					<div key='6'>
						<Gilitz />
					</div>
					<div key='7'>
						<LinkedIn />
					</div>
					<div key='8'>
						<GreenGrab number = {2}/>
					</div>
					<div key='9'>
						<FlutterPackage />
					</div>
					<div key='10'>
						<Skills layout={this.state.currentBreakpoint}/>
					</div>
					<div key='11'>
						<Contact layout={this.state.currentBreakpoint} />
					</div>
				</ResponsiveReactGridLayout>
			</motion.div>
		)
	}
}

MobileShowcaseLayout.propTypes = {
	onLayoutChange: PropTypes.func.isRequired,
}

MobileShowcaseLayout.defaultProps = {
	isDraggable: false,
	className: 'layout',
	rowHeight: 30,
	onLayoutChange: function () {},
	cols: { lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 },
	breakpoints: { lg: 900, md: 800, sm: 800, xs: 450, xxs: 400 },
}
