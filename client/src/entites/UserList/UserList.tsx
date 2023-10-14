import { useAppSelector } from 'features/hooks/redux'
import { User } from 'features/lib/models/userModel';
import React from 'react'
import styled from 'styled-components';

const UserListItems = styled.li`
      display: flex;
      justify-content: space-between;
      font-size: 50px;
      border-top: 3px solid #c2bcbc;
      border-bottom: 3px solid #c2bcbc;
      padding: 15px 20px;
      margin-bottom: 5px;
`

const UserListTitle = styled.h2`
      margin-bottom: 30px;
      font-size: 60px;
      font-weight: bold;
`

export default function UserList() {

  const {requestResult} = useAppSelector(state => state.requestReducer);

  let listItems;

  if (requestResult.length > 0) {
          listItems = requestResult.map((item: User) => <UserListItems key={item.number}>
                                                          <p>{item.email}</p>
                                                          <p>{item.number}</p>  
                                                        </UserListItems>);
                                                // Допустим у них уникальный number
  }

  if (requestResult.length > 0 && requestResult[0] !== 'err') {
    return <>
            <UserListTitle>Найденные пользователи</UserListTitle>
            <ul>{listItems}</ul>
          </>
  } else if (requestResult[0] === 'err') {
    return <UserListTitle>Пользователи с такими данными не найдены</UserListTitle>
  } 
  else {
    return <></>
  }
}
