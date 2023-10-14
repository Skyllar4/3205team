import FindForm from 'entites/FindForm/FindForm'
import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
      text-align: center;
      max-width: 700px;
      padding: 30px;
      border-radius: 50px;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export default function FindUserForm() {
  return (
    <>
      <FormContainer>
            <FindForm />
      </FormContainer>
    </>
  )
}
