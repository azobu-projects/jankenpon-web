import React, { useState } from 'react'
import styled from '@emotion/styled'

import { getRandomChoice, getChoiceImage, determineResult } from '../utils/game'

const GameContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`

const Heading = styled.h1`
  text-align: center;
`

const Section = styled.section`
  padding: 1rem;
  margin: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Player = styled(Section)`
  font-size: 1.5em;
  min-height: 100px;
`

const Result = styled(Section)`
  font-size: 1.5em;
  text-transform: uppercase;
  min-height: 30px;
`

const Panels = styled(Section)`
  flex-direction: row;
`

const Button = styled.button`
  cursor: pointer;
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

const PlayerName = styled.h3`
  font-weight: bold;
  margin-top: 0;
`

const PlayerChoice = styled.p`
  margin: 0;
  text-transform: uppercase;
`

const Game = () => {
  const [playerOne, setPlayerOne] = useState({
    name: 'You',
    choice: 'rock',
  })
  const [playerTwo, setPlayerTwo] = useState({
    name: 'Computer',
    choice: '',
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

      {/* Player Two or Computer */}
      <Player>
        <PlayerName>{playerTwo.name}:</PlayerName>
        <PlayerChoice>
          {getChoiceImage(playerTwo.choice)}
          {playerTwo.choice}
        </PlayerChoice>
      </Player>

      {/* Game Result Message */}
      <Result>
        <span>{result.message}</span>
      </Result>

      {/* Player One */}
      <Player>
        <PlayerName>{playerOne.name}:</PlayerName>
        <PlayerChoice>
          {getChoiceImage(playerOne.choice)}
          {playerOne.choice}
        </PlayerChoice>
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
    </GameContainer>
  )
}

export default Game
