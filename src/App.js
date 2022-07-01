import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import ProjectGilitz from './components/Widgets/Projects/ProjectGilitz';
import ProjectGreenGrab from './components/Widgets/Projects/ProjectGreenGrab';
import ProjectCalculator from './components/Widgets/Projects/ProjectCalculator';
import ProjectFlutterPackage from './components/Widgets/Projects/ProjectFlutterPackage';
import ProjectProjectManager from './components/Widgets/Projects/ProjectProjectManager';
import AboutLayout from './components/AboutLayout';
import Testamonial from './components/testamonialgrid';
import MobileAboutLayout from './components/MobileAboutLayout';
import ShowcaseLayout from './components/GridLayout';
import MobileShowcaseLayout from './components/MobileGridLayout';
import ProjectsLayout from './components/ProjectsLayout';
import MobileProjectsLayout from './components/MobileProjectsLayout';

const App = () => {
		return (
			<Router>
				<div
					className='row'
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
						padding: '1em',
					}}>
					<div className='col-12 grid-container'>
						<Header />
						<Routes>
							<Route
								path='/'
								element={isMobile ? <MobileShowcaseLayout /> : <ShowcaseLayout />}
							/>
							<Route
								path='/about'
								element={isMobile ? <MobileAboutLayout /> : <AboutLayout />}
							/>
							<Route
								path='/projects'
								element={isMobile ? <MobileProjectsLayout /> : <ProjectsLayout />}
							/>
							<Route
								path='/testamonial'
								element={<Testamonial /> }
							/>
							
							<Route path='/gilitz' element={<ProjectGilitz />} />
							<Route path='/green-grab' element={<ProjectGreenGrab />} />
							<Route path='/nemorphic-calculator' element={<ProjectCalculator />} />
							<Route path='/flutter-package' element={<ProjectFlutterPackage />} />
							<Route path='/project-manager' element={<ProjectProjectManager />} />
						</Routes>
					</div>
				</div>
			</Router>
		)
	}

export default App
