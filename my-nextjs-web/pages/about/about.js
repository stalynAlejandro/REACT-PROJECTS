import { StyleSheet, Text, View } from 'react-native'

export default function About(){
    return(
        <View>
            <Text>
                About Page
            </Text>

            <Text accessibilityRole="link" href={`/`}>
                Go back
            </Text>
        </View>
    )
}