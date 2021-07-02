import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DescriptionItem from './DescriptionItem'

describe('DescriptionItem', () => {
    let component, description;


    it('test of item descriptions with prices', () => {
        description = {
            brand: 'Acer',
            model: 'Liquid Z6 Plus',
            price: 250
        }

        component = render(<DescriptionItem description={ description }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Acer');
        component.getByText('Liquid Z6 Plus');
        component.getByText('250€')
    })

    it('test of unpriced item descriptions', () => {
        description = {
            brand: 'Acer',
            model: 'Liquid M320',
            price: ''
        }

        component = render(<DescriptionItem description={ description }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Acer');
        component.getByText('Liquid M320');
        component.getByText('Price not available')
    })
})