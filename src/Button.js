import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

class Button extends React.Component {

    render() {
        return (
            <View style={styles.root} onPress={this.props.onPress}>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    <View style={{height: "100%", width: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color: "white"}}>{this.props.title}</Text>
                    </View>
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