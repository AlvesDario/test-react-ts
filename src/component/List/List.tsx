import React, { ReactNode } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { ItemModel } from '../../model/ItemModel';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

interface ListProps {
  className?: string;
}

function List(props: ListProps) {
  const ItemList = useSelector((state: TStore) => state.itemReducer);
  const { className } = props;

  return <div className={className}>
    <h1>Address Book</h1>
    {ItemList.map((item: ItemModel): ReactNode => {
      return <ListItem key={item.fullName} Item={item} />
    })}
  </div>
}

export default styled(List)``;