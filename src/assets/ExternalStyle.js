import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 260,
    backgroundColor: '#7860f0',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  textcontent: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30,
  },
  text1content: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  txtinput: {
    width: '100%',
    borderRadius: 7,
    fontSize: 16, // placeholder fontsize
    paddingLeft: 14, // for placeholder
    backgroundColor: 'white',
    height: 50,
  },
  todolisttext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },
});
