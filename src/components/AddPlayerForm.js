import React from 'react';

export class AddPlayerForm extends React.Component {
	textInput = React.createRef();
	handleSubmit = (e) => {
		console.log('sumit');
		// submit의 기본 이벤트 막기
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(player.validity.valid);
		console.log(form.checkValidity());

		// 3) 부모에게서 받은 콜백 펑션을 호출
		// this.textInput.current = document.getElementById("player")
		this.props.addPlayer(this.textInput.current.value);
	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" className="input" type="text" placeholder="enter a player's name"
							 ref={this.textInput} required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}