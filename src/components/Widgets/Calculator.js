import React from 'react';
import { Link } from 'react-router-dom';
import ticTacToe from '../Assets/Projects/calculator.png';
import Arrow from './../Assets/Graphics/arrow.svg'

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Link to='/nemorphic-calculator'>
				<div className='ttt-widget' style={{
					background:"#ADB1EF"
				}}>
					<img src={ticTacToe} alt='tic-tac-toe' style={{	
					marginTop:"auto",
					marginBottom:"auto",
					height:"100%",
					display:"block",
				}} />
					<button
						className='ttt-widget-button'
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

export default Calculator
