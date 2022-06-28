import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    
  },
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingHorizontal: '1rem'
  },
  buttonSpeech:{
    top: '1rem',
    alignSelf: 'flex-end'
  },
  imgBalao:{
    width: '15rem',
    height: '8.2rem',
    alignSelf: 'center',
    top: '5rem',
    left: '1rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem'
  },
  text:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem'
  },
  img:{
    width: '5rem',
    height: '10rem',
    top: '6rem',
    left: '-7rem'
  },
  imgBalaoAntonio:{
    width: '17rem',
    height: '9.4rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    alignSelf: 'flex-start',
    left: '2rem',
  },
  textAntonio:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    top: '0.3rem'
  },
  imgAntonio:{
    width: '5rem',
    height: '10rem',
    alignSelf: 'flex-start',
    top: '0rem',
  },
  imgBalaoMariaTeresa:{
    width: '19rem',
    height: '10.5rem',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: '1rem',
    top: '-25rem',
    transform:[{
      rotateY: '180deg'
    },{
      rotateX:' 180deg'
    }]
  },
  textMaria:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '-0.4rem',
    fontSize: '1rem',
    transform:[{
      rotateY: '180deg'
    },{
      rotateX:' 180deg'
    }]
  },
  imgMaria:{
    width: '5rem',
    height: '12rem',
    alignSelf: 'flex-end',
    left: '-4rem',
    top: '-12rem'
  },
  imgTeresa:{
    width: '5rem',
    height: '12rem',
    alignSelf: 'flex-end',
    left: '0rem',
    top: '-24rem'
  },
  imgBalaoClaudia:{
    width: '16rem',
    height: '8.9rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    left: '2rem',
    top: '2rem'
  },
  imgClaudia:{
    width: '4rem',
    height: '8rem',
    top: '2rem',
    left: '6rem',
  },
  textClaudia:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem'
  },
  imgBalaoCarlos:{
    width: '14rem',
    height: '7.5rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    left: '-3.5rem',
    // left: '4rem',
    top: '-2rem',
  },
  textCarlos:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem'
  },
  imgCarlos:{
    width: '4rem',
    height: '8rem',
    top: '-2.5rem',
    left: '-2rem',
  },
  imgBalaoLuciana:{
    width: '10rem',
    height: '5.6rem',
    alignItems: 'center',
    justifyContent: 'center',
    top: '1rem',
    left: '5rem',
  },
  textLuciana:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem',
    top: '-0.2rem'
  },
  imgLuciana:{
    width: '4rem',
    height: '8rem',
    top: '1rem',
    left: '7rem',
  },
  imgBalaoGleyce:{
    width: '15rem',
    height: '8rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    top: '-6.5rem',
    left: '-3.4rem',
  },
  textGleyce:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem',
    top: '-0.2rem'
  },
  imgGleyce:{
    width: '4rem',
    height: '8rem',
    top: '-6rem',
    left: '-3rem',
  },
  imgBalaoJorge:{
    width: '9rem',
    height: '5rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    top: '-12rem',
    left: '4rem',
  },
  textJorge:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem',
    top: '-0.2rem'
  },
  imgJorge:{
    width: '6rem',
    height: '13rem',
    top: '-15rem',
    left: '5rem',
  },
  textBlank:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center'
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
