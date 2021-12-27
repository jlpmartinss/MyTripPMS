import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import { Dirs, FileSystem} from 'react-native-file-access';

import  Rating from 'react-native-easy-rating';

//const text = await FileSystem.readFile(Dirs.CacheDir + 'test.txt');

export default function EditPostCard({ route, navigation}) {
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

      <Button
        title="Confirm"
        onPress={ () => {FileSystem.writeFile("../../jsons/Trips.json",{rating: rating})} } 
      />
      
      </View>
  );
  
}
