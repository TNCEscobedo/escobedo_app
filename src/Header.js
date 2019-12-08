import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Header extends React.Component {
    
    render() {
        let right = <Text style={styles.right}>Jue</Text>;
        if(this.props.right){
            right =  (
                    <MaterialIcons
                        name={this.props.right}
                        size={30}
                        color={"white"}
                    />
            )
        }
        return (
            <View style={styles.root}>
                <MaterialIcons
                    name={this.props.left}
                    size={30}
                    color={"white"}
                />
                <Text style={styles.center}>{this.props.text}</Text>
                {right}
            </View>
        );
    }
}

const styles = {
    root: {
        height: 80,
        backgroundColor: "#3b5a99",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    center: {
        textAlign: "center",
        fontFamily: "OpenSans-Regular",
        color: "white"
    },
    left: {
        fontFamily: "OpenSans-Bold",
        color: "white"
    },
    right: {
        fontFamily: "OpenSans-Bold",
        color: "white"
    }
}

export default Header;