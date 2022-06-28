import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader:{
    color: theme.colors.blank,
    fontSize: '1.2rem',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold'
  },
  icon:{
    width: '4rem',
    height: '4rem',
  },
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    // borderBottomEndRadius: '4rem',
    // borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingTop: '1rem',
  },
  buttonSpeech:{
    alignSelf: 'flex-end',
  },
  contentBlue:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    // borderBottomEndRadius: '4rem',
    // borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingTop: '1rem',
  },
  contentModal:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    // borderBottomEndRadius: '4rem',
    // borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingTop: '1rem',
  },
  centeredview:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2rem',
  },
  imgBalaoModal:{
    width: '20rem',
    height: '12rem',
    paddingHorizontal: '1.4rem',
    top: '-6rem'
  },
  imgModal:{
    width: '5rem',
    height: '9rem',
    left: '6rem',
    top: '-2rem',
  },
  imgBalao2Modal:{
    position: 'absolute',
    width: '11.5rem',
    height: '11.5rem',
    justifyContent: 'center',
    top: '15rem',
    left: '2rem',
    paddingHorizontal: '1.6rem'
  },
  imgBalao:{
    width: '20rem',
    height: '12rem',
    paddingHorizontal: '1.4rem'
  },
  imgBalao2:{
    position: 'absolute',
    width: '11.5rem',
    height: '11.5rem',
    justifyContent: 'center',
    top: '15rem',
    left: '1rem',
    paddingHorizontal: '1.6rem'
  },
  img:{
    width: '5rem',
    height: '9rem',
    left: '6rem',
    top: '1.2rem',
  },
  text2:{
    color: theme.colors.backgroud,
    textAlign: 'left',
  },
  text:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '2rem',
  },
  imgBalaoRight:{
    width: '12.2rem',
    height: '9.7rem',
    left: '-4.5rem',
    top: '-1rem',
    paddingRight: '1.2rem',
  },
  imgBalaoLeft:{
    width: '15rem',
    height: '11.5rem',
    left: '2rem',
    paddingHorizontal: '1.7rem',
    top: '-6.5rem'
  },
  text1SecondScreen:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.3rem',
    marginLeft: '1rem'
  },
  text2SecondScreen:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '2rem'
  },
  imgScreen2:{
    width: '4rem',
    height: '8rem',
    left: '-6rem',
    top: '-12rem',
  },
  
  imgInvertida:{
    width: '6rem',
    height: '12rem',
    left: '-8rem',
    top: '-19rem',
  },
  exercicio:{
    width: '4rem',
    height: '6rem',
    top: '-9rem',
    left: '7rem'
  },
  alimento:{
    width: '4rem',
    height: '4rem',
    top: '-7rem',
    left: '6rem'
  },
  imgBebida:{
    width: '4rem',
    height: '4rem',
    top: '-2rem',
    left: '-7rem'
  },
  imgCigarro:{
    width: '4rem',
    height: '2.7rem',
    top: '-0.9rem',
    left: '-7rem'
  },
  imgMaconha:{
    width: '4rem',
    height: '4rem',
    top: '0.9rem',
    left: '-7rem'
  },
  imgAntesBalaoScreen2:{
    width: '20rem',
    height: '12rem',
    paddingHorizontal: '1.4rem',
    transform: [
      { rotateZ: "-3deg" }
    ]
  },
  textAntesScreen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '2rem',
    transform: [
      { rotateZ: "3deg" }
    ]
  },
  imgAntesScreen2:{
    width: '5rem',
    height: '9rem',
    left: '6rem',
    top: '-10rem',
  },
  groupImgRemedio:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: '-8rem'
  },
  imgRemedio:{
    width: '4rem',
    height: '2.5rem',
  },
  imgSeringa:{
    width: '4rem',
    height: '4rem',
  },
  imgAntesBalao1Screen3:{
    width: '12rem',
    height: '12rem',
    justifyContent: 'center',
    top: '0rem',
    left: '-3rem',
    paddingHorizontal: '1.6rem'
  },
  imgAntesBalao2Screen3:{
    width: '19rem',
    height: '9rem',
    justifyContent: 'center',
    top: '0rem',
    left: '-2rem',
    paddingHorizontal: '2.7rem',
  },
  text2AntesScreen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '0.2rem'
  },
  imgAntesScreen3:{
    width: '5rem',
    height: '9rem',
    left: '7rem',
    top: '-18rem',
  },
  balaoScreen5:{
    width: '16.5rem',
    height: '12.5rem',
    justifyContent: 'center',
    top: '0rem',
    left: '-1rem',
    transform: [
      { rotateZ: "-7deg" }
    ]
  },
  cardScreen5:{
    width: '12rem',
    height: '12rem',
    justifyContent: 'center',
    top: '-7rem',
    left: '3rem',
    borderRadius: '0.3rem',
    paddingHorizontal: '0.3rem',
    backgroundColor: theme.colors.backgroud
  },
  text1Screen5:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    paddingHorizontal: '2rem',
    transform: [
      { rotateZ: "7deg" }
    ]
  },
  text2Screen5:{
    color: theme.colors.blank,
    textAlign: 'center',
  },
  imgScreen5:{
    width: '4rem',
    height: '9rem',
    left: '-7rem',
    top: '2rem'
  },
  balaoScreen6:{
    width: '10.5rem',
    height: '7rem',
    justifyContent: 'center',
    top: '0rem',
    left: '3rem',
  },
  cardScreen6:{
    width: '13rem',
    height: '14rem',
    justifyContent: 'center',
    top: '-9rem',
    left: '-3.5rem',
    borderRadius: '1rem',
    backgroundColor: theme.colors.backgroud,
    paddingHorizontal: '1rem'
  },
  text1Screen6:{
    color: theme.colors.blank,
    textAlign: 'center',
  },
  text2Screen6:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen6:{
    width: '5rem',
    height: '9rem',
    left: '7rem',
    top: '1rem'
  },
  groupImgPijama:{
    flexDirection: 'row',
    width: '100%',
    top: '-8rem',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imgXampu:{
    width: '4rem',
    height: '3.2rem',
  },
  imgPijama:{
    width: '4rem',
    height: '4rem',
  },
  imgBalao1Screen7:{
    width: '12.5rem',
    height: '10rem',
    justifyContent: 'center',
    top: '-3rem',
    left: '-4rem',
    paddingHorizontal: '1.6rem'
  },
  imgBalao2Screen7:{
    width: '14rem',
    height: '10.5rem',
    justifyContent: 'center',
    top: '-3rem',
    left: '2rem',
    paddingHorizontal: '1.6rem'
  },
  imgScreen7:{
    width: '4rem',
    height: '9rem',
    top: '-12rem',
    left: '-8rem',
  },
  text1Screen7:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  cardScreen7:{
    width: '15rem',
    backgroundColor: theme.colors.line,
    top: '-1.2rem',
    left: '3rem',
    borderRadius: '0.3rem',
    paddingVertical: '1rem'
  },
  textCardScreen7:{
    fontWeight: 'bold',
    color: theme.colors.blank,
    textAlign: 'center',
  },
  imgBalao1Screen8:{
    width: '20rem',
    height: '11.5rem',
    paddingHorizontal: '1.4rem',
    transform:[
      {
        rotateZ: '-3deg'
      }
    ]
  },
  imgBalao2Screen8:{
    width: '11rem',
    height: '11rem',
    justifyContent: 'center',
    left: '-4rem',
    top: '-1rem',
    paddingHorizontal: '1.1rem'
  },
  text1Screen8:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.6rem',
    transform:[
      {
        rotateZ: '3deg'
      }
    ]
  },
  text2Screen8:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '0.4rem'
  },
  imgScreen8:{
    width: '5rem',
    height: '9rem',
    top: '-10rem',
    left: '6rem',
  },
  banheira:{
    width: '4rem',
    height: '4rem',
    top: '-9rem',
    left: '-7rem',
  },
  imgBalao1Screen9:{
    width: '13.5rem',
    height: '10.7rem',
    justifyContent: 'center',
    top: '-2rem',
    left: '-4rem',
    paddingHorizontal: '1.6rem'
  },
  imgBalao2Screen9:{
    width: '16rem',
    height: '12rem',
    justifyContent: 'center',
    top: '-6rem',
    left: '2rem',
    paddingHorizontal: '1.5rem'
  },
  text1Screen9:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  text2Screen9:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '-0.3rem'
  },
  imgScreen9:{
    width: '4rem',
    height: '10rem',
    left: '-7rem',
    top: '-11rem'
  },
  escova:{
    width: '4rem',
    height: '4rem',
    top: '-8rem',
    left: '7rem'
  },
  depilar:{
    width: '4rem',
    height: '4rem',
    top: '-16rem',
    left: '8rem'
  },
  gilete:{
    width: '4rem',
    height: '4rem',
    top: '-20rem',
    left: '1rem'
  },
  text1Screen10:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.6rem',
    transform:[
      {
        rotateZ: '3deg'
      }
    ]
  },
  groupImgBrinco:{
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: '-7rem',
    left: '-5rem',
    paddingHorizontal: '4rem'
  },
  imgAlianca:{
    width: '4rem',
    height: '2.2rem',
  },
  imgBrinco:{
    width: '2rem',
    height: '3.3rem',
  },
  groupImgTerco:{
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: '-5rem',
    left: '-5rem',
    paddingHorizontal: '4rem'
  },
  imgTerco:{
    width: '2rem',
    height: '3.4rem',
  },
  imgDentadura:{
    width: '3.3rem',
    height: '2rem',
  },
  imgBalao1Screen11:{
    width: '13rem',
    height: '10.5rem',
    justifyContent: 'center',
    top: '-2rem',
    left: '-4rem',
    paddingHorizontal: '1.6rem'
  },
  imgBalao2Screen11:{
    width: '14.5rem',
    height: '10.6rem',
    justifyContent: 'center',
    top: '-6.7rem',
    left: '2rem',
    paddingHorizontal: '1.6rem'
  },
  imgScreen11:{
    width: '4rem',
    height: '8rem',
    left: '-6rem',
    top: '-8rem'
  },
  urinar:{
    width: '5rem',
    height: '5rem',
    top: '10rem',
    left: '6rem'
  },
  text1Screen11:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    top: '-0.2rem'
  },
  text2Screen11:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    top: '-0.35rem'
  },
  balaoScreen12:{
    width: '16.5rem',
    height: '9rem',
    paddingTop: '0.5rem',
    left: '1rem',
  },
  screen12Text1:{
    color: theme.colors.blank,
    textAlign: 'center',
  },
  imgScreen12:{
    width: '4rem',
    height: '8rem',
    left: '-8.4rem',
    top: '0rem',
  },
  screen12Group1:{
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    left: '2rem',
    top: '-4rem'

  },
  screen12Group2:{
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    left: '2rem',
    top: '-3rem'
  },
  tosse:{
    width: '3.7rem',
    height: '4rem',
  },
  vomito:{
    width: '3.7rem',
    height: '4rem',
  },
  dorBarriga:{
    width: '3.7rem',
    height: '4rem',
  },
  sono:{
    width: '4.7rem',
    height: '4rem',
  },
  espirro:{
    width: '4.7rem',
    height: '4rem',
  },
  dorPeito:{
    width: '3.7rem',
    height: '4rem',
  },
  febre:{
    width: '3.7rem',
    height: '4rem',
  },
  tontura:{
    width: '4.7rem',
    height: '4rem',
  },
  screen12CardAlert:{
    width: '14rem',
    height: '3rem',
    backgroundColor: theme.colors.line,
    top: '-2rem',
    borderRadius: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2rem'
  },
  screen12TextCard:{
    color: theme.colors.blank,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contentDicas:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingHorizontal: '1rem',
  },
  textHeader2:{
    marginTop: '1rem',
    color: theme.colors.backgroud,
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  centeredView: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blank
  }
});
