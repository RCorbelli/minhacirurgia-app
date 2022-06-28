import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';
import image1 from '../../images/hq/Asset11.png';
import image2 from '../../images/hq/Asset22.png';
import image3 from '../../images/hq/Asset33.png';
import image4 from '../../images/hq/Asset44.png';
import image5 from '../../images/hq/Asset55.png';
import image6 from '../../images/hq/Asset66.png';
import image7 from '../../images/hq/Asset77.png';
import image8 from '../../images/hq/Asset88.png';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
import Swiper from 'react-native-swiper';

const windowWidth = Dimensions.get('window').width;
export function PdfRead({navigation}) {
    const {user} = useAuth();
    useEffect(() => {
        postScreenAccess(20, user.id)
    }, []);
    return (
            <Swiper showsButtons style={{justifyContent: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image1.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image1}
                            source={image1}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image2.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image2}
                            source={image2}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image3.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image3}
                            source={image3}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image4.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image4}
                            source={image4}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image5.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image5}
                            source={image5}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image6.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image6}
                            source={image6}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image7.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image7}
                            source={image7}/>
                    </ImageZoom>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ImageZoom 
                            cropWidth={windowWidth}
                            cropHeight={"100%"}
                            imageHeight={styles.image8.height}
                            imageWidth={windowWidth}
                            >
                        <Image style={styles.image8}
                            source={image8}/>
                    </ImageZoom>
                </View>
            </Swiper>
      )
}

const styles = StyleSheet.create({
    image1: {
        width: '100%',
        height: windowWidth < 400 ? 260 : 300
    },
    image2: {
        width: '100%',
        height: windowWidth < 400 ? 260 : 290
    },
    image3: {
        width: '100%',
        height: windowWidth < 400 ? 260 : 290
    },
    image4: {
        width: '100%',
        height: windowWidth < 400 ? 260 : 300
    },
    image5: {
        width: '100%',
        height: windowWidth < 400 ? 265 : 300
    },
    image6: {
        width: '100%',
        height: windowWidth < 400 ? 230 : 280
    },
    image7: {
        width: '100%',
        height: windowWidth < 400 ? 230 : 270
    },
    image8: {
        width: '100%',
        height: windowWidth < 400 ? 250 : 280
    }

});