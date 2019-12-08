import React from 'react';
import { View, Text } from 'react-native';

class Debts extends React.Component{
    render(){
        return(
            <View style={{flexDirection: "row", justifyContent: "space-between", elevation: 5, backgroundColor: "white", borderRadius: 10, padding: 20, marginBottom: 10}}>
                <View>
                    <Text>Orlando Torres</Text>
                    <Text>Ropa</Text>
                </View>
                <View>
                    <Text>Tirado</Text>
                </View>
            </View>
        );
    }
}

export default Debts;