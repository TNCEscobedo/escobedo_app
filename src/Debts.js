import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from "./Header";
import DebtsRow from "./DebtsRow";
import Button from './Button';
class Debts extends React.Component{
    static navigationOptions = {
        header: () => <Header
                         text="Mi app"
                         left="arrow-back"
                         right="delete"
                    />,
        headerStyle: {
            height: 100
        }
    };
    componentDidMount(){

    }
    render(){
        const puestos = this.props.navigation.state.params.market.puestos;
        return(
            <View style={styles.root}>
                <ScrollView style={styles.scroll}>
                    <View style={{paddingLeft: 50, paddingTop: 20, flex: 1, marginBottom: 10}}>
                        <Text>
                            Adeudos
                        </Text>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 30}}>
                        {puestos.map((obj) => {
                            return obj.saldo < 0 ? <DebtsRow key={obj.idPuesto} debt={obj}/> : null;
                        })}
                    </View>
                </ScrollView>
                <Button onPress={() => this.props.navigation.navigate("Pay")} title="Iniciar"></Button>
            </View>
        )
    }
}

const styles = {
    root: {
        flex: 1,
        alignItems: "center"
    },
    scroll: {
        flex: 1,
        width: "100%"
    }
}

export default Debts;