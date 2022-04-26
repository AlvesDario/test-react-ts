import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { Label } from './Label';

interface FormInputProps {
  className?: string;
  onChange: (newValue: string) => void;
  value?: string;
  label: string;
  type: string;
}

function FormInput(props: FormInputProps) {
  const { className, onChange, value = '', label, type } = props;

  return (<>
    <Label>{label}</Label>
    <Input className={className} onChange={(e) => onChange(e.target?.value)} type={type} value={value} />
  </>)
}

export default styled(FormInput)``;