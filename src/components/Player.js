import React from 'react'
import styled from '@emotion/styled'
import { Animate, AnimateKeyframes } from 'react-simple-animate'

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

const PlayerContainer = styled(Section)`
  flex-direction: row;
  border: 2px solid #000;
  font-size: 1.5em;
  height: 100px;
  background: ${(props) =>
    props.condition === 'win'
      ? '#7DE8A1' // green
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

const Player = ({ player }) => {
  return (
    <PlayerContainer condition={player.condition}>
      <PlayerName>{player.name}:</PlayerName>

      {/* 1. Don't show anything at first
      2. Show isLoading after chose a move
      3. Show the image if chosen and not isLoading  */}

      {!player.choice ? (
        <span></span>
      ) : player.choice && player.isLoading ? (
        <Animate
          play
          start={{ opacity: 0, filter: 'blur(10px)' }}
          end={{ opacity: 1, filter: 'blur(0)' }}
        >
          <AnimateKeyframes
            play
            duration={2}
            iterationCount='infinite'
            keyframes={[
              'transform: rotateZ(0deg)',
              'transform: rotateZ(359deg)',
            ]}
          >
            <PlayerChoice src={`/images/loading.png`} />
          </AnimateKeyframes>
        </Animate>
      ) : (
        <Animate
          play
          start={{ opacity: 0, filter: 'blur(10px)' }}
          end={{ opacity: 1, filter: 'blur(0)' }}
        >
          <PlayerChoice src={`/images/${player.choice}.png`} />
        </Animate>
      )}
    </PlayerContainer>
  )
}

export default Player
