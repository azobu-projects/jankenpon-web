import React, { useState } from 'react'
import styled from '@emotion/styled'

import { getRandomChoice, getChoiceImage, determineResult } from '../utils/game'

const GameContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`

const GameContent = styled.div`
  margin-top: 3rem;
`

const Heading = styled.h1`
  font-family: 'Architects Daughter', cursive;
  text-align: center;
`

const Section = styled.section`
  font-family: 'Architects Daughter', cursive;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Player = styled(Section)`
  flex-direction: row;
  border: 2px solid #000;
  font-size: 1.5em;
  height: 100px;
  background: ${(props) =>
    props.condition === 'win'
      ? '#7DE8A1' // gren
      : props.condition === 'lose'
      ? '#E87D7D' // red
      : props.condition === 'draw'
      ? '#C7C7D1' // gray
      : '#FFFFFF'};
`

const PlayerName = styled.h3`
  font-weight: bold;
  margin: 0;
`

const PlayerChoice = styled.img`
  height: 60px;
  margin: 1rem;
`

const Result = styled(Section)`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 900;
  min-height: 30px;
  letter-spacing: 0.1em;
  font-family: 'Press Start 2P', cursive;
`

const Panels = styled(Section)`
  flex-direction: row;
`

const Button = styled.button`
  cursor: pointer;
  font-weight: 900;
  padding: 1rem;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
  margin: 0 0.5rem;
`

const Game = () => {
  const [playerOne, setPlayerOne] = useState({
    name: 'You',
    choice: 'rock',
    condition: '',
  })
  const [playerTwo, setPlayerTwo] = useState({
    name: 'Computer',
    choice: '',
    condition: '',
  })
  const [result, setResult] = useState({
    message: ``,
  })

  const lockPlayerOne = () => {
    setPlayerOne({
      ...playerOne,
    })
  }

  const lockPlayerTwo = () => {
    setPlayerTwo({
      ...playerTwo, // Use rest parameter to get existing keys
      choice: getRandomChoice(),
    })
  }

  return (
    <GameContainer>
      <Heading>Jankenpon Simple</Heading>

      <GameContent>
        {/* Player Two or Computer */}
        <Player condition={playerTwo.condition}>
          <PlayerName>{playerTwo.name}:</PlayerName>
          {playerTwo.choice && (
            <PlayerChoice src={`/images/${playerTwo.choice}.png`} />
          )}
        </Player>

        {/* Game Result Message */}
        <Result>
          <span>{result.message}</span>
        </Result>

        {/* Player One */}
        <Player condition={playerOne.condition}>
          <PlayerName>{playerOne.name}:</PlayerName>
          <PlayerChoice src={`/images/${playerOne.choice}.png`} />
        </Player>

        {/* Game Panels */}
        <Panels>
          <Button
            onClick={() => {
              lockPlayerOne()
              lockPlayerTwo()
            }}
          >
            Set All Moves
          </Button>

          <Button
            onClick={() => {
              const result = determineResult(playerOne, playerTwo)
              setResult(result)
            }}
          >
            Game On!
          </Button>
        </Panels>
      </GameContent>
    </GameContainer>
  )
}

export default Game
