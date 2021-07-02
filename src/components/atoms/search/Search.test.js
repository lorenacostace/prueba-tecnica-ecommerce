import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Search from './Search'

describe('Search', () => {
    let component;
    const mockHandler = jest.fn()

    it('', () => {
        component = render(<Search updateFilter={ (value) => mockHandler(value) }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        const input = component.getByPlaceholderText('Search')

        fireEvent.change(input, { target: { value: 'liquid'}})
        expect(input.value).toBe('liquid')

        expect(mockHandler).toHaveBeenCalledTimes(1)

    })
})

