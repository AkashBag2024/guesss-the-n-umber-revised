import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function Cards({children}){
    return(
        <View style={styles.card}>{children}</View>
    );
}

export default Cards;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
})