import React from 'react';
import { View, Text } from 'react-native';
class MarketCardRow extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={{flex: 2 }}>
                    <Text>{this.props.one}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <Text>{this.props.two}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                    <Text>{this.props.three}</Text>
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
    }
}

export default MarketCardRow;