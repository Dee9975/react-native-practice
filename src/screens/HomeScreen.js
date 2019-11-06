import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = (props) => {
        return (
            <View style={styles.textStyle}>
                <Text>Home Screen</Text>
                <Button
                    style={styles.buttonStyle}
                    onPress={() => props.navigation.navigate('Components')}
                    title="Go to Components Demo"
                />
                <Button
                    style={styles.buttonStyle}
                    onPress={() => props.navigation.navigate('List')}
                    title="Go to Lists Demo"
                />
            </View>
        );
};
const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        marginVertical: 5
    }
});

export default HomeScreen;
