import "@/styles/global.css"
import { Slot } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Loading } from "@/components/Loading"
import { StatusBar } from "react-native"

export default function Layout() {
 

    if (false) {
        return <Loading />
    }
    return (
        <GestureHandlerRootView>
            <StatusBar barStyle="light-content" />
            <Slot />
        </GestureHandlerRootView>
    )
}