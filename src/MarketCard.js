import React from 'react';
import { View, Text } from 'react-native';
import MarketCardRow from './MarketCardRow';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class MarketCard extends React.Component{
    render(){
        return(
            <View style={styles.root}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>  
                        <Text>
                            Felipe Carreon
                        </Text> 
                        <MaterialIcons
                            name={this.props.icon}
                            size={40}
                        />
                    </View>
                    <MarketCardRow 
                        one="Puestos Totales"
                        two="500"
                    />
                    <MarketCardRow 
                        one="Asignados"
                        two="4"
                    />
                    <MarketCardRow 
                        one="Aproximado"
                        two="125"
                        three="6 pm"
                    />
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        backgroundColor: "green",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20
    }
}

export default MarketCard;