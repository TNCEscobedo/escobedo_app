import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class Button extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <TouchableNativeFeedback>
                    <Text style={{color: "white"}}>{this.props.title}</Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = {
    root: {
        height:50,
        borderRadius: 12, 
        elevation: 7, 
        width: "80%",
        backgroundColor: "#3b5a99",
        alignItems: "center", 
        justifyContent: "center",
        marginBottom: 20
    }
}

export default Button;