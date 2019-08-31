import React from "react";
import PropTypes from 'prop-types';

export class Counter extends React.Component { //부모가 갖고 있는 모든 메서드와 속성을 counter가 render를 통해 다 상속받음

	// handleChangeScore(delta) {
	// 	console.log('handleChangeScore', this);
	// 	//state을 변경하는 방법은 setState() 밖에 없다.
	// 	//this.sate.score += 1;
	// 	this.setState((prevState) => ({score: prevState.score + delta}));
	// }


	//이벤트의 오른쪽은 함수 선언문이 들어가야 한다.
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"
								onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment"
								onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
			</div>
		)
	}
}

Counter.propTypes = {
	score: PropTypes.number,
	id: PropTypes.number,
		changeScore: PropTypes.func
}