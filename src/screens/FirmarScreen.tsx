import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas'

interface Props {
    onGetSignature: (signature:string) => void;
}

export const FirmarScreen = ({onGetSignature}:Props) => {
    const [tieneFirma, setTieneFirma] = useState(false)
    const ref = useRef<SignatureViewRef>(null);

    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature: string) => {
        console.log("Signature:");
        ref.current?.clearSignature();
        setTieneFirma(false)
        onGetSignature(signature)
        
    };

    const leerFirma = () => {
        ref.current?.readSignature();
    }    

    // Called after ref.current.clearSignature()
    const handleClear = () => {
        ref.current?.clearSignature();
        setTieneFirma(false)
    };

    // Called after end of stroke
    const handleEnd = () => {
        setTieneFirma(true)
    };

    
    
    const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;
    const styles = StyleSheet.create({
        container:{

            alignItems: "center",            
            height:"50%",
            padding: 10,
            
            
        },
        contenedorBotones:{
      backgroundColor:'white',
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",            
            paddingTop:10
            // flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15
        },
        titulo:{
            fontSize:25,textAlign:'center',paddingBottom:5
        }
    })

    return (                    
        <View
        style={styles.container}>
            <Text style={styles.titulo}>Firma de entrega</Text>
            <SignatureScreen            
            style={{padding:10,backgroundColor:'white'}}
                penColor='green'
                ref={ref}
                clearText='Borrar'
                confirmText='Registrar firma'
                webStyle={style}                            
                onEnd={handleEnd}
                onOK={handleOK}                                        
                autoClear={false}
                descriptionText={"Firma de entregado"}
            />
            <View style={styles.contenedorBotones}>                
                <Button                            
                    onPress={handleClear}
                    title="Borrar"
                />                
                <Button
                disabled={!tieneFirma}
                    onPress={() => leerFirma()}
                    title="Registrar "
                />
            </View>
            </View>




        

    )


   
}

