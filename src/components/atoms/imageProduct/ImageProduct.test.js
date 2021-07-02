import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ImageProduct from './ImageProduct'

describe('ImageProduct', () => {
    let component;

    it('', () => {
        const image = 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'

        component = render(<ImageProduct image={image}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();
    })
})