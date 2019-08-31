import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;
	state = {
		isRunning: false,
		timer: 0
	}

	handleStopwatch = () => {
		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	handleReset = () => {
		this.setState({timer: 0})
	}

	render() {
		return (
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}

	tick = () =>{
		// time update logic
		if (this.state.isRunning) {
			this.setState(prevState => ({timer: prevState.timer + 1}));
		}
	}


	// DOM이 렌더링 된 직후에 호출되는 라이프 사이클
	// 네트워크 호출
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000);
	}

	// DOM이 파괴되기 직전에 호출되는 라이프 사이클
	// 리소스 해제 등등
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}