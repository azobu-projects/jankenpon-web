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
  font-weight: 900;
  padding: 1rem;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0 0.5rem;
  &:hover {
    opacity: 0.8;
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
const GameButton = styled(Button)``

// The Game component
const Game = () => {
  // State hooks
  const [gameSettings, setGameSettings] = useState({
    message: ``,
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
      condition: '',
    })
    setPlayerTwo({
      ...playerTwo,
      choice: '',
      condition: '',
    })
    setGameSettings({
      message: '',
    })
  }

  // Lock choice by players
  const lockPlayers = () => {
    setPlayerOne({
      ...playerOne,
    })
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
          <ChoiceButtons>
            <ChoiceButton
              onClick={() => setPlayerOne({ ...playerOne, choice: 'rock' })}
            >
              Rock
            </ChoiceButton>
            <ChoiceButton
              onClick={() => setPlayerOne({ ...playerOne, choice: 'paper' })}
            >
              Paper
            </ChoiceButton>
            <ChoiceButton
              onClick={() => setPlayerOne({ ...playerOne, choice: 'scissors' })}
            >
              Scissors
            </ChoiceButton>
          </ChoiceButtons>

          <GameButtons>
            <GameButton
              onClick={() => {
                lockPlayers()
              }}
            >
              Set All Moves
            </GameButton>

            <GameButton
              onClick={() => {
                if (playerOne.choice && playerTwo.choice) {
                  const result = determineResult(playerOne, playerTwo)
                  setGameSettings(result)
                }
              }}
            >
              Game On!
            </GameButton>

            <GameButton
              onClick={() => {
                resetGame()
              }}
            >
              Play Again
            </GameButton>
          </GameButtons>
        </Panels>
      </GameContent>
    </GameContainer>
  )
}

export default Game
