import { View , Text, Pressable , Image , StyleSheet} from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability , renderMealScreen }) {
    
  return (
    <View style = {styles.mainContainer}>
        <Pressable android_ripple={{color : "#ccc"}} 
        style = {({pressed}) => pressed ? styles.effect : null}
        onPress={renderMealScreen}>
            <View style = {styles.mealContainer}>
                <Image source = {{uri : imageUrl}} style = {styles.image}/>
                <Text style = {{fontWeight : 'bold'}}>{title}</Text>
            </View>
           <View style = {styles.infoContainer}>
                <Text style = {{fontWeight : 'bold' , padding : 2}}>{duration}m</Text>
                <Text style = {{fontWeight : 'bold' , padding : 2}}>{complexity}</Text>
                <Text style = {{fontWeight : 'bold', padding : 2}}>{affordability}</Text>
           </View>
        </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
    mainContainer : {
        // borderRadius : 20
        padding : 16
    },
    buttonContainer : {
        borderRadius : 20,
    },
    mealContainer : {
        backgroundColor : 'white',
        flex : 1,
        padding : 10,

    },
    infoContainer : {
        backgroundColor : '#fb6228',
        // borderRadius : 20,
        padding : 12,
        marginBottom : 5,
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'center',
        alignContent : 'space-around',
        flex : 4,
    },
    
    image : {
        width : '100%',
        height : 200,
        // borderRadius : 20,
    },
    effect : {
        opacity : 0.75,
    }
    
})
