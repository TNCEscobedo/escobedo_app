import React from 'react';
import { Keyboard } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class RadioButtons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value3Index: 0
        }
    }
    componentDidMount(){

    }
    render() {
        var radio_props = [
            {label: '3m', value: "3" },
            {label: '6m', value: "6" },
            {label: '9m', value: "9" },
            {label: '12m', value: "12" },
            {label: 'Otro', value: "Otro" },
          ];
          
        return (
            <RadioForm
                style={{ marginBottom: 20}}
                formHorizontal={true}
                labelHorizontal={false}
            >
                {/* To create radio buttons, loop through your array of options */}
                {
                    radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} labelHorizontal={false} wrapStyle={{flex: 1, marginTop: 20}}>
                            
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.value3Index === i}
                                onPress={() => {
                                    this.setState({value3Index: i});
                                    this.props.setPrice(radio_props[i].value);
                                    Keyboard.dismiss();
                                }}
                                borderWidth={1}
                                buttonInnerColor={'#3b5a99'}
                                buttonOuterColor={this.state.value3Index === i ? '#05b7da' : '#000'}
                                buttonSize={10}
                                buttonOuterSize={20}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 10 }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={() => {
                                    this.setState({value3Index: i});
                                    this.props.setPrice(radio_props[i].value);
                                    Keyboard.dismiss();
                                }}
                                labelStyle={{ fontSize: 12, color: '#2ecc71' }}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    ))
                }
            </RadioForm>
        );
    }

}

export default RadioButtons;