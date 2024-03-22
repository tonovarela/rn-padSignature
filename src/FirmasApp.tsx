import React from 'react';

import { FirmarScreen } from './screens/FirmarScreen';
import { View } from 'react-native';

export const FirmasApp= () => {
return (
    <View style={{flex:1,marginTop:50}}>
<FirmarScreen onGetSignature={(signature)=>{console.log(signature)}}></FirmarScreen>
    </View>

)
}