import React, {useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native';
import {Rating, RatingProps} from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


function PostCardPreview(props) {
    const [isOpenRating, setOpenRating] = useState(true);
    const [text, setText] = useState('');
    return (
        <View>
            <ScrollView>
                <Text style={styles.textTitles}>
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
                    onClose={() => setOpenRating(false)} /* não está a fazer nada */
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
                    Share your PostCard Online
                    <AntDesign name="facebook-square" size={32} color="#4267B2" />
                    <AntDesign name="instagram" size={32} color="black" />
                </Text>
                

            </ScrollView>
            <ScrollView>
                <Text>
                    Imagem? (No exemplo tem uma imagem do por do sol)
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Comment:
                </Text>
                <Text>
                    Que bela Viagem!
                </Text>
            </ScrollView>
            <ScrollView>
            <Text>Edit PostCard</Text>
                <FontAwesome name="edit" size={32} color="blue" />
            </ScrollView>
            <ScrollView>
                <Text style={styles.textTitles}>
                    Sighted Species
                    </Text>
                    <Text>
                        (Specie Name)
                    </Text>

                    <Image  /*Insert specie image*//>
                    <Text>
                    Sighted at: (eg. 10:23 AM)
                    
                    </Text>
                    <Text style={styles.textTitles}>
                    Description
                    </Text>
                    
            </ScrollView>

            <ScrollView>
                <Text style={styles.textTitles}>
                    Route :
                </Text>
                <Image  /*Insert route image*//>

            </ScrollView>
        </View>

        
            
        
    );
}

export default PostCardPreview;

const styles = StyleSheet.create({
    textTitles: {
        color: 'black',
        fontSize: 32,
        marginHorizontal: 10,
        marginTop: 10,
    },
})