import React from "react";
import { StyleSheet,ScrollView ,View,Image} from 'react-native';
import { ListItem ,Text} from 'react-native-elements';

// Make a component
const SearchScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 20}}>
         <View style={style.search}> 
            <ListItem
              title="l"
              leftIcon={{name:'search'}}
            />
            </View>
            <View style={style.picback}>
            <Image
                        style={styles.pic1}
                        source={{uri:bookData.bookList[0].image}}/>

            </View>
      <Text style={style.bottom}>Contact us :（02）1234-5678</Text>
        </ScrollView>
    );
}


const style = StyleSheet.create({
  
  bottom:{
    marginTop:485,
    marginLeft:90
  },
  search:{
    height:50,
    width:360,
    marginLeft:5,
    marginTop:30,
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:0.8,
        borderColor:'#d1d1d1',
        borderRadius:60,
  }
  
});
export default SearchScreen;
