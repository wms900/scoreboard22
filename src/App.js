import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { AddPlayerForm } from './components/AddPlayerForm';



// function 컴포넌트는 반드시 대문자로 시작
//react element를 리턴해야 한다.

class App extends React.Component {
  state = {
    players : [
      {name: 'LDK', score:0, id: 1},
      {name: 'HONG', score:10, id: 2},
      {name: 'KIM', score:20, id: 3},
      {name: 'PARK', score:30, id: 4},
    ]
  }
  maxId = 4;

  constructor(){
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>
        {/*Player list*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id} score={player.score}
                      id={player.id}
                      changeScore={this.handleChangeScore}
                      removePlayer={this.handleRemovePlayer}
              />
            )
          })
        }
        {/*// 2) 콜백 펑션을 props로 내려주기*/}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
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
  handleChangeScore(id, delta) {
    console.log(id, delta);
    this.setState(prevState => {
      //id에 해당되는 player를 찾은 다음 score에 delta를 더한다.
      const players = [...prevState.players ];
      players.forEach(players => {
        if(players.id === id) {
          players.score += delta;
        }
      })
      return {players}
    })
  }
  // 1) 콜백 펑션 정의
  handleAddPlayer = (name) => {
    console.log(name);
    //add player 로직

    this.setState(prevState => {
      // 원본 배열을 훼손 x. => deep copy
      const players = [ ...prevState.players ];
      players.push({name, score: 0, id: ++this.maxId});

      return {players};
    });
  }
}

export default App;
