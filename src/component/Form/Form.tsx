import React, { useState } from "react";
import styled from 'styled-components';
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { ItemModel } from '../../model/ItemModel';
import { useDispatch } from 'react-redux';
import { add } from '../../features/item';

interface FormProps {
  className?: string;
  Item?: ItemModel;
}


function Form(props: FormProps) {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const newItem = (): ItemModel => new ItemModel(name, lastname, phone, address);

  const { className } = props;

  return (<div className={className}>
    <h1>Add Contact</h1>
    <FormInput label="name" type="text" value={name} onChange={setName} />
    <FormInput label="lastname" type="text" value={lastname} onChange={setLastName} />
    <FormInput label="phone" type="text" value={phone} onChange={setPhone} />
    <FormInput label="address" type="text" value={address} onChange={setAddress} />
    <FormButton onClick={() => dispatch(add(newItem()))}>Add</FormButton>
  </div>)
}

export default styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;