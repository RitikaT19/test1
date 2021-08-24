import {  render } from '@testing-library/react'
import React from 'react'
import Enzyme from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import  LoginForm from '../pages/login/loginForm' 

Enzyme.configure({adapter: new Adapter()})

describe('Header test',() => {
    it('givenHeaderById_shouldRenderproperly', () =>{
        const { getByTestId } = render(<LoginForm/>);
        const title = getByTestId('header')
        expect(title).toHaveTextContent('Fill you credentials to login!')
    })
})

describe('Register Form Test', () => {
    test('givenFormElementsById_shouldBeRenderedProperly', () => {
      const { getByTestId } = render(<LoginForm />)
      
      const form = getByTestId('form')
      const email = getByTestId('email')
      const password = getByTestId('password')
      const button = getByTestId('submitButton')
  
      expect(form).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(password).toBeInTheDocument()
    })
})