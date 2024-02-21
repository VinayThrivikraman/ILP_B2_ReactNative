import { View } from "react-native"
import HeaderComponent from "../component/HeaderComponent"
import StoriesComponent from "../component/StoriesComponent"
import Feeds from "../component/Feeds"

const InstagramHome = () => {
    return (
        <View>
            <HeaderComponent />
            <StoriesComponent />
            <Feeds />
        </View>
    )
}

export default InstagramHome