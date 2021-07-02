import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Selector from './Selector'

describe('Selector', () => {
    let component, options, name, selected;

    const mockHandler = jest.fn()

    it('multiple options in the selector', () => {
        name = 'colors';
        options = [
            {
                code: 1000,
                name: 'Black'
            },
            {
                code: 1001,
                name: 'White'
            }
        ]
        selected = ""

        component = render(<Selector name={name} options={options} value={selected} onChange={mockHandler}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('colors');
        component.getByText('Black');
        component.getByText('White');
    })

    it('unique option in the selector', async () => {
        name = 'storages';
        options = [
            {
                code: 2000,
                name: '8 GB'
            }
        ];
        selected = 2000;

        component = render(<Selector name={name} options={options} value={selected} onChange={mockHandler}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();
        expect(mockHandler).toHaveBeenCalledTimes(0)

        component.getByText('8 GB');

    })
})