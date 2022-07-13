import React from 'react'
import digiseum1 from '../Assets/Projects/greenGrab1.png'
import digiseum2 from '../Assets/Projects/greenGrab.png'
import Arrow from './../Assets/Graphics/arrow.svg'
import { Link } from 'react-router-dom'
class GreenGrab extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='digiseum-widget' style={{paddingBottom:"10px"}}>
				{
					this.props.number === 1 ?(
						<picture>
							<source media="(min-width: 900px)" srcset={digiseum1}/>
							<source media="(min-width: 480px)" srcset={digiseum2}/>
							<img src={digiseum1} alt='digi-seum-project'style={{marginTop:"auto"}}/>
						</picture>
					):(
						<picture>
							<source media="(min-width: 900px)" srcset={digiseum1}/>
							<source media="(min-width: 480px)" srcset={digiseum2}/>
							<img src={digiseum2} alt='digi-seum-project' style={{marginTop:"auto"}}/>
						</picture>
					)
				}
				
				<Link to='/green-grab'>
					<button
						className='greengrab-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>					
				</Link>

			</div>
		)
	}
}

export default GreenGrab
