/**
 * Created by rpanos on 8/28/17.
 */

import React from 'react';
import ToolItem from '../static/js/ToolList/ToolItem';
import WebToolList from '../static/js/ToolList/WebToolList';
import { mount, shallow } from 'enzyme';

require('isomorphic-fetch')

describe('ToolItem changes class after clicks', () => {
      const component = mount(
        <WebToolList initialListLen={5} initialAnswerLen={3} dataUrl="http://localhost:3000/get-list"/>
      );

    it('updateChoice called three times, updates state: choiceCount', () => {

        setTimeout(() => {
            console.log('Times up -- stop!');
                webToolListTests1();
            }, 500);

        function webToolListTests1() {
            expect(component.state().choiceCount).toEqual(0);
            component.instance().updateChoice('pos', 1);
            expect(component.state().choiceCount).toEqual(1);
            component.instance().updateChoice('pos', 3);
            expect(component.state().choiceCount).to.equal(2);
            component.instance().updateChoice('pos', 0);
            expect(component.state().choiceCount).to.equal(3);
        }
    });

});

