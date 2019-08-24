import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';



// function 컴포넌트는 반드시 대문자로 시작
//react element를 리턴해야 한다.

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
