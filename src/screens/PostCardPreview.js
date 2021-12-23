import React, {useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native';
import {Rating, RatingProps} from 'react-native-elements';



function PostCardPreview(props) {
    const [isOpenRating, setOpenRating] = useState(true);
    const [text, setText] = useState('');
    return (
        <View>
            <ScrollView>
                <Text>
                    Localização
                </Text>

            </ScrollView>

            <ScrollView>
                <Text /* */>
                    Todas as imagens da viagem em side scroll
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Nome, data e rating
                    <Rating
                    onClose={() => setOpenRating(false)}
                    visible={isOpenRating}
                    showRating
                    type= "star"
                    fractions ={1}
                    startingValue={5}
                    imageSize={40}
                    ratingConfirm={selectedRating => {
                        console.log('Selected rating', selectedRating);
                      }}
                    >

                    </Rating>
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    butões de partilha
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Imagem?
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Comentário:
                </Text>
                <Text>
                    Que bela Viagem!
                </Text>
            </ScrollView>
            <ScrollView>
                <Button title="Edit PostCard" options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color}/> )}}/>

            </ScrollView>
            <ScrollView>
                <Text>
                    Sighted Species
                    </Text>
                    <Text>
                    Nome da espécie
                    </Text>

                    <Image  /*Insert specie image*//>
                    <Text>
                    Hora de avistamento
                    Descrição
                    </Text>
                
            </ScrollView>

            <ScrollView>
                <Text>
                    Route :
                </Text>
                <Image  /*Insert route image*//>

            </ScrollView>
        </View>

        
            
        
    );
}

export default PostCardPreview;