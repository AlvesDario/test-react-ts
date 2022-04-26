import React from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';
import styled from 'styled-components';

interface AppProps {
  className?: string;
}

function App(props: AppProps) {
  const {className} = props;
  return (<div className={className}>
    <List />
    <Form />
  </div>
  );
}

export default styled(App)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;
