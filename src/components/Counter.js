import React from "react";

export class Counter extends React.Component { //부모가 갖고 있는 모든 메서드와 속성을 counter가 render를 통해 다 상속받음
	state = {
		score: 0,
		a: 10
	}
	constructor() {
		super();
		this.handleChangeScore = this.handleChangeScore.bind(this);
	}
	handleChangeScore(delta) {
		console.log('handleChangeScore', this);
		//state을 변경하는 방법은 setState() 밖에 없다.
		//this.sate.score += 1;
		this.setState((prevState) => ({score: prevState.score + delta}));
	}


	//이벤트의 오른쪽은 함수 선언문이 들어가야 한다.
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.handleChangeScore(-1)}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={() => this.handleChangeScore(1)}> + </button>
			</div>
		)
	}
}