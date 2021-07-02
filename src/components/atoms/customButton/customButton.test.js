import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CustomButton from './CustomButton'

describe('<CustomButton />', () => {
    let component;
    const mockHandler = jest.fn()

    it('No action is taken when the button is disabled', () => {
        const props = {
            enableAddButton: false,
            text: 'Add'
        }

        component = render(<CustomButton {...props} />)

        const button = component.getByText('Add');
        expect(component.getByRole('button')).toBeDisabled();

        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(0)
    })

    it('Actions are performed when the button is enabled', () => {
        const props = {
            enableAddButton: true,
            text: 'Add'
        }

        component = render(<CustomButton {...props} addCart={mockHandler}/>)

        const button = component.getByText('Add')
        expect(component.getByRole('button')).not.toBeDisabled()
        fireEvent.click(button)

        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})

