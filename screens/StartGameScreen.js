import { useState } from 'react';
import Colors from '../constants/Colors';
import { TextInput , View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";


function StartGameScreen({onPickNumber}){
    const [enteredNumber,setEnteredNumber] = useState('');
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
            Alert.alert('Invalid number!','Number has to be a number bbetween 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetEnteredNumber}]
            );
            
            return;
        }
        onPickNumber(choseenNumber);
    }
    return( 
    <View style={styles.inputContainer}>
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

    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primaryDark,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        // shadow effect for IOS 
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1,
        // shadow effect for IOS

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
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex:1,
    }


})