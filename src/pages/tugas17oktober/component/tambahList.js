import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function TambahList({tambahTugas}) {
    
    const [text,setText] = useState('');
    const nambahHandler = (isi) => {
        setText(isi);
    }
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='tambah tugas...'
                onChangeText={nambahHandler}
            />
            <Button
                onPress={() => tambahTugas(text)}
                title='tambah'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
