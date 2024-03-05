import { useState } from 'react';
import { TextInput , View, StyleSheet, Alert, 
    useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title';
import Cards from '../components/ui/Cards';
import InstructionText from '../components/ui/InstractionText';


function StartGameScreen({onPickNumber}){
    const [enteredNumber,setEnteredNumber] = useState('');
    const {width,height} =useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetEnteredNumber(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const choseenNumber = parseInt(enteredNumber);
        if(isNaN(choseenNumber) || choseenNumber <=0 || choseenNumber >99){
            // show alert 
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetEnteredNumber}]
            );
            
            return;
        }
        onPickNumber(choseenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;
    return(
      <ScrollView style={styles.screen}> 
     <KeyboardAvoidingView style={styles.screen} behavior='position'>   
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>     
    <Cards >
        <InstructionText style={styles.instructionText}>Enter a Number</InstructionText>
        <TextInput style={styles.numberInput} maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
        {/* Buttons */}
        <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>

    </Cards>
    </View>
    </KeyboardAvoidingView>
    </ScrollView> 
    )
}

export default StartGameScreen;
// const dimensionHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: dimensionHeight < 380 ? 30 : 100,
        alignItems: "center"
    },
   screen : {
    flex: 1,
   },
    
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor:  "#ddb52f",
        borderBottomWidth: 2,
        color : "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        width: 45,
        textAlign: "center",
    },
    instructionText:{
        marginBottom: 12,
    },
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex:1,
    }


})