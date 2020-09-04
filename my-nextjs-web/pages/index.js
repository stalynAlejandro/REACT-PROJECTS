import { StyleSheet, Text, View } from 'react-native'

export default function App(props){
    return(
        <View>
            <Text>
                React Native for Web & Next.js
            </Text>

            <Text accessibilityRole="link" href={`/about`}>
                A universal link 
            </Text>
        </View>
    )
}