import {View,TextInput, StyleSheet, TouchableOpacity , Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../Redux/actions/action';
import { updateDescription } from '../Redux/actions/action';

const Updatetodo = (props) => {
    // console.log(props.route.params.item)
    const dispatch =  useDispatch()

   const {todo ,  description} = props.route.params.item


    // Use local state to track the changes in the text
    const [updatedTodo, setUpdatedTodo] = useState(todo);

    const [updatedDesc , setUpdatedDesc] = useState(description)

    


    const handletitleUpdate = () => {

      // Prevent updating if the value is empty
      if (!updatedTodo.trim()) {
        Alert.alert('Error', 'Todo cannot be empty!');
        return;
    }
      // Create a new object with updated todo text
      const updatedItem = { ...props.route.params.item , todo: updatedTodo };
      dispatch(updateTodo(updatedItem));
      // Navigate back to the previous screen after updating
      props.navigation.goBack();
  };


  const handleDescUpdate = ()=> {
    if(!updatedDesc.trim()) {
      Alert.alert('Error' , 'Description cannot be empty!');
      return;
    }

    const updatedDescription = {...props.route.params.item.description , description : updatedDesc}
  
      dispatch(updateDescription(updatedDescription))

      props.navigation.goBack();

  }


  return (
    <View>
       <Text style = {{marginTop : 20 , marginLeft : 30 , fontSize : 17 , fontWeight : 'bold' , color : 'black'}}>Update Your Title</Text>

      <View style = {st.container}>
      <TextInput value={updatedTodo} onChangeText={(text) => setUpdatedTodo(text)} style={st.textbox}></TextInput>
      <TouchableOpacity onPress={handletitleUpdate}>
      <Icon style={{marginLeft : 20 , marginTop : 12}} name="edit" size={22} color={'#7860f0'}></Icon>
      </TouchableOpacity>
      </View>

      <Text style = {{marginTop : 25 , marginLeft : 30 , fontSize : 17 , fontWeight : 'bold' , color : 'black'}}>Update Your Description</Text>

      <View style = {st.container}>
        <TextInput value={updatedDesc} onChangeText={(text) => setUpdatedDesc(text)} style={st.textbox}></TextInput>
        <TouchableOpacity onPress={handleDescUpdate}>
        <Icon style = {{marginLeft : 20,marginTop : 12}} name='edit' size={22} color={'#7860f0'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const st = StyleSheet.create({
    container : 
    {
      flexDirection : 'row' , 
      marginTop : 30 ,
      marginHorizontal : 24 , 
      backgroundColor : 'white',
      borderRadius : 9,


    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Elevation for Android shadow
    borderColor: '#E0E0E0', // Subtle border
    borderWidth: 1,
    },

  textbox: {
    width: '83%',
    fontSize : 16,          // placeholder fontsize
    paddingLeft : 17 ,
    height : 50     // for placeholder
  },
});

export default Updatetodo;
