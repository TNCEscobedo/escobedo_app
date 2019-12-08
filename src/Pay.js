import React from 'react';
import { View, Text, TextInput, CheckBox, Alert } from 'react-native';
import RadioButtons from './RadioButtons';
import Button from './Button';
import Header from "./Header";
import axios from "axios";
import BASE_URL from "./BASE_URL";
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 1,
            selected: "",
            monto: "",
            tarifa: "",
            folio: "",
            notas: "",
            noPagado: false,
            notas: false
        }
    }

    componentDidMount() {
        this.setState({ selected: "id" })
    }

    submit() {
        const {folio, id, monto} = this.state;
        if(folio.length < 1 || id.length < 1 || monto.length < 1){
            Alert.alert(
                'Campos vacíos',
                'Ingrese todos los datos',
                [
                  {text: 'Ok', onPress: () => console.log('Ask me later pressed')},
                ],
                {cancelable: true},
            );
            return;
        }
        this.setState({n: this.state.n + 1});
        axios.post(BASE_URL+"cobros", {
            idPuesto: 1,
            idMercado: 1,
            idInspector: 1,
            nombre: "Fernando Zablah",
            monto: Number(this.state.monto),
            pagado: Number(this.state.monto) === 0,
            idTarifa: 1,
            folio: this.state.folio,
            fecha_hora: new Date().getTime() / 1000
        }).then((res) => {
            this.setState({
                monto: "",
                tarifa: "",
                folio: "",
                notas: "",
                noPagado: false,
                notas: false,
                id: "",
                nombre: ""
            });
        })
    }

    static navigationOptions = {
        header: () => <Header
            text="Mi app"
            left="arrow-back"
            rightEmpty={true}
        />,
        headerStyle: {
            height: 100
        }
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "90%", marginTop: 30 }}>
                    <Text onPress={() => this.setState({ selected: "id" })} style={{ backgroundColor: this.state.selected === "id" ? "#d3d3d3" : "white", flex: 1, textAlign: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20, fontSize: 20, paddingVertical: 10 }}>
                        ID
                    </Text>
                    <Text onPress={() => this.setState({ selected: "nombre" })} style={{ backgroundColor: this.state.selected !== "id" ? "#d3d3d3" : "white", flex: 1, textAlign: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20, fontSize: 20, paddingTop: 10 }}>
                        Nombre
                    </Text>
                </View>
                <View style={{ ...styles.inputContainer, marginBottom: 20 }}>
                    <TextInput
                        style={styles.input}
                        keyboardType={this.state.selected === "id" ? "number-pad" : "default"}
                        value={this.state[this.state.selected]}
                        placeholder={`${this.state.selected === "id" ? "Número" : "Nombre"} de comerciante`}
                        onChangeText={txt => this.setState({ [this.state.selected]: txt })}
                    />
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <Text style={{ textAlign: "left" }}>Saldo</Text>
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <Text style={{ textAlign: "right" }}>$0.00</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <Text style={{ textAlign: "left" }}>Tarifa</Text>
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                        <Text style={{ textAlign: "right" }}>$0.00</Text>
                    </View>
                </View>
                <RadioButtons setPrice={(tarifa) => this.setState({tarifa})}/>
                    <View style={{ ...styles.row, width: "100%" }}>
                        <Text style={{ marginRight: 20, fontSize: 20 }}>Monto</Text>
                        <View style={styles.searchField}>
                            <Text>$</Text>
                            <TextInput
                                style={styles.input}
                                value={this.state.monto}
                                onChangeText={text => this.setState({ monto: text })}
                                secureTextEntry={this.props.secureTextEntry}
                                keyboardType={"number-pad"}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.row, marginBottom: 0, width: "100%" }}>
                        <Text style={{ marginRight: 35, fontSize: 20 }}>Folio</Text>
                        <View style={styles.searchField}>
                            <Text>#</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(txt) => this.setState({ folio: txt })}
                                secureTextEntry={this.props.secureTextEntry}
                                value={this.state.folio}
                                keyboardType={"number-pad"}
                            />
                    </View>
                </View>
                <View style={{ width: "100%", paddingLeft: 35, marginTop: 30, flexDirection: "row" }}>
                    <CheckBox onValueChange={(val) => this.setState({noPagado: val})} value={this.state.noPagado}></CheckBox>
                    <Text style={{ marginTop: 7 }}>No Pagado</Text>
                </View>
                <View style={{ width: "100%", paddingLeft: 35, marginTop: 10, flexDirection: "row" }}>
                    <CheckBox onValueChange={(val) => this.setState({notas: val})} value={this.state.notas}></CheckBox>
                    <Text style={{ marginTop: 7 }}>Notas</Text>
                </View>
                <View style={{ width: "100%", flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <Button title="OK" onPress={() => this.submit()} ></Button>
                </View>
            </View>
        )
    }
}

const styles = {
    input: {
        width: '90%',
        fontSize: 12,
        fontFamily: "OpenSans-Regular",
        textAlign: 'left',
        height: 50,
        padding: 10,
        backgroundColor: '#F7F7F7',
        color: '#424242',
        borderWidth: 0,
        borderRadius: 10
    },
    inputContainer: {
        backgroundColor: "#d3d3d3",
        height: 90,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    searchField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#BABABA',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        width: "80%"
    }
}

export default Pay;