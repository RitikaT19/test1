import {  render } from '@testing-library/react'
import React from 'react'
import Enzyme from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import  FormSignUp from '../pages/FormSignUp' 

Enzyme.configure({adapter: new Adapter()})

describe('Header test',() => {
    it('givenHeaderById_shouldRenderproperly', () =>{
        const { getByTestId } = render(<FormSignUp/>);
        const title = getByTestId('header')
        expect(title).toHaveTextContent('Get started with us! Please fill this form to register yourself!')
    })
})

describe('Register Form Test', () => {
    test('givenFormElementsById_shouldBeRenderedProperly', () => {
      const { getByTestId } = render(<FormSignUp />)
      const firstName = getByTestId('firstName')
      const lastName = getByTestId('lastName')
      
      const form = getByTestId('form')
      const email = getByTestId('email')
      const password = getByTestId('password')
      const button = getByTestId('submitButton')
  
      expect(firstName).toBeInTheDocument()
      expect(lastName).toBeInTheDocument()
      expect(form).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(password).toBeInTheDocument()
    })
})