import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
class MarketCardRow extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={{flex: 2 }}>
                    <Text style={styles.font}>{this.props.one}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <Text style={styles.font}>{this.props.two}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <Text style={styles.font}>{this.props.three}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <TouchableNativeFeedback>   
                        <Text style={styles.font} onPress={this.props.walk}>{this.props.four}</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row"
    },
    font: {
        fontFamily: "OpenSans-Regular"
    }
}

export default MarketCardRow;