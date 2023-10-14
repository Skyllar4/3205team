import React from 'react'
import styled from 'styled-components'

export interface inputProps {
  type: string,
  placeHolder?: string,
  value?: string | number,
  name?: string,
  required?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = styled.input`
      display: block;
      background-color: #d4dce2;
      padding: 7px 24px;
      outline: none;
      border: none;
      border-radius: 12px;
      font-size: 26px;
      margin-bottom: 15px;
      width: 100%;
      transition: background-color, box-shadow 0.5s ease-in-out;
      &:hover,
      &:focus {
        background-color: white;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      }
`

export default function MyInput(props: inputProps) {
  return (
        <>
            <CustomInput
                required={props.required ? true : false}
                name={props.name}
                onChange={props.onChange} 
                type={props.type} 
                value={props.value} 
                placeholder={props.placeHolder} />
        </>
  )
}
