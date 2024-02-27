
import Colors from "../../constants/Colors"; "../constants/Colors"
import { View, Text,Pressable,StyleSheet } from "react-native";
function PrimaryButton({children, onPress}){
    
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} 
            style={(pressed)=> pressed 
            ? [styles.buttonInnerContainer,  styles.presssed] 
            :styles.buttonInnerContainer} 
            android_ripple={{color: Colors.rippleColor}}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles =  StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
    },
    presssed:{
        opacity: 0.75,
    }
})