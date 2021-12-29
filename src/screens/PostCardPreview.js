import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState , useEffect} from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, Share, ImageBackground, Dimensions, Touchable } from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import data from "./../../jsons/Trips.json";
import Category from '../../Category';
import files from './fileBase64';
//import * as Sharing from 'expo-sharing';
import Images from '../Images';
import SelectPicture from './SelectPictureScreen'


const { height, width } = Dimensions.get('window')

var tripId = 0;


const id = data[tripId].id;
const ongoing = data[tripId].ongoing;
const location = data[tripId].location;
const latitude = data[tripId].lat;
const longitude = data[tripId].long;
const seaState = data[tripId].seaState;
const name = data[tripId].name;
const imagecollection = data[tripId].imagecollection;
const date = data[tripId].date;
const time = data[tripId].time;
const hours = data[tripId].hours;
const imgPath = data[tripId].imgPath;
const rating = data[tripId].rating;
const comment = data[tripId].comments;
const sightedSpecies = data[tripId].animals;
const routetrip = data[tripId].route;
const boatName = data[tripId].boatName;
const behaviour = sightedSpecies.Behaviours;

const imagesTest = {
    image1: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTExMVFhUXGB0YGBgYGB4dHhggHh0gIB8YHR8ZHSggGh4mHRoeIjEhJSkrLi4uGiAzODMsNygtLisBCgoKDg0OGxAQGzAlICUvLS01Ky8tNS0tKy0vLS8tLS8vLS0vLS0vLS0tLS0tLS0tLS0tNS0tLS0tLy0tLS0tLf/AABEIALIBGwMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAEBQYDAAIHAQj/xAA9EAACAQIFAwIEBAUCBgIDAQABAhEDIQAEEjFBBSJRE2EGMnGBQpGhsRQjUsHw0eEHM2JygvFDkhWy0hb/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAuEQACAgICAQIFAwQDAQAAAAAAAQIRAyESMUFR8BMiMnGBBGGRobHR4TNSwRT/2gAMAwEAAhEDEQA/AIjqlSspQF3YaTOvSkq0fM1Nu6ZA1sSDNsKsiyl/TqUHaoWARVtpA8wCSdpttfF1kko+mWGaXNTNQIEqACSSz3GkG8GSIifbHTN5NMvTlP5dR+ymFdSGMjSIUDkwGkzEnHnuXH5fdkLlWqJ1MnXGpKrVdA7yop1DTG4MkjtAM3a0fbGa9UFFVTUrEHVC3Ag9uo2gT4JtigzuVzKhWCCraCvqUn5Haw9NmJG8ETc3MYV1aVOtTqUBopQQ2pQqBjwah0yY5CgAXNojBqntm3fYX034g1rDEMDAaQxA8MFEiRvBBv4vjnUaSyHBkRcGxPsykH7QD5wvTotRCFpsrKZN6gAtZiGMSJEwJwXl+ntTb08wG7lkKV34BBJItEyMZJpLRvFeDGjlRqVqfbCmwuAJkSdwbjjjjGVXNku3q0yzab6puJgMBuIiJMeI4xr1V2pwgEK0FSAJYbzIseLW+mOyH+V3Lup067LY7Md4mT4Bwlb2/IUu9g/TqtIDTUJkdy9oOoe02Gw9jEYofhTPaS5KG7S/IIPJmRaCduRfbEo9Qqy+oiqdikmAI3EkiI8GPaMWGUK6CypOuQGDgBQQe0iSOIm+02wvM+G/UXPQ+y/S/VKpQI9KO7UwIVjsCAZBljt49wCqyjNSNRJYaCQ7CGChWItbYk7n/UYxormKLRTpVa1I3WDGnmO2SG3sLxMezXPUHzFNUWopYGO1gUgj8W0sLmY8xvbIO413+4+OR0k9r1Fee6mjQja1Gk6iIMk2EbwbR9WO82lOoZr03BSqQpsF50+/j/Ix2+KalWlpkswY2gAW1bWN5g8WwgbOg3iPeI/TnFUMNPkhmPAntl10jONUp6SNRtcyt5ktI2AH+eDupZOHEPC2ZoJOlZDAHTuTEgxa/wBMROWzLNTZqdQj09wN4IBn6b/lh7lepK1JAb2kFzIvFmgCOPzF9sc4KrFTw0xyKFAt2VdUEkCfJsTJBIkeBzOO1TIwEZmVQxEVOL7zG9+LnC7L5qiZIDAFbcANMWA3HF7i5i+GAqNo9RyO2AJMsxawCxIBnk8bc4mlJRkcvlAs2yFm0j1NAgtEgkntAgSfm2jnA1VBYVCyoCAqqNIZZk6pJZtxcHeRAjBGV6QVp1mc9ocaiqmJYBgeQo7lAm35HAdfJBEYqoZAQNQe0mQJJG1gJ2uPlucFX/UKcZJ3HejmbzLGktJNLqHIU/K0En5RqOoGQDFwABtJLfp9fLohJdw5VhrmYUiWTSvzi1txMb2xj8N51Vp+kYuxYqVLhCRsJFpta2/ONviCg9WrSKQVaLqpDLMwW8e5G4XCZRd10LWJy+YYdB6YtN0LOPVCaLWmZ1KI7GhpuNzOKelm/wAGtZa9ubbGB5EbcbYlsn8Pu/psbAdp7omLFG41WsYvM4f5LpbMYkASO+xLQImNgNyPt741cX2XY0kuqRtTyaoW1knVYqRuY3nkkft9MTfU+h+m5anTTQxEqkgyfIUROLKoQupXmCZ1EwZBsxjbiIvxxhLnOoIyrFjeTsGgxNx3bjncYOM9gucvTRP5/ptGkrVQAagYM6CBquFYLHy2kx5+sYb5fPMVLldMiLxNoADRefc2k23OJ1s2xHnUCwJmb8T41Tv4ON8tnAaWgNMjUQGsYJO3AvET7WwTpOiRx3xCM3moBVopkwApJN4MSQdtUbEb32wp6kCAoZlTSJ2vqJlgLkH9haLHDWrRLCKilTEntIuLkQwmQZHE3uMA5s06oZVCkgaO5oAjuN4uTeYlrffHQbukM0kyQzWdhXDKygteWLAnmRYD2IHHO+OtLIllZjTsI1EkjTO1pHFvvg7LZejmamlSadPcO0EmB3EdtidP/uMPmy8U4qCmrEzsQDpkiWLBoMAntEg7b4rt17/B1+hANlXLn01qSIkJqbybwPrgzLZRgOdUkaTAXT5LMYIIkx7TjXrlTSSq6UDKGIDAajLEEzvbi8ffHytmaYQJdm9x2i03tBO354JttDk7RtRapps1ViAdIUk2FpNpAFx4/sMVdrgKQefWX/8ArAB6h3EgXFxsAACOI3It98b0Q7jUEUzNyzLN/AMDGcG+xUrL/JLUQevRiXUlqsIig3BJU96ib2M7bxfvluptVisas01a/qMNI2PaEXTxaQx8k2xLU3ECSu5lVUtOwAGp4MAbyMHJnaRWmlFqhrvCCnpBuTaFOlDEggGBhHF9kbiyi6oEr1NLKlSmVCj06lkMiRAgzHgDbE5mq7BWy60nVS06m0radySAQAQJIbgTExgX4m6Jnsr6b1wSGYLSYOCUIvdU5In6eThr0rMlmQ1A1U6dYGqmFcjhapAjeSo1bC+DaaVs5LikxMEqNUIaVqQB3rIjYEA7SIEj/fD5alfUaUF9Sz6RclkK2i0oBImI1H74Jq9Uo03YKtNmZYcDSdSkSdZKiQBEQdgNhum6nlqlKkw0zRdm0ppqMlrgMzDci9iYPOxx0bn4GwfJ9G9POZYuoJabnQwjSwiVbVDWv4i42Ft6pp02HogfLI1ieLQbgx4Bm+04iKtN6lSAGZoEXk7bWv5EG+2KvPU9VD1KavTA0sabL2sdixkBjt77++FzxpNbMnjo6VBpvUViS14CjuN4MKQY9uBb3KyatUDaSCWIJGowbc222Mgz/fKhSLQSzAPEqrEwwBJk7id5kxEfTF6b0w5GvXbULMJ4ZSNptcXvgO+wNPsoeng1B6INQgSGWmwV4jYahJuAcJeq5QZJGqipUhyQrEdxnfVxMeBBvBjBvQ+qliTUC6VtqcyR3WWSI8D7Yx+OqxqUYJUAkAq2/wAxhklbHgkcYGEPmUfD7CxNqfHwxWerrWo+iruACtyvzAXvpN7mLg/LiRzjuarKup4mLSY+gw2p5cZfUVeJWGEg2+qj9Pa+GuUz9OlR0CpIqSBYBjzcrvc8meNha+1DpHqKFKuiXydeoosGkXkAz9cUXTerCQoBJ2gELNtwIiZ/wYwo51AQ3d8pM2Oo6mHP++FXUM+rEkUx5kHb2thjSlpoCUV5Kt1otA9Sopm4ZQWk3OxA9sMcpkmlKlOqjqpJhpBBuJbe4Eidseb1upOxuxMbajJFhyfpjSj1aqDaow91t+2+FywRfgHjB6PWl6eGVlJkMSTBBE2gbiYgRb9YwPmukohBd3VAYHptJAIMpJXaAIYC0DzjzdOt1RH8z5TIv/p/l8M8j8VVBvpIj7Hzb/1hXwXFVEz4daiyt9AZecu8KV/5dSQOwQVU27tyv/j9MEVaz0FpuY7yDpMkFmFwCPlIAsf6VjnEk/xMGM1ACYiYmAZ+4334xvR+KFc97Ei5IsQZIJIERx/nK/hS9BkbiejZTq4f0+6QZIgwJgx9SDgiv1MhtEtMQIOneeRx9L2+uILp1YOb1kK6iUgwyydiJkQOfaOScNK+b0gTNt4ImBvHB9vOFZMMl40HOcfP8Fdmc92TpYj5SAwbgyb3HH2nCfq2cVUq02MmQRBtbiBvcfUT9I+HPsNK1CEibKZktwVEkEDiLYXnpDEq1RwFRgSJPyE/SfaLH7YFR0KjOFUL6FP1jeppAWDIJAAYNqEf9W0e21zgpa9BA1Ba3yIDrZwpphyTYRLEHSIB82FpTfEOZehpXa+n5QZsI3MAwNuPtgvpuZpMhapTXWIOoCdWk2YADcEc2tirFC1bFzj6BdGs1WgXp1FqlHWaglWUAgHShaGniBvzJwJnXphw9EKCoDfzNBjVAUFXGgixOqdzxj78RMqqrKQp1d12WxXcLtwPbbjE/lnVhUGlXLLJFian3sYETY4ZSi9Awxuu9HevlKj1nWtdlACnXGmIMHTdl9hsV84Lz2kU1CZlBq0ho1MO0QLRIiY21fXfAWZ6o4CPUUM+5cjVA4DT232gjicBdJ9IOS602WovbqaACPJI0xv7i2GR2xihRj8RkqVUQygWfQUn/wASx2Ef4MJxUtbyI9+P7Yf556BZyoYk2MGQBebmIH74HX0gRpSAOeQBufrP7Y20kauhdTDoQShh4sRJiZtNp7d8ff4mtwrfk39sVP8A+D1MjM1nBJhj3SDAt5gRG/iYkRMgAIZEDCxAzkCebANH0k4GM4zb4+BbcX1sa9JrEIwbTT0QWLoVqKBdjpsSPlhvfHXO9V7dFJkUmFSo6w/ktJBEEGN5uMVeRytLNUtOaqKxB1euCSzgCwlWgxO8Xta0lL8T/B1N2pPQrrUpmIlwQQD3KNCGDBmZP2xKopO2yFcb2TFTrmfy5TVXroQCEOuVImT5DGfckTHGBV621R3qVmTXBg+moLG15QXMTc/3xbdP+D6TZb08xnP4d6haKRIZJUsVYayCe2PlK84lepfAGdpl/TpetTWT6lM2YcwrQ8+RHnffFScXofFwkYL1AUmBpLoZdlKgsZ3LPBm5nSR49sO8t1qrUVQCWNlFCo9nvdkjTcbiDP8A0kYj+mtqN/BG57jAgbfQcbjDDIZrQKiEAahud0b8JkeLAx5nGSjQaglsKzQSnqdlrU8woMhm2MwC3aCQfIOC/h7raoxQkKCIOou23CncRuL+b3wD199TUwIkU41amhpjtIc+29pBFgcKunUJMqwVt1S8tfYePbAvGpR2HKFqy4zuWHpuRBuHRyw0XtBbbcmIP4rkxjWrRUimag9J48hwwHIZO033AIN7jnAVTpGZqUyjlI1BgCpGqADpB0wN/MWxn0rppI06dCsZd5VWAiZAY/LabX3PjE8+HEl46G9Kq8nRT1jZmLMINwSoN7RNyZwj+LD6lPWB3KRMTMEXn2B//bB9dGpk0iG0zC11chWEDVK7Bid5MbxfC2uN6ZdaicAsNRJAMTIPIP5nAYlxlY3EqlbJVahYFZJI28z4vv8ATBdMmn6Yqoxv+La8Xg7GIOrkYpfh/KUhUghVJVtRLTo2WTwblojYDHfPOlM1CpQshDNTLGe0N8p+U2YW8ifY2yl6Fs9RsiKlYntBYqCQJIMCdrY1p5GsydtMlSYtv+W8e8Y3rOrO7XBJ1GPLGcWmTFPQCp/AABAGwvJmf/Y8RjsmXitITklxin6kd03oBq1VpF4Zv6VLQQCYIEXgcTvhtlPg9W1D1WkCR2i9pIu3b98Osnl0V/WR7kEDSYK6hdgNPAtII+++CTk6z/8AL1adOglmEmBfcyZPPG+Fynkn9Bibl0yX6h8KhG0isT/4iY+zWNtjhb1LowpKWFQGIgFSD9DuB/nnFPnOq06APqQay/KAwaDMwYgRHN/0xJdQ6s1d5YQs/LM4bBTq2wkn5YHlqbudKqzE8AScOum5mqZpUaNOBZiy7f8AdxP1BxRfDdGmtL1ECl/Amf8Aa37Y3zlEDYQGN45/X3/XGPNTHfD0Red6RUolZIYnbSf0jeftil6H0QppzNfMLoQawiFyQdMqGMA0zIFiPykTjmsjeAj6gZBE6rTa0EXG9sfc/wBfqGVVAtuSpiBudMd1tr32scc5t9CcqktIdP8AEhEorAzq0kaSyyxJInabWtzaMaDq6A60JDHSH1RIi0Qo++wIM3xKikzRqDE6xeCQQZiCbxvbxxgnQwInTBN9iwG0/YbT49icTuPgn+Gl2V+b6UuZpFtNJQtQMzM+mCLkDfYWiPfCLOdQ0qUKvTZR8y3mJljcwNgNJ2mLY2apUstOpH4pOna4PcotMRvwbxEBZ3JGq7Gu+pSZXQfmixJJF78TPaeMHCKSSCi15JivUFVu3UfdiOfa/wDnjDPJ5WrSTSrAamE7wR5PAi2DGppS0apIUbLtz5uLDaN/OMs3njVWAQFLWXaPe5mf9cObaVUPbCuo5Oi6qhqVNQsSI0yAJIG/64UVMkFU0hVQpOqCGkG9xFgYMfYYZ1Mqi0tXJsIM7mR78TfAGXpMXCqpJJsIv4nCm5cqX8GNuwHIdFrO+hNjsTMG0xMWt/lxg2hl6prtSNQ04aCaKlgDa4AIJWeQT7A4psu1a4eslNKay5EAIJH9O7sdv3wdleqHVr1IUqSjCDqqLEK+oTJBGwmbC5mWpSv5q9+oPJ7E9DoVbQ/rhq6swbQEOoj+oGNaKbE7cWvjtRr00GlEZ1Gzazfyfl8475fKMjtVGhmkekIDQL8u5NPiRM+8YYKWNymYJ5KusTzE1Ad8ck/AltnMrUp1abgukqpbSsSTubGzGfAnC85yugU5dCbEEoBKwfm0tYHjYx9YwvRDKhmEsrOO4iZMTeCLGfEA/THbJ5mnl2V20tIMG5UWni36HEirlvsmrwCZjqrZhiXrEv4qVNKiN4Yr2H/tI22w16xT6jlqXqjM1CtQhO1iCSZiDtwO4QTfCT4hzLMUUZene4K95YTaw+X6ETj5lfiHO0Yoqz07gqloDf1Q4IiAbC18Uxi9MojB0mN/h3/h7nahqPWR6ekEqCRqqORIFyfuT/rgLMZVQp1qVrmpGh1ctZTIMSDyJAH0xY9Ey+fzazUzVREJuysBsPwgG6yOREk2sCaLqxNYinQ/hqzwRVLgB9QECQNJBIJG9vGFynK230LlldnlnTqbVkVTe6kLpkQrE30mdiYG9o3xXdJ6Wqmq4qrVqEF/TSnaYNgWPG17GBbzGdSqVMpWag6tTg969rHQe4KCZkH635vMg5zqb1GGhSlKnOhVNxNrkQSYtbYE42WLl30OcW1+xW5PrdYLqgimGL3KkxFgtywgjaRExjWrnWqQ+tNUTJgsJO/bPG1rTiTTPCqIKmBAESF8ANEn6cmI3wxy2diablGogGZ7gDMABlhtiTJ2g2wl4KFuFPSGwBWgYqIxBkGPoYJ1SbmO7yJ4wAnTmdAQlMPcxNyWsIl4mJ87iBfGQyqt+IJcStreASLTwbC45BwZkUKgIz1HUSIJEqAYBGk7AA288xg4VB7HxXG7FXTMg6MUbcrdYmBqAmJ4m6++KfM5Ki1EEMB3QJgqSR9JNuSZscBGqEmFLmVuSSG7hcHTINp4n7YIzFAVNmNwChBI0lrce5xRjyJy67CcrLnp/wAJZDN0Qooim0X0SNW0n6yvN8TXxD8E5qlUVMrlw9M//I1YBf8AtYEggz7HHo3Q8zSoUadNNLoBBedRLD5pM2M8cYpEVWUm1xY4vnii+0AeCZ3L5haYosMkjgEALJAi8SFgNvu3+mInqS5g09T5jUAY0BmBAvB06QI32x6b/wAYH9M0yoAEmwED6wPbHl9XNh2A2G5vvx7cYDJFJ0Mj0LDRIE4yQ3w3p9MrVV1UqZdAYlY/UbjAuY6LXSNdJlBuCf8AbC2gh58L5oCVYiCCL+RcfXb9cM8t1FiQoO9ot9MT/T8jEFibGfAxTdGyKsJ9NiL3AmPoQZ3xM8fNjJfTQH6jVHNOSWmBDQw9gdP238Y7HJKgIdjO5KefeRqPzAg6rxItuxzuQCmaUgWUEAAsf6RYGJvveTxAHWhUDuUqQgUaVSysSbA6qh0yBcmT+EDCt3QmeS9dAGQoaNQ1E7FDE3G55JPvO2BOoV01uAAQDHPB/wBv1wV1N0p1B6dTUI1lgxMjgEwJmQLe3jCwVlAqFiTwCB+IEdpHH++OUZXZ0G++wbI5li4sCW8yLxGqxAnz98a5rqXYF8EzpkTO8ybbWgf6Y7ZPOCmfVpreCo8QRBN5lpJ/LBGQ6OzkPp00/wCsjsi83NrCecNclHbGKC7Aa+dJI32/K3H+Tiy6l8OU8nTDV3So7MD6KsQ0H8LNpMgcsNOx3thFU6coIIIJm9oA9xO4nyBjbK5hUreq/wDOJ1ArBINuWceeAOSJjASk2jpwfj3/AIGPVP4UIq0qC0vXLICcyapQgjTKiyyxBmTbVfCXLdQRSUp0wSpuz2mN51EaYibxihpZCrVoE5ZxU1gzTChVQHdZUStzaSJvffGGT+Es09RK3paC473YiFfZmAQkySC1hYtxjI5EvuLhONU3tev+z4elrp9PNIgk+uDqJsBEEKweINgOSIw3yHWMtRVEo13qKqAICggHUSFu07MF7o+W5nCut8LsP4g1MyWqEBUTT3VBqB1Fqhhbj3McC2OdByxpoaNYU01NrQ+pTsRYyocDiZa9/tg5yUo179/uJyJSXdhvXOqKujVlqWmoNOuk4YAkSSQRAgTfkDGtLLZdQFNNWIFyK9EfaACBG2/GD8r6VCadGgFvrqVagkE2v2oQQb/p9cZU+lUnGunSypUkkE6p3vPdvM4n+Ko6v3+Sfkl6kuM9qMIqqCq0zTqHVTNtwDIHcbTyBht0uplVBqlaSVaTART9SASIlV9TSLEzA87wcCZSplkSpRIFUEkk+lMNt2tvtbxY3vGFnp0hWX0w9IQwbWIPgCOQd9/bnGK27TBVvoe9ao5SqlOWWhBLAjUahnaABOjcyNr2E4U1M9T7KaVAx1wtWS1S4A0lY1JJldJF7YA6t0xkYA1JbTYFSum/zbkkGOffB3wX0isz1cyi0wACFLGP5m4Kx3ASPpexthvFcdsNRjxbbKzN06lHLE1lpoWGhdQMqP6tJsT4EiP0x06Hn1poXoVdLqiqwf1TriFXSrHuEQIE6dXAOEOf6SVAOdzGqRZCbgjczyok2HkYXV8+cu4SmBoXm5ZtRmTG/N7k4VVPjECMb0i8PUMnmiP47LIavarHQSwB2aQNWi/m18Q3xf8ABDUKpOXemaJAcH1EBQXE6TVZ2Xfu9jbDXovUMvTfU9CojNwI7h5AJEGOATtxhl0T4lyau6VJcT21GWZHhlBMEGQfJE8jDouce3f4Gwcof4ITp+UpU/UDaWmmygEz/NFgREBVBk92qwI3IwOaSM4KDR3AX2JBvAAsb/lOGnXUnOVXoIjU2ZWQoAFgix7bXJgzyMdcmqLqIDqx/pAYRaQS3yknxO1ucMd9lsVa5I+ZTNPTAVASRepUAgpFyAxtJ2A8xY4NbO06lRv5L6ouwp6wT4IUd3B/Tm+q5+ilNRVaovaIKEH37TBHucJHzpA/kVWGoiQ0BgbibSPG29pmMJ4uTehXFtuh96hd/TQzABYqom3IExIOoad+7c741rZhVSxAk6pNpM3teJj/AHwjy4hSDAqLLSGjXJ2UzGrb2sffHM7mKrhdYbVAZWKibcHTaCP88cl8yBv5kkeifAGbJoVqRiPnEeTFx9RH5Ys/hzq+qnBNxbHknwPmnpFle0iALf2xU/DeeIqOOJnHs4pXBWad/wDi5R15bWBJRwfztjzfKfBVd6Pr1F0JIvIk6jANztOPac1lVrKyuJXcjAhK1GFIjsWJHE4141J2zVKiSodCFGn6dEA2l9J38klv7xhJ1jKsHUkwGgAzMC3EWiZ3x6r1qvCaVgRaw+mPMPi6r2oByePcCw+4/PCP1MdUMxu9mGV6S6EMYcz2wwgna2oefbe2+KjIfC9UEVfUI8gKoK35IaT++FXwnV1P6ZH8u82JBbyYNu6bi4EbYosvmtNWoiSxWA1NyNUGSGV7ahHkzxHOE4lHth5LFXxRSMCdUr8k2I9yF+e/6YgqalyXeoFMn8I02I4+k2iL49h60NdAl6PeCNM7yINit/y3974846itAuWCekzbuySi+V0zYg21qL/0C8hniruLFqKmr8i8Npp1AFYEaSZA5mJItAHd9498JaUOSjaj3cCSQfxH3+vkYc9ZEafVAMEaVpkDWpAAKMBETqO3Ow41UBx6eXpO8fOlCmWIt8rOt2uNzhSetI5zaVGOR9NShqoGDbeoxCi+509xAA2EE/fFD09KGYrMErAU1GpgU9FdI3akL9qjcte5mxwT0+nVoOPWyWw7XZkKqYkGxG1/vfC6u71KrDN0mdYIpPTQhVYX9Odhq2km0Da+EOalr/0DJl5bX9/f90N62XR0LUsqfT9Mg1nD2APzrFiSBYkRBvyMBdJNJ2GXCU3Ya5qhdUgHcWBFjE2gj3xRUc5Xo00EKoRR6iFtKUjYr3IdTFQRMtpMWAmyZur0sulR09Ko7tAf1nr1n4GwBRYGq7Hf6YDnzjSO+I3Gqv8AIb0lKtOgVBzEIWLCmAReSQoMy2wje/i5Y0uoZqmAVpLUpkiFYjWsj5jsGNpgbSbmLSg6tnarigXqUaAsXOnX7CTztAAnBOYrVzTDLVqqoTUpcWbTJgiA3ygrBn9YxzjF16k+T5nbrY0zvd6hfLUgsS+uqiM0baQH0pckk6pEe+Mv4vKUaEhERyAW0hqo0sZgM1tPy3O4wko5I5ykErV6qFQzuvZcfhIIEMNpUmeffDCl0f0KLUg4as0imhcWAJCm42F2I98dKVKk/PV/+m6SabN2zbVFcU2NNCVp03SJqDlVSAFKbSYm14M4XDI5jhtY21FaYJi0kFzfzffE71JK2XXQ9OPTXUxNSQ5YnuT/AMtxhelesRKmsAZIADRczbsP74xfp5S6r+/v1M+A3tVRS/BGXzLtppovpq4Lu4svkAzcx+G+/GLSr07LMlVXRtKTKlG7j7EC5JIgg84nM9145RVo5Y6QTqY6QxOrkE8mIH08YdfDj5bSa1Os+oXra6jE+ZZSb3iLfTDZW+hUr7RPN8D5v+Hk6ajmDAbU6gTCajG3hffCul8S5umnphqYXUZMSxIteL8RxGKbMdWeu0CtVTWe1UqMpg3AOgiLWvv98KMyr/xId1imGE6k1FtpJJHmf298apVryap3pjNqtZ6CVcytHQ9lWowFpIBB0xJ353G2A850WjkEH8QDVqVpKhCQBGyiTAW4vef0wm+I6oTMim7GsEMEUwIWDde0XIn7bYH+IWRqxGUZnpKBoEnciWCq1xBMFRyDbGfCald6NjB3+zNK9eg6+mUb/wC0Gn4aQt4J3H0wPkulhmC1KpJMqIBNrQQT/wBR/wBOMYJ04uvZ/MqTIQDUY2IPhpItvttjv/EKZ9ZKi6YHzHUh2FiQJ+on98O5a0NT1SDMxkwaSsHUldWrU0apKzBaPE9xO/N5T0dS92ruMAjfaYH5gYdZzLioU9P1PTZpcEqQWKysEGROxnyYxlnMi+oa0Kd25I+Xb/NrcYyMq7H4clabEdOm9V3gEky30F/f3GDumv6VN9SEyFiQQBuZkXv/AGPjBWWyoTUV1EGGH0WSZ83i2NOodTqMugBFUfckXEi1rGb/AF5x0sluktGyyboXZnMLVanTAFNZi0csZ9zbzvPthtlqNOi+jU7tvPzSI50m+4MT4+mA8t0oMoOrSZGknZtttwWmbczgqrXo0rg6TJkAkzaxhgSp+mFzkm+MbAyV0jt0WqfUN57jfz+d/wA8V/Q1OonEh0mopdmR9IYHt59iYt+3FsXfQaE9w2x6v6eVxo4sMge37YQZR4rN9ScPsmO3COrSiscUmG+dqzOPP80EaztGipqQnzvBtETeTtfzi2zDbzjz34motTVjP/yEA+QQIwjPG0NxumH/AAzlK+tEClSNg1pGxImxHvtfF/rRWHppod1VXIuGieDJiZ5x5z0vO1MulMFg1IrKyNpvp8b355OKVes0iNalhUC2H4RpO0XG8Y8+UW1X9A8uNzqhlncw7BiWmGsNpA4jzzGI3rud11mWoojSfmHdEjY7gwwibe2Kj1qdS9J1PA0kGPosCftcfbEP13LmlmNdfsBeATebbkH2iQb724LNJaOjDiwr4Q6jSpsQmt3gr6LhCJIgwWEE2JntJleLGhyHw0uUcPTrijUrEKPSY2UwQCrltZlT3AqLyIgjEh0yu9WsYo0woVpdBKntKodTTpHtIO48jDnK5hkpBSgVQ6hpLFTwE0sbJEkLeDNoxLltN0xOTyrGnxJXqZWolClXrVWYg1XdEqmmrRA+TVcLAExtONOo9Vctoy5rbaSAVG439jY91jK+TgLKdPapU1xoEBQ9MREH+kqJEG4vEzi6yOYy+XW7TVeSSe52IuVUDuIHhRffc4lck3SRJLWqs80z3SFrqAprCqG1GmyPKtcn3Go7Em9sYdLytShVWoMvTowNRq1RVC07aSIqEy53idydhi++KPizTS/lK5ZiIYodYG5MMO3gT/1DEh1bp+YzoVSwA9QEgsFYgWLREQJ+58xjY5Zyko1p/uNjknxqS0whM6hArNXWvJhVXTTUN9G1MxsN/tE4H6OczNQ1crUrZd5hVlUJmNxJVdNudhe2H3QPg5aDiprQAbqBqBHgs8WHmOMUfVcxRFPXLMoP/wAZm8x+Ha+HShV2/f4Ak1F637/YjKmWyubAMDLPGhS9VqgGlgAujUGAmb+AbXnB3WPhw0qKpQf1KqkFg0AvP9JUgre9yZAwi+J+p0mqBfSVWXSWZ2LM0WCyTGxuf3wLlfiCqGCrqAIHpqoBKGTB51CT7wbcYnccuuL/AAHKGRpcP4YNV6XVVjUzCVWIHapDMik8sXmQOAsm2+G2Up5hkDCnRI4PpqZi34r8c4D6l1XNqT/FPWRZGntNMMOYhVB258i2B8r1HOFQaQIQ/L+K07zImd5jFii32a4PzRm3U6WXqIpBfTAZSLgNGphMS0G1+MB5nNeqWOXpOCRBRFZm0z+Mr5iYNv7vM98GkAKawMk97AtH1PH54emoctl0o0suGIA1ESJPJYmCSf8AANsA8sWnx20TOce12RHQMg9Rtat6dyQTIIgb2tF9/bDLOZ+sSAaqMh7QxBBvPcZHdEczNsMup5vLDL1KK04rmmS41f8ALtr0iCNQk8yY3wxzvXMvTp0Q6TW0KjLE6bQYsdU2IHgj6YVudt/wA25b/oDdN/4fipTLVNaPYqS1yPNgIHIm/mMQ2b6ggJKAsAdJDBQSfJMHHonRet0csH7M2zNAVD6mmDyqt2r+kRYeZfrPS6NWrVrLm6FMOxdqUM83ngSb8xvODxJN09jccvmqXQgpZ5TeDTneWsfpqBjYeRjmarmq/qVWV45Ee0B+Sv2OB8xT9UstNqdrgAmD7gsAfsQMYJlWX5ioj8/03xRwS30x9eemOul51mKhFWLT28TMgC02H5DBVfqVRDoDSwJ1E92nwLqARuBPk/UKqu7MHiqVut1+ojzA28WjHTI1itwTwIAI38m424IwDjezK8hOWq1QTpIUMQTIABibX2HdsPacczFSo1RWcKWAi9tFvxA2iJiDj7nOoFmKgEdsEFe1b6okQTwP9MCVetGwKysbG8cx7wcYoye6OXJu6H75n0VDMw0xcaZAb259pHEeMIOo1PVqj1B6Qj5oPcP6r/tginm6q0zUqE6GsgIkC28Hj/TCTMZh3PczETIBNhPgcY3Bhabf9RkIbvyPvhymFrQDIBImN/tj1L4VUtScbnVb/THmPwfQ1P8AY/5+uPafgrpxWncX3x7GFUgpDPK0LRgPqOShtWKfL5SN8dc7QBBwzkroE886itrffEl8Z0py6MeTP9ucW/XMoUJxL/ENENQBOy2YATbzvgJrTCTIjplVirANqpJJIFpjaxNmJIFp/Q4Py3VKNITmcq41XUgCPr2sD7c4ns7mmplkQwvI8n+r6/7YV1KrNuSQP0/0xC47H8tFWes5MvCJm4MAAOhv4AKT+uHD9WZL0lWrTt3Co7kSCA0FURrkyknxIgEefCi0BgCBNj/vjN/HjA8UzVNrZ6XRrVKZKvQpaGYfzKRAQSLP3kgmfwkhvbBNBKZqay4rVgCNGiwJFzGsAAexM/vAdEzmlgFNRnY6Qg2ctAAN7ja3Nhj3v4S6OaFJfUVPUju03I/6dQAkD/15xHnqDr1Jv1GZJbRBVcrmDHp5euQQGYmVF41JFSxBJuATN94w96MigPUqotIho75Q2ENqEyfGmItPOGPxp8V08uqikqV3LlGppUErAEm0nUNS298T+XzVWvBfLum99O4ntJ1kNIEC1rYmyJuPov6iJZJvH1X79Moc18UZdabN6wPdpJI3PmCNr7n98Kst1da9RJGlVaKjL3He24FmA4E+2MMstWjVupIiyqisIMwTqIB99o/XHwZgq7n0QgJBACaZ3nVeAbA2PO+NpJa/kFrHCOtv7jhUFMu9RqlTLi4SCzBYuWv3ieANsSvUaxoNFGsWRx6qLdYTVYgAEqRfgXAtiky3Uh8tRfS1qYNRlSbcAmf/AFfjGfWfhykVaFQCJLc25nBKN7vr8nY8nHc0SGWKKKdV0UljYmWjmD95MeQTigy+bp5epT1UKYFViFqIYJggHtIJsT5jCvKdKSi9NKbM51lyqxBCqQbgdtm+/wCx6dSFUt6aPoQArYAgeDN/zvgE3zVdGtqTTfX8fYZdd6llq9PS6M5pkGdAZVJBG4MA/wC2I3PZirrPppXKW0kMIIji+GaVVrB4pnT+KDH0mI8b8YBKZTlwD4arB/InDIyfL1MxutU2/sH1uvNXJ/h/mVpAJPbPIm3tgLrPWs5SSqtWtDFVIFrK0jtIFzIIMzcYxy+So5Vkap6lMx8hJ7jwbXI+pi2HHVOmv1FQ6qikJoAg+Z1NbtIPjycURxwgnbFqMI/Yhuj5yijzXRnXUDINx/1X+bzE32xQ9Q+JqdZmFGgAR/8AKzDuiwOnQCLbD2xsvwlTpIo1F6lmdhtpmyAEx5N5NhYA4cP0TJUygarRQuRCgiQTsWiYA98BPJCXRs5wfSsnMz8Vu1D0SvcAVqOvzOSbRAkW8RN+MdenjI1EiqfTa47gQynz2+fffGPxDkvRq/y0ZgGklkZB9BIkg76jEztEYVtQaozErYgKJ4AMj6m36nBwgtPofjxckmtAebT+HZlBV/6WEEEXhuSrcFbRGOxzFL0zJOo8fMROwBsIEYIo5A7Qs+6g/wBsap0vmb+wj9hhzcfJS8SfYnpRHEnab39xhh0esEaSdLf1TEAyP/Q5uMGUumkcnxg2jkbQWaN4+mBlNNUbLHaoHzOVLo1Sm6PAG4K6mmTEi5AgRMWwqp0nFZbzBn/U/b+2KUZWmABomCSJ4J3P6DBC5MLeFE+Cv9sBGSjabMx42hJ1Wm1Q2qF54AF/sNzc4d5L/hXm3vNEKRY6/wDbGgqMny1Kg/7TH7HGtHq1UGz1D9f8OKMOTHBU9hfDaVIsPg7/AIZVKTaqtWmPoZx6fkemKixqBx41kfiDMcOx+uHeU+I8xyScULMmqToFwZ6ytIAYHzOWm0489T4kzEfNjb//AEdbzjout2ZRS57oPqDfEf1v4LremVp3N8Gr8W1hyMfW+LKp5X74Z8X1O4Hj3xf8K1k/mei0xDwpiR+IW8Yl8uGpGWphgTBHMC+n2BteOPrj9AV/iF3EEAg8b4SZqhQf5svRb/wAP7ThWRRl0wktUzyIWV9faXg0xaBvqBXgbRFxGFT0WmOceuZvo1Bk9IUSFJ1ALNj5E7YUv8IIDu6DyQP9LmDxfCPli+ztLsjvhyq1CqKygF0B0SJAJEaiOYBP3jDXPfEWcrAJUzFRl/pB0hvYhANX3w+f4YpKpCtUdtwXOkD/AMRc29xjpSy2YpCKbKp/6UUfmQt/vjmov5q2C4p7S3+4k6N8P5nMMnp0xlxSbWHcMJbt2BBn5AbCLn6Y9NpfEQDelmQvrhNY9OdNSxtBupJH0uMTPTM1mKYcVX+Y/MI1DawEWm9z7RgmvkTpc03K6xYu2ok2OoSNQ7rwDA+m02WaumibJ80uMjtQzWY1PUrUyTvKnYX2H2Ft74OyXWmqJMUo7h/M+SwJBMmbaDa3GF9ZKvpxrZ2awgAKv1IElva2MMllabqKFcar6hJIkwRNuYJGF5OKVLR05412t/sZUs5Ud2r+jQCqYKvtpF9RMTEwTbYHFFmc7SrIy1NNSpS7glIsVqDbSQonSJufbxbHTL5LL6QVosyN2yhc2JAgwdgQPYRxjOl06kGIp1YLrAVpHbHy3+abm8/TEs6j0/wA547bpk71DUMwGyeouysWqFGCkGBpbVFpUwfYRsMdKPRKiEO1NydA9RkqAl29wwED97jFT6lFaq0dfcbE8atok8W/tfgvPZMiVIvwd+Nvyn8sNx/TXgD/AOh1VaEec6mtOmF0szMnyBoVD7gXIifHjCc0C/c7Esdyd/8AIx967Tf1LCdIixE+dvuPywlq9TrgmFb/AOpP7DFn6PHjxxvyyvDx4poOpdeq5qsalOjTeoDIqVWNoEA3jYbbfTDc/EdVC5qguugjQhO/NwDM+ZEYlHzaZclGpT4gwP0ub84K6FWpVXIqp6aMtngwCoPmSZ3/APcYGceSJpRtWlodZDrVNi3qJmCDLA06ZEkmygi5sYmOMa5PqNSgdXb/ADZKU6kgBhsxJG45Fpwr6d1um2aFJQ607JTFu8z8xkwCSfygYb/E3UKbGpk6qPTqIRLET6bFQyt2mYIN44J3xjwwa9DXjvbQLQ6jrap6lcOx+eULLMxFoHER4x0rdJZgGpqCI+Ub/WDNvucBdKqJTVwhJckAVChIAJiY1AG14I/XH2h1OqRoSIn5psL3N9h5DG+NuCVV+R+PJw0l/sHzCmAFtLAWMGPIm/8AnGDRlyvv7zzyLT5wtqVRqKHVUYTDKIUkjiZ++4MwPONen5nUs/5sJJHGAnForTvY0pof6JxvqH9IGPuUX1IVeSLgEx9b2W8yAdhjGqNJIkGOfOFcvBsZpughmXxH2x3SlT3Jk4CmcfVGOCCmFPgY0RVAtAwGbf4McVh/Tg42dY5oHwRg2ix+uFOVgYaZavHiMVwAYWtTjT+uMqlX2bGpzq+DjGrmQeMM/JgLmapPGAajmbGPocF1KoJ0k3PHP64GOUYkxxxzhcrCVHU1WsSI98brm5EW+2BRR4LXxvTyY31R9p/bC1IIJyXqM4VL883+scY26mqsTrdQwse7mwsBbjb9cdKFZ1plKcSSdTcnwBOwj++Mavq009QhHAtAPcJ9vz2OJpNRab7JZXF2/fv36HfNZYhBoD6fIFj7gxGBsrkarMoIbS34iG233iOP2wdkc+pGmpXhjDaF1MVN7i35jDBepL6hQaYEaYcTE3mR2+cb8eSXQqWeaj0K6nRXaSy9ovuJ+5LAR9L4xfNsabIGimAQAYM8ljp/LGnUeoMarhKqin8sg7QLwPxEze8e1pwBSzFMyiQi7STJv+IyPHHGAjkt9aJFa7QDl3UerUYsCV1aRNiBpkDUImBJ9vtgZ/iF5DLpmNOllkksQAdRXjxySL2w6zfSdS1mDf8AKCmBI9QxMBh+E3XkTe8YI6T8OQ4zFdApHyoDYTG5AH02wcJN+BilS+b36HMzntdILHaRJEW83G2/GFvX+qMcvregzhBp9QyACTY2F94iQNsP+o9MRh2F6bKdUpH5eIx86nQZ0CK5dAoN7mDsCTcm3OF5FHUmrYm4abQo+GKoqmYZWBCxcxaR3ARMfS4OKDrfVfRoNTWrQWoO7TVqL3DkQxkEjbbEnnqrUKsUoXUg1qqqAABAFxPkxPM84HyFQGrrupmdQPzezHweRgo0raDisd8vBplOoLUGsEqZ7hOx8Xn3x27DeV/+3+xwRmkp900EmRNcAASZusRoHuBG/sS86ZSppSVWqNqAvEkXM7hB58fnvhc5LszJFdo8yzHUcwCwcAfTa1tp54wf01WqrpcmIJvMWH0gX5OCP4SmlI1GdpJGmnoAm1m7uMJqC+mzuTpPAmNUnYGLxyMXQkmOTUtGr5NFL6wX0yAqsBB97Ekewj6jG7Zmq1RsxVLvUdQSWHz6QAJHMAAWjBmTZ3pgodW4I30qL87gcePGNG6jRpZaoyhGeQsMO6TM/YAccnjBTi06Qcm/pQlzfWEY0zSQoUOphAKseQfaBa3Jxpl+pQogaC2r1CqwjAk/yyuxix1CIn2nCetnizsQqr7Da3+E+84wOdfYsfz/ALYZGC7Hxgkh5meqgTpAEn74+0evW0sqkeTv++J9TJgCMFrQIAN8M2MVFDl+oJKsNQJkD29x+g+2DP4gHY4kqr6Pc7fTG2TztS8H84P9pwmWGL6NWiq9Y4+isca9KRKlISYqjf8ApPuLSDjOqNJi2FPE0FyOwbGtNcYJUwfkqOsidsFGBlmmXB+uCc7nFoUy7qfAGxJ8DBB6h6I0oo+pE/riY66rVTrbUT4mY9hwMP40jLGXw98QmpVZagBkdg8Hx7mP2w5zxZlggA7RAE/SLke3tjz7IZWpPaG5232+uKnomZdqJNQamJbc3AEA78yIn3wWN6o2SMllqksWdv6T/ckQF9/9sOOnZVVjW/qVXM3EIv0AG1hE32xF9ZqsAEMaReBJkC8meB++GPR86zppRyzD8IuSOTO44EY2Mt0dVqyo6oun+YBOkfKDpBPubwP9MKMp8SRK1KRn2sffecYozagoLAn8PjAXU6bBl1GQZgHeJjx4vvgpKzOh/R6jRczpKmAT3Ai52EC94/P2v2zPV6dOwQsADEHduJMbfTxiYoZGq2ptIgGJLKNXspeJ/wDH6Y+plajELIk8AzzEdo9v12xLJRbMkoy8jKn1VCwU09B3m07eBcmYsf8AbBFbqKouoMySBOlQHItIDbqsgjicB5bpjI5YOAQpgspIB2gxsYttgd2erUR9ShpgBgApiL6Z2P1/LEeSG6snyYbVXpDKkAVAUFXcd9guo7iAW7jBuPIwG2RaQaDUww7nZ4IQeymdR+xH74KyyLl1NWJdtSlybauI4P8AtzjpmXYA9lP+pjPzGLyVuoiR/ecA4xXzLsmcEnfYyo13cmahNYCRMK5Ezr/KTYECZjGtD4sqlRSOgjv06h3s26LKjttqHN1W4nChAUYtSJRnEmIaZAsZ3Fh7GMPKvQsuO+prnSNbaxAOmbfvA8jBY4yXX+A+HgPpdXKAOoBJQroaIJkEjaRMRck3GFf/AOefL6xVpDS5A9QGoEQtOoBqgIMHhCwEWAAwSmWpUlApmsJie4EATddiLEyfqAJnHSn0zKtT9MrUE241CSJ2BJG+39J8YJY51t/5MjirTJVPUeozIwbVo7nIOslRM+9jaOMUmQ6CrqH1aapsUUSu09pnwecdsl0PLAAqtWDBB1byoa0i8D9sHZnp9KmRoNUGNlcdsnTxeSZt7HATwueo6Anj5vqgOrk9ECoV3gjcgkGAQJETztviebPOTK1GZTsdBuODamRtimzfT1SgaoqVBB3Ylo4Mxce448YCpZcEAsiEkb+lSP0u15jCHFY3xmZGsaqS9/wD9OFOurGUqMwsQB2mAAI3W3nnfe3mroFrGm8kK7Am5JIt/YY65rqBZ9aD0ybEISBxHM8foMZK5ZtTGSbknHsRjWkWY8biMcplqiuKlOxXkmL8+9sCvlSoJLA+R5wR/FQN8DM84NuKVDVEGKMDI/THepRmCN+cE01xsq4BSCF60DglKBNjgoU8E0qeN5HGNDIg74OpZZRxjSkmNNOBcmcb0njk/bH1mk74zRMbIL8Yzs43oUTudsHU60bfpgIVf/WPms4JOjgskscd62W1DcjGFN/Nvvgj1J5OGJo4WZTK6GYycdunu1JCqsbkk7HczN8b18CEY1OjjPPKam5uAfwj/Djr0Lpah9YA1Da8D7400gGZx9y2Y0tb3H54G1dhoIrFjVVzKkAiBH6+cJ+qZI1KwbW30j5b8X++HtYBhqa02FrmLfYe+MaeQkyJ/wA+mOczeI4+G+n5hKFQKa1TVyzxSRT4DkAvz7fWca50FDoJUhLsJgqJs1ot8228c4mayMMxSq1P5gRgQhMjtuFA8Exh7TrsENXMsq1ajiCi/Kojt3AgcTNzsdseXmi4ytMgzKWOV32DdYX00FRahqU2AkallQfllbW/6iYt9IEyFEsZCF1C20lQQCB3NMAT/a2H1fMnMLVctTApwWAQggH8PcTMwZFhDAe+FvVVptTBptpZgFen+JtNg4IjUYA4g/fARlJvYMJyevwfKy6Uei1P1IhgVv6cSDOkECxgX+uA+ndWBYgkKQAqkQdRJiG2AERNrxgksYKU20PAWWkGNJ7Tyd5uPEYR5/L+kopsIteAImdxBmf85waSmqZygmq8+hXdMrGlUYMlM1HU9xcQt+FiY1H+2KqsQiy8QEAZiNgBvP6/bHmfRM0a3YdUkH+ZEFgDF/PO3vbHpWVzyErTWmx0oCxkQsbT9TsN7GNscv1Hw5OEvAPxnGfGRnl+o0dC61PkggXgmebkaZ/LBFTNUhqBTTBkRHni++8j2bxhf1DOtTFStUy6lZ1EhgSJMXBUcECfrhdlfihX16KDEJABsAd9rbbj7++HxyxkrTGfEh2MqFdVbSq3YNNhHawUfnMT7GYwbQr06lQllvG+kcQDHJHuLfpiMr/GiK7KaB7ZtK8wStx5/bHan8b0gx/klSUm5AJYQAsxc3GD7doPUtosetZemaBEjTIhbAEgEx4A2k++JOpSUmW9Ek7k1VJP3Jwu6t8VtWovTFJlcGe6+3iN/wDTCb+OqLYegQP6hpPvIFWBfE+bHyl2BPFKyNxomPuOY9IqNBjsMfccwuRoRRwWuOY5gfJx2TBVLHMcwRxumNBjmOYE41GO9IY5jmNODqCidhj7U3OOY5g/BxhR3OCGG+OY5g10YC1DjDHMcwLNR2qbYDJvjmOYyQyIdRNsbUdx9RjmOYBhHQHvX/uH74Le71SbnSbnHMcxF+p7Jc//ACR9+oN0Jjrf3An376eCuvdtOgVsQ7QRaJYTjmOYVP8A5F+Sd/V+WbdTH8gHmXvz/wAuf3wDRoKUBKrOoXgf045jmDxeDsH1r8mXRT3VDz6aX5/5Yw9/4YVWarX1MWkiZMzcjn2xzHMA180/vEmn9WT7oq/jBB6biBGtbf8AmMRvw982a9laPaGMR4jHMcwyH1P7mw+l/cgqW5+p/fHf4gMVFAsDTU/fRvjmOYfD60U4PrCMlSETAm3HuMbFAQpIBJVSSRuSovjmOYGPbKv0e5SP/9k=',
}

