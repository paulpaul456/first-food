import React from 'react'
import GameNavBar from './GameNavBar'
import GameAttackBox from './GameAttackBox'

class GameApp extends React.Component {
  render() {
    return (
      <>
        <div className="gameApp">
          <GameNavBar />
          <GameAttackBox />
        </div>
      </>
    )
  }
}

export default GameApp
