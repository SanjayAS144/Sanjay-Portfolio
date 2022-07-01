import React from 'react';
import { Link } from 'react-router-dom';
import ticTacToe from '../Assets/Projects/mock1.gif';
import Arrow from './../Assets/Graphics/arrow.svg'

class Gilitz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Link to='/gilitz'>
				<div className='ttt-widget' style={{
					background:"#C9D4F9"
				}}>
					<img src={ticTacToe} alt='tic-tac-toe'  />
					<button
						className='gilitz-widget-button'
						style={{
							position: 'absolute',
							bottom: '1.5em',
							left: '1.5em',
							padding: '.8em',
						}}>
						<img alt='arrow' src={Arrow} style={{ maxWidth: '1.8em' }} />
					</button>
				</div>
			</Link>
			
		)
	}
}

export default Gilitz
