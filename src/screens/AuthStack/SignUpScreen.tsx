import React, { useCallback } from 'react'
import { Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch, useReduxSelector } from '../../redux'
import { attemptSignUp, resetLogin, selectLogin } from '../../redux/ducks/user'
import UserForm from '../../components/demo/UserForm'
import DefaultPage from '../../components/shells/DefaultPage'

type SignUpScreenProps = {
    navigation: MainNavigationProp<MainRoutes.SignUp>
}
const SignUpScreen = ({ navigation }: SignUpScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const isLoggedIn = useReduxSelector(selectLogin)

    useFocusEffect(
        useCallback(() => {
            if (isLoggedIn) navigation.navigate(MainRoutes.AppLoading)
        }, [navigation, isLoggedIn]),
    )

    const handleSubmit = (email: string, password: string): void => {
        dispatch(attemptSignUp(email, password))
    }

    const handleSwitch = (): void => {
        dispatch(resetLogin())
        navigation.navigate(MainRoutes.SignIn)
    }

    return (
        <DefaultPage>
            <Text>注册页面</Text>
            <UserForm submitHandler={handleSubmit} label="注册" />
            <Button title="登录" onPress={handleSwitch} />
        </DefaultPage>
    )
}

export default SignUpScreen
