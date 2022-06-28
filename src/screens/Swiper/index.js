import React, {useState, useEffect} from 'react';
import {View, Text, AppRegistry, Image, Modal, TouchableOpacity, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
export function SwiperImage({navigation, route}){
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]); 
  const [headerTitle, setHeaderTitle] = useState("");
  useEffect(() => {
    setImages(route.params.images);
    setHeaderTitle(route.params.headerTitle);
  }, [])
  return(
    <>
    <Header title={headerTitle} color={theme.colors.backgroud} navigation={navigation} />
    <Swiper style={styles.wrapper} showsButtons={true}>
        {images.length > 0 && images.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => { setImage(item.image); setIsOpen(true)}} style={styles.slide1}>
          <Image style={styles.img} source={item.image} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        ))}
      </Swiper>
      <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => {
              setIsOpen(!isOpen);
            }}
          >
        {image && 
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.imgModal} source={image} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(!isOpen)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
        }
      </Modal>
      </>
  )
}