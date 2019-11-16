import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default'

export default function RouterWrapper({
  component: Component,
  ...rest
}){
  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component { ...props } />
        </DefaultLayout>
      )}
    />
  )


}
