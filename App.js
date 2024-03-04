import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
// import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' :  require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setRoundNumber(numberOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setRoundNumber(0);
    
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver && userNumber){
    screen= <GameOverScreen userNumber={userNumber} roundNumber={roundNumber} 
    onStartNewGame={startNewGameHandler}/>
  }

  return (

    <LinearGradient colors={['#72063c','#ddb52f']} 
      style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dice.jpg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      > 
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgroundImage:{
    opacity:0.4
  }

});
