import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DescriptionProduct from './DescriptionProduct'

describe('DescriptionProduct', () => {
    let component;

    it('test of product descriptions with price', () => {
        const description = {
            Brand: 'Acer',
            Model: 'Liquid Zest Plus',
            Price: 200,
            Os: 'Android 6.0 (Marshmallow)',
            Cpu: 'Quad-core 1.3 GHz Cortex-A53',
            Ram: '2 GB RAM'
        }

        component = render(<DescriptionProduct description={description}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Acer Liquid Zest Plus');
        component.getByText('200 €');
        component.getByText('Android 6.0 (Marshmallow)')
        component.getByText('Quad-core 1.3 GHz Cortex-A53')
        component.getByText('2 GB RAM')

    })

    it('test of product descriptions without price', () => {
        const description = {
            Brand: 'Acer',
            Model: 'Liquid M330',
            Price: '',
            Os: 'Microsoft Windows 10',
            Cpu: 'Quad-core 1.0 GHz Cortex-A7',
            Ram: '1 GB RAM'
        }

        component = render(<DescriptionProduct description={description}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Acer Liquid M330');
        component.getByText('Price not available');
        component.getByText('Microsoft Windows 10')
        component.getByText('Quad-core 1.0 GHz Cortex-A7')
        component.getByText('1 GB RAM')
    })
})