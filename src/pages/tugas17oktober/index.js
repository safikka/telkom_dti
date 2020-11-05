import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './component/header'
import TambahList from './component/tambahList'
import TodoItem from './component/itemTodo'

export default function TodoApp() {
    const [todos, setTodos] = useState ([
        {text: 'P&ID', id: 1},
        {text: 'Basic Instrumentation', id: 2},
    ]);

    const tambahTugas = (text) => {
        setTodos ((sebelumTodos) => {
            return [{
                text: text,
                id: Math.random().toString()
            },
            ...sebelumTodos    
            ];
        })
    }

    const sentuhHandler = (id) => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.id != id)
        })
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.isi}>
                <TambahList tambahTugas={tambahTugas} />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                        <TodoItem 
                            item={item} 
                            sentuhHandler={sentuhHandler}/>
                        )}
                        keyExtractor = { (item, id) => id.toString() }
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    container: {
        flex:1,
        backgroundColor: '#FFFF'
    },
    isi: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
