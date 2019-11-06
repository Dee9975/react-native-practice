import React from 'react';
import { Text, StyleSheet, FlatList} from "react-native";


const Listscreen = () => {
    const friends = [
        {name: "Friend1", age: '20'},
        {name: "Friend2", age: '22'},
        {name: "Friend3", age: '33'},
        {name: "Friend4", age: '44'},
        {name: "Friend5", age: '55'},
        {name: "Friend6", age: '66'},
    ];
    return <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default Listscreen;
