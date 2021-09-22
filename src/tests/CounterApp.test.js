import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp'


describe('Test <CounterApp />', () => {
    let wrapper = shallow( <CounterApp />);
    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    });
    test('should show <CounterApp /> success', () => {  
        expect( wrapper ).toMatchSnapshot();
    });

    test('should return value 100', () => {
        const value = 100;
        const wrapper = shallow( 
            <CounterApp 
                value={value}
            />
        ); 
        const count = wrapper.find('h2').text().trim(); 
        expect( count ).toBe( `${value}` );
    })
    
    test('should handle click add', () => {
        wrapper.find('button').at(0).simulate('click');
        const count = wrapper.find('h2').text().trim(); 
        expect( count ).toBe( '11' );
    })

    test('should handle click subtract', () => {
        wrapper.find('button').at(2).simulate('click');
        const count = wrapper.find('h2').text().trim(); 
        expect( count ).toBe( '9' );
    })

    test('should handle click reset', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const count = wrapper.find('h2').text().trim(); 
        expect( count ).toBe( '10' );
    })
    
});
