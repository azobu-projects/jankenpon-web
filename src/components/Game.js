import React, { useState } from 'react'
import styled from '@emotion/styled'

import Player from './Player'

import { getRandomChoice, determineResult } from '../utils/game'

const GameContainer = styled.div`
  max-width: 720px;
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

const Result = styled(Section)`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 900;
  min-height: 30px;
  letter-spacing: 0.1em;
  font-family: 'Press Start 2P', cursive;
`

const Button = styled.button`
  cursor: pointer;
  background: #000;
  color: #fff;
  font-weight: 900;
  padding: 1rem;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0 0.5rem;
  &:hover {
    opacity: 0.9;
  }
`

const Panels = styled(Section)`
  flex-direction: column;
`

const PanelRow = styled.div`
  margin: 0.5rem 0;
`

const ChoiceButtons = styled(PanelRow)``
const ChoiceButton = styled(Button)``

const GameButtons = styled(PanelRow)``
const GameButton = styled(Button)`
  color: black;
  background-color: ${(props) =>
    props.color === 'yellow'
      ? '#ffdd33' // yellow
      : props.color === 'green'
      ? '#6cc24a'
      : props.color === 'blue'
      ? '#00d8ff'
      : '#aaaaaa'};
`

// The Game component
const Game = () => {
  // State hooks
  const [gameSettings, setGameSettings] = useState({
    message: ``,
    isOver: false,
  })
  const [playerOne, setPlayerOne] = useState({
    name: 'You',
    choice: '',
    condition: '',
  })
  const [playerTwo, setPlayerTwo] = useState({
    name: 'Computer',
    choice: '',
    condition: '',
  })

  // Reset the game if user click play again
  const resetGame = () => {
    setPlayerOne({
      ...playerOne,
      choice: '',
      condition: '',
    })
    setPlayerTwo({
      ...playerTwo,
      choice: '',
      condition: '',
    })
    setGameSettings({
      message: '',
      isOver: false,
    })
  }

  // Handle user choice
  const handleChoice = (choice) => {
    setPlayerOne({ ...playerOne, choice })
  }

  return (
    <GameContainer>
      <Heading>Jankenpon Fancy</Heading>

      <GameContent>
        {/* Player Two or Computer */}
        <Player player={playerTwo} />

        {/* Game Settings Message */}
        <Result>
          <span>
            {gameSettings.message ? gameSettings.message : `Let's begin!`}
          </span>
        </Result>

        {/* Player One or User */}
        <Player player={playerOne} />

        {/* Game Panels */}
        <Panels>
          {!gameSettings.isOver && (
            <ChoiceButtons>
              <ChoiceButton onClick={() => handleChoice('rock')}>
                Rock
              </ChoiceButton>
              <ChoiceButton onClick={() => handleChoice('paper')}>
                Paper
              </ChoiceButton>
              <ChoiceButton onClick={() => handleChoice('scissors')}>
                Scissors
              </ChoiceButton>
            </ChoiceButtons>
          )}

          <GameButtons>
            {!gameSettings.isOver && playerOne.choice && (
              <GameButton
                color='yellow'
                onClick={() => {
                  // 1. Set choice for player two
                  setPlayerTwo({
                    ...playerTwo, // Use rest parameter to get existing keys
                    choice: getRandomChoice(),
                  })
                }}
              >
                Set Move
              </GameButton>
            )}

            {!gameSettings.isOver && playerOne.choice && playerTwo.choice && (
              <GameButton
                color='green'
                onClick={() => {
                  // 2. Determine the result
                  if (playerOne.choice && playerTwo.choice) {
                    const result = determineResult(playerOne, playerTwo)
                    setGameSettings({
                      ...result,
                      isOver: true,
                    })
                  }
                }}
              >
                Game On!
              </GameButton>
            )}

            {gameSettings.isOver && (
              <GameButton
                color='blue'
                onClick={() => {
                  resetGame()
                }}
              >
                Play Again
              </GameButton>
            )}
          </GameButtons>
        </Panels>
      </GameContent>
    </GameContainer>
  )
}

export default Game
