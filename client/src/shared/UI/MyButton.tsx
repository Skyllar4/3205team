import React from 'react'
import styled from 'styled-components';

interface buttonProps {
  readonly buttonValue: string,
  type?: string,
}

const CustomButton = styled.button`
      background-color: #0a8ee6;
      color: white;
      padding: 12px 63px;
      border-radius: 12px;
      font-size: 23px;
      transition: background-color 0.5s ease-in-out;
      &:hover {
        background-color: #76b3dc;
      }
`

export default function MyButton(props: buttonProps) {
  return (
    <CustomButton 
        type={props.type === 'submit' ? props.type : 'button'}>
        {props.buttonValue}
    </CustomButton>
  )
}
