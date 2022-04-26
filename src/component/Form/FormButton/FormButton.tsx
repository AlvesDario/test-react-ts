import React from "react";
import styled from "styled-components";
import { Button } from './Button';

interface FormButtonProps {
  children?: string;
  className?: string;
  onClick?: () => void;
}

function FormButton(props: FormButtonProps) {
  const { className, children, onClick } = props;

  return (
    <Button className={className} onClick={onClick} >
      {children || ''}
    </Button>
  )
}

export default styled(FormButton)``;