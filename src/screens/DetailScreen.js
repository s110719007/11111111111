import React from "react";
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


const DetailScreen = ({ route }) => {
  const { title, 
          artist,
          price,
          url,
          image,
          description
        } = route.params;

  return (
    <ScrollView>

    

    <PricingCard
        color='#BF2828'
        title='今天'
        price={`Price: $${price}`}
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'BUY NOW!', icon: 'add-shopping-cart' }}
        onButtonPress={() => Linking.openURL(url)}
    />

    <Tile
      imageSrc={{ uri: 'https://github.com/lg30assqwedrf/image-test/blob/master/component.png?raw=true' }}
      featured
      
     
    />

    <Card>
      <Text>Artist: {artist}</Text>
      <Text style={{ marginBottom: 10 }}>Title: {title}</Text>
      <Text style={{fontWeight: 'bold'}}>Descriptions:</Text>
      <Text style={{ marginBottom: 10 }}>
        {description}          
      </Text>
      <Button
        raised
        icon={{ name: 'add-shopping-cart' }}
        backgroundColor='#03A9F4'
        title='BUY NOW!'
        onPress={() => Linking.openURL(url)}
      />
    </Card>

  </ScrollView>
  );
}

export default DetailScreen;
