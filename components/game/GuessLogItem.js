import {View, Text, StyleSheet}  from 'react-native'
import Colors from '../../constants/Colors';
function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text style={styles.textStyling}>#{roundNumber}</Text>
            <Text>Opponent's Guess : {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem : {
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset : {width : 0 , height : 6},
        shadowOpacity : 0.25,
        shadowRadius: 3,
    },
    textStyling : {
        fontFamily : 'open-sans'
    }
})