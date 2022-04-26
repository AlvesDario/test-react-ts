import React from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import { P } from './P';
import { ItemModel } from '../../../model/ItemModel';

interface ItemProps {
  className?: string;
  Item?: ItemModel;
}

function Item(props: ItemProps) {
  const { className, Item } = props;
  return (<div className={className}>
    <P>Nome: {Item?.fullName}</P>
    <P>numero: {Item?.phone}</P>
    <P>endereco: {Item?.address}</P>
    <Button>Delete</Button>
  </div>);
}

export default styled(Item)``;