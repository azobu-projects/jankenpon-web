import { getRandomNumber } from './random'

import rules from '../data/rules.json'
import choices from '../data/choices.json'

export const getRandomChoice = () => {
  // Get random number
  const selectedNumber = getRandomNumber(choices.length)

  // Get either "rock", "paper", "scissors" based on index
  const selectedShape = choices[selectedNumber]

  return selectedShape
}

export const getChoiceImage = (playerChoice) => {
  // Find choice object in rules
  const foundChoice = rules.find((rule, index) => rule.choice === playerChoice)

  // Return only the image string if found
  if (foundChoice) return foundChoice.image
  else return ''
}

export const determineResult = (subject, opponent) => {
  // Setup subject object that found within rules
  const subjectRule = rules.find((rule) => rule.choice === subject.choice)

  // Determine which one is the winner
  if (subjectRule.win === opponent.choice) {
    // Subject choice is win against the opponent choice
    subject.win = true
    return {
      message: `${subject.name} Win!`,
    }
  } else if (subjectRule.lose === opponent.choice) {
    // Subject choice is lose against the opponent choice
    opponent.win = true
    return {
      message: `${opponent.name} Win!`,
    }
  } else {
    // Subject choice is draw against the opponent choice
    return {
      message: `Game Draw!`,
    }
  }
}
