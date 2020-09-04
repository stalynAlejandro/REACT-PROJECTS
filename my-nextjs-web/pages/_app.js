import 'react-native-gesture-handler'
import * as React from 'react'
import Head from 'next/head'
import { NavigationContainer } from '@react-navigation/native'

function MyApp({ Component, pageProps }){
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, intial-scale=1" />
            </Head>
            <NavigationContainer>
                <Component {...pageProps} />
            </NavigationContainer>
        </>
    )
}

export default MyApp;