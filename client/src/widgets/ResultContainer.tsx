import UserList from 'entites/UserList/UserList'
import Spinner from 'features/Spinner'
import { useAppSelector } from 'features/hooks/redux'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin-top: 200px;
`

export default function ResultContainer() {

        const {request, requestResult} = useAppSelector(state => state.requestReducer);

        if (request) { // После того, как улетел запрос запускаем спинер
            return <Container>
                        <Spinner />
                   </Container>
        } else if (!request && requestResult) { // Запрос завершен + имеем резуьтат - отображаем его
            return <Container>
                        <UserList />
                   </Container>
        } else {
            return <></>
        }

}
