import Colors from "../../constants/Colors";
import { View, Text, StyleSheet } from "react-native";
function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor: Colors.secondary,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        color: Colors.secondary,
        fontSize: 36,
        fontWeight: "bold"
    }
})