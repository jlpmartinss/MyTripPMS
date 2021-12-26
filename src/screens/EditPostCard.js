import React, { useState } from 'react';
import { View, Text} from 'react-native';


import  Rating from 'react-native-easy-rating';

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
      <Text>{rating}</Text>
      </View>
  );
  
}
