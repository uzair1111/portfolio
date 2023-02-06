import React from 'react'
import { Redirect } from 'react-router-dom';

import { ButtonBack, ButtonFront } from './index'
let renderRedirect = () => {
  return <Redirect to='www.google.com' />
}
const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick= {renderRedirect} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
