import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, useWindowDimensions, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Cards from '../components/ui/Cards';
import InstructionText from '../components/ui/InstractionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const {width, height} = useWindowDimensions();
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  // console.log(minBoundary,maxBoundary);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessRounds ] = useState([initialGuess]);
  
  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(()=>{minBoundary =1; maxBoundary = 100} , [])

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLength = guessRounds.length;
  let content = (<>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cards>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <FontAwesome name="minus" size={24} color={Colors.secondary}/>
          </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            
          <FontAwesome name="plus" size={24} color={Colors.secondary} />
          </PrimaryButton>
          </View>
          
        </View>
      </Cards>
  </>);

  if(width > 500){
    content =( <>
    {/* <InstructionText>Higher or lower?</InstructionText> */}
      <View style={styles.buttonContainerWide}>
      <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <FontAwesome name="minus" size={24} color={Colors.secondary}/>
          </PrimaryButton>
      </View>
      
      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            
          <FontAwesome name="plus" size={24} color={Colors.secondary} />
          </PrimaryButton>
      </View>
      </View>
    </>)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}> 
      
      {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}  */}
      <FlatList data={guessRounds}
      renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} 
      guess={itemData.item}/>}
      keyExtractor={(item)=> item}
      />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer:{
    flexDirection: "row",
},
buttonContainer:{
    flex:1,
},
buttonContainerWide: {
  flexDirection: 'row',
  alignItems: 'center'
},
listContainer : {
  flex: 1,
  padding: 16
}
});