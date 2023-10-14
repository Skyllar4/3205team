import { useAppDispatch } from 'features/hooks/redux';
import { getUser } from 'features/lib/getUser';
import { requestSlice } from 'features/store/reducers/request';
import { useMask } from '@react-input/mask';
import React from 'react'
import MyButton from 'shared/UI/MyButton';
import MyInput from 'shared/UI/MyInput';
import styled from 'styled-components';

const Form = styled.form`
    text-align: center;
`

const FormTitle = styled.h2`
      margin-bottom: 30px;
      font-size: 40px;
      font-weight: bold;
`

const ErrorText = styled.p`
      color: red;
      margin-bottom: 8px;
`

const MaskInput = styled.input`
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

export default function FindForm() {

  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [err, setError] = React.useState(false);
  // Дефолтные стэйты, err - для вылезания предупреждений, если неправильно заполнена форма

  const inputRef = useMask({ mask: '__-__-__', replacement: { _: /\d/ } });

  const {setRequest, setRequestResult} = requestSlice.actions;
  const dispatch = useAppDispatch();
  /* 
      Достаем нужные методы из redux
      setRequest - Ставится на true, пока выполняется запрос, для запуска лоадера, после завершения запроса возвращается на false
      setRequestResult - Для записи результата запроса в глобальный стэйет и отображении его в компоненте UserList
  */

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
  }

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        
        if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email)) {
            setError(true);
            return
        } else if (number &&  !/(?<!\d)[1-9]\d{5}(?!\d)/.test(number.replace(/[\-s]/g, ''))) {
            setError(true);
            return
        }
        /* 
            Валидация полей формы, регулярка корректного email
            Далее проверям есть ли номер, если есть, проверям, чтобы все были цифры и было 6 символов
        */

        setError(false);

        dispatch(setRequest(true));

        const result = (await getUser(email, number)).data;

        if (result.length !== 0) {
            dispatch(setRequestResult(result));
        } else {
            dispatch(setRequestResult(['err']));
        }
        /* 
            Если в ответе что-то пришло - значит юзеры получены и записываем их в стэйт
            Если ничего нет, то кидаем в массив 'err', для отображения надписи, что пользователи не найдены
        */

        dispatch(setRequest(false));

        setEmail('');
        setNumber('');

  }

  return (
    <>
      <FormTitle>Введите данные</FormTitle>
      <Form onSubmit={handleSubmit}>
            <MyInput type='text' name='email' placeHolder='Email' value={email} onChange={handleChangeEmail} />
            {err && <ErrorText>Неправильный ввод данных, заполните поля корректно</ErrorText>}
            <MaskInput ref={inputRef} type="text" name='number' placeholder='Номер' value={number} onChange={handleChangeNumber} />
            {err && <ErrorText>Неправильный ввод данных, заполните поля корректно</ErrorText>}
            <MyButton type='submit' buttonValue='Найти' />
      </Form>
    </>
  )

}
