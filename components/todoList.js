
import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';
import Todo from './todo'

const TodoList = () => {
    const [title, setTitle] = useState('Todo-List');
    return (
        <View>

            <Text>{title}</Text>
            <Todo name = {'First Todo'} />
            <Todo name = {'Second Todo'}/>
          {/*   <Todo name = {'third Todo'} /> */}
            <Button title = 'Change me' onPress = {()=> setTitle('My Lists')}/>

        </View>
    )
}

export default TodoList;