import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import * as RNFS from 'react-native-fs';

import  Rating from 'react-native-easy-rating';
import { Button } from 'react-native-elements/dist/buttons/Button';



export default function EditPostCard() {
  const [rating,setRating] = useState();

  return (
      <View>
    <Rating
      rating={rating}
      max={5}
      iconWidth={24}
      iconHeight={24}
      onRate={setRating}
      />
      
      <Text /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */  >{rating}</Text>

      <Button text="Confirm "/* onPress={ () => {RNFS.writeFile("../../jsons/Trips.json","rating":{rating})}} *//>
      </View>
  );
  
}
