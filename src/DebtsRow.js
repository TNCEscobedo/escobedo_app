import React from 'react';
import { View, Text } from 'react-native';

class Debts extends React.Component{
    render(){
        console.log(this.props);
        return(
            <View style={{flexDirection: "row", justifyContent: "space-between", elevation: 5, backgroundColor: "white", borderRadius: 10, padding: 20, marginBottom: 10}}>
                <View>
                    <Text>{this.props.debt.nombre}</Text>
                    <Text>{this.props.debt.giro}</Text>
                </View>
                <View>
                    <Text>Tirado</Text>
                </View>
            </View>
        );
    }
}

export default Debts;