let ITEM_WIDTH = Dimensions.get('window').width;


const PostCardPreview = ({ navigation, route }) => {
    let data = route.params;
    const rating = data;
    

    const [editedrating, setRating] = useState('');
    const [editComment, setComment] = useState('');
    const getData = () => {
        try {
            AsyncStorage.getItem('newRating')
                .then(value => {
                    if (value != null) {
                        setRating(value);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    const test = getData();
    console.log("Hello?"+test);


    const [text, setText] = useState('');

    //to share on social media
    const onShare = async () => {
        try {
            const result = await Share.share({
                title: '',
                message: 'React Native | A framework for building native apps using React',

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const shareData = async () => {

        try {
            const result = await navigator.share({
                title: 'Teste',
                text: 'Isto é um teste',
                url: 'https://developer.mozilla.org'

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }



    return (
        <View>

            <ScrollView scrollEventThrottle={16}/*Scrollview da página toda */>
                <ScrollView /*Scroll view Horizontal */
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textShadowColor: 'rgba(0, 0, 0, 1)' }}>
                            {location}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingHorizontal: 20 }}>
                            Coordinates: {latitude} , {longitude}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingHorizontal: 20 }}>
                            Sea State: {seaState}m
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 20, paddingHorizontal: 20 }}>
                            Your Gallery:
                        </Text>
                        <View style={{ height: 130, marginTop: 8 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}

                            >
                                <Category imageUri={require('../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg')}
                                    name="" /*se quisermos adicionar titulo às imagens */
                                />
                                <Category imageUri={require('../../assets/whale.jpg')}
                                    name=""
                                />
                                <Category imageUri={require('../../assets/586396-dophin-animals.jpg')}
                                    name=""
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', textShadowColor: 'rgba(0, 0, 0, 1)' }}>
                                {name} | {boatName}
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>
                                {date} at {time}

                            </Text>
                            { editedrating != undefined ? <Rating style={{ marginTop: 10 }}
                                readonly
                                showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                type="star"
                                startingValue={editedrating}
                                imageSize={22}
                            ></Rating> : <Rating style={{ marginTop: 10 }}
                                readonly
                                showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                type="star"
                                startingValue={3}
                                imageSize={22}
                            ></Rating>}

                            <View style={styles.textBoxSocial}>
                                <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>
                                    Share on social:
                                    <TouchableOpacity onPress={() => SelectPicture()}>
                                        <AntDesign name="facebook-square" size={30} color="#4267B2" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => SelectPicture()}>
                                        <AntDesign name="instagram" size={30} color="black" />
                                    </TouchableOpacity>

                                </Text>
                            </View>
                            <View style={{ width: width - 40, height: 300, marginTop: 20, backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5 }}>
                                    Your Featured Photo:
                                </Text>
                                <Image

                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../../assets/Trips/imsunset.jpg')}
                                />
                                <Text style={styles.textComment} /*Comentário da viagem */ >
                                    {comment}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView backgroundColor="white">
                    <View style={styles.textBoxPostCard} >
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 8 }}>Edit PostCard
                            <TouchableOpacity onPress={() => navigation.navigate("EditCard")}>
                                <FontAwesome name="edit" size={30} color="blue" />
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>

                <View backgroundColor="white">
                    <Text style={styles.textTitles}>
                        Sighted Species
                    </Text>

                    <ScrollView style={styles.textBoxSpecies}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            {sightedSpecies.map((specie, key) => {
                                return <Text style={styles.sightedSpecies} key={key}>{specie.SpeciesName}
                                    <Text style={styles.text}> {"\n\n"} First Seen at: {specie.Sighted}</Text>
                                    <Text style={styles.text}> {"\n"} Behaviours: {specie.Behaviours}</Text>
                                    {/* { specie.Behaviours.map((behaviour, key1) => {
                                             <Text style={styles.text} key={key1}>{behaviour}</Text>
                                        })} */}
                                    <Text style={styles.text}> {"\n"} Reactions to boat: {specie.ReactionsToBoat}</Text>
                                </Text>
                            })}
                        </View>
                    </ScrollView>

                    <Text style={styles.textTitles}>
                        Description
                    </Text>

                    <Text style={styles.textTitles}>
                        Route : {routetrip}
                    </Text>
                    <Image  /*Insert route image*/ />
                </View>
            </ScrollView>
        </View>
    );
}

export default PostCardPreview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    textTitles: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 20,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        marginTop: 20
    }, image: {
        flex: 1,
        width: ITEM_WIDTH / 20,
        height: ITEM_WIDTH / 20,
        backgroundColor: 'white',
        borderRadius: 2
    },
    imageBackground: {
        flex: 1
    },
    text: {
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'black'
    },
    textComment: {
        paddingHorizontal: 0,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'black'
    },

    sightedSpecies: {
        paddingHorizontal: 25,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '700',
        marginTop: 10,
        color: 'rgba(23,108,255,1)'
    },
    textBoxSocial: {
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 60,
        width: ITEM_WIDTH - ITEM_WIDTH / 8,
        height: 90,
        maxHeight: 55,
        alignSelf: 'flex-start',
        marginHorizontal: 0
    },
    textBoxPostCard: {
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        marginTop: 10,
        borderRadius: 15,
        paddingHorizontal: 80,
        width: ITEM_WIDTH - ITEM_WIDTH / 8,
        height: 55,
        alignSelf: 'flex-start'
    },
    textBoxSpecies: {
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 0,
        paddingVertical: 5,
        width: ITEM_WIDTH - ITEM_WIDTH / 8,
        height: 530,
        alignSelf: 'flex-start'

    }
})