import React from 'react';
import './App.css';

const Header = ({title, totalPlayers}) => {
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Player: {totalPlayers}</span>
    </header>
  )
}

class Counter extends React.Component { //부모가 갖고 있는 모든 메서드와 속성을 counter가 render를 통해 다 상속받음
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

// function 컴포넌트는 반드시 대문자로 시작
//react element를 리턴해야 한다.

const Player = (props) => (
  <div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
		</span>
    <Counter/>
  </div>
)

class App extends React.Component {
  state = {
    players : [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  constructor(){
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {/*Player list*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id} removePlayer={this.handleRemovePlayer}/>
            )
          })
        }
      </div>
    )
  }
  // constructor해서 바인드해서 연결해줘야하는 수고를 덜으려면 아래처럼 arrow function을 씀
  // handleRemovePlayer = (id) => { // arrow function 쓰면 this가 인식됌.
  // 	console.log('handleRemvePlayer', id);
  // 	this.setState(prevState => {
  // 		const players = prevState.players.filter(player => player.id != id)
  // 		return {players} //players: players 인데 key 와 value가 같으면 한 쪽을 생략해도 된다.
  // 	})
  // }

  handleRemovePlayer(id){ // arrow function 쓰면 this가 인식됌.
    console.log('handleRemvePlayer', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players} //players: players 인데 key 와 value가 같으면 한 쪽을 생략해도 된다.
    })
  }
}

export default App;
