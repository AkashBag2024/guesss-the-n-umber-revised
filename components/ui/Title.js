import "../../constants/Colors"
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
function Title(){
    return(
        
        <Text style={styles.title}>
            Opponent's guess
        </Text>
        
    )
}

export default Title;
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
        padding: 12,
        borderWidth: 2,
        borderColor: "white",
        marginTop: 28,
        marginHorizontal: 10
        
    }
})