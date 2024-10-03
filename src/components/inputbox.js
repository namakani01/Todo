import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from '../assets/ExternalStyle';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons//MaterialCommunityIcons';
import {addTodo} from '../Redux/actions/action';
import {useDispatch} from 'react-redux';

const Inputbox = data => {
  //console.log(data)

  const [todoValue, setTodoValue] = useState(''); // To capture the input value

  const [despValue, setdespValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!!todoValue.trim() && !!despValue.trim()) {
      let date = new Date();
      let time = date.getTime(); // It will Generate a unique ID based on current time
      let todoObj = {
        id: time,
        todo: todoValue, // Input value
        description: despValue,
        completed: false,
      };

      // Dispatch action to add the todo
      dispatch(addTodo(todoObj));

      data.data.navigation.navigate('List');

      // Clear the input after dispatching the action
      setTodoValue('');
      setdespValue('');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        borderColor: 'white',
        borderRadius: 9,
        marginLeft: 20,
        marginRight: 15,
        marginTop: 15,
        height: '60%',
      }}>
      <TextInput
        placeholder="Enter Title"
        placeholderTextColor={'black'}
        style={styles.txtinput}
        value={todoValue}
        onChangeText={text => setTodoValue(text)}></TextInput>

      <TextInput
        placeholder="Enter Description"
        placeholderTextColor={'black'}
        style={{
          marginTop: 15,
          backgroundColor: 'white',
          borderRadius: 7,
          padding: 13,
          fontSize: 16,
          paddingLeft: 14,
          height: 50,
        }}
        value={despValue}
        onChangeText={text => setdespValue(text)}></TextInput>

      <TouchableOpacity
        onPress={() => data.data.navigation.navigate('List')}
        style={{
          marginHorizontal: 120,
          marginTop: 100,
          backgroundColor: '#7860f0',
          padding: 10,
          borderRadius: 8,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            borderColor: 'red',
          }}>
          Show Task
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#7860f0',
          padding: 20,
          width: 70,
          height: 70,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: '80%',
          marginTop: '80%',
        }}
        onPress={handleSubmit}>
        <Icon name="pen-plus" size={32} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Inputbox;
