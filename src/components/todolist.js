import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo} from '../Redux/actions/action';
import {deleteAllTodos} from '../Redux/actions/action';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';


const Todolist = props => {
  //  console.log(props)
  const todos = useSelector(state => state);

  // console.log(todos)

  const dispatch = useDispatch();

  
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  
  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  const [CheckedId, setCheckedId] = useState([]);

  const handleCheckbox = id => {
    if (CheckedId.includes(id)) {
      setCheckedId(CheckedId.filter(item => item !== id));
    } else {
      setCheckedId([...CheckedId, id]);
    }
  };

  return (
    <View style={{height: '90%', marginTop: 15}}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={5}
        renderItem={({item}) => (
          <View style={sty.listcont}>
            <CheckBox
              onClick={() => handleCheckbox(item?.id)}
              isChecked={CheckedId.includes(item?.id)}
              checkBoxColor={'#7860f0'}></CheckBox>

            <View flexDirection="column">
              <Text
                style={{
                  textDecorationLine: CheckedId.includes(item?.id)
                    ? 'line-through'
                    : 'none',
                  fontWeight: '500',
                  fontSize : 15,
                  color: 'black',
                  textAlign : 'center'
      
          
                }}>
                {item.todo}
              </Text>

              <Text
                style={{
                  marginTop: 3,
                  fontWeight: '300',
                  color: 'black',
                  textAlign : 'center'
                }}>
                {item.description}
              </Text>
            </View>

            <View style={sty.iconContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Update', {item})}>
                <Icon
                  style={{marginRight: 20}}
                  name="edit"
                  size={22}
                  color={'#7860f0'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                {/* {console.log(item.id)} */}
                <Icon name="delete" size={20} color={'#7860f0'}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}></FlatList>

<View >
      {todos.length > 0 && (
        <TouchableOpacity style={{backgroundColor:'#de5b5b', padding : 20 , width:70,height:70,borderRadius:50,justifyContent:'center',alignItems:'center',marginHorizontal  :'80%'}} onPress={handleDeleteAll}>
          <Icon1
            style={{
              // position: 'absolute',
              // padding: 20,
              // height: 70,
              // width: 70,
              // borderRadius: 50,
              // // marginHorizontal: '78%',
              // marginTop:70,
              // bottom:10,
              // right:20

            }}
            name="delete-forever"
            size={32}
            color={'white'}
            // backgroundColor={'#de5b5b'}
            ></Icon1>
        </TouchableOpacity>
      )}

</View>
    </View>
  );
};

const sty = StyleSheet.create({
  listcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 9,

    shadowColor: '#000', // Shadow effect
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Elevation for Android shadow
    borderColor: '#E0E0E0', // Subtle border
    borderWidth: 1,
  },
  tuchopacitystyle: {
    width: 30,
    height: 30,
    backgroundColor: '#de5b5b',
    padding: 28,
    borderRadius: 50,
  },
  tuchopacitytext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default Todolist;
