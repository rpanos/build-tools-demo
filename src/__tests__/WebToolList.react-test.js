/**
 * Created by rpanos on 8/28/17.
 */

import React from 'react';
import ToolItem from '../static/js/ToolList/ToolItem';
import WebToolList from '../static/js/ToolList/WebToolList';
import { mount, shallow } from 'enzyme';

require('isomorphic-fetch');

describe('ToolItem changes class after clicks', () => {
    const component = mount(
        <WebToolList initialListLen={5} initialAnswerLen={3} dataUrl="http://localhost:3000/get-list"/>
    );

    it('updateChoice called three times, updates state: choiceCount', () => {

        setTimeout(() => {
            webToolListTestsA0();
            webToolListTestsA1();

            it('after updateChoice called three times, the length of items should be 10 after the second call', () => {
                setTimeout(() => {
                    webToolListTestsA3();
                }, 500);
            });

        }, 500);

        function webToolListTestsA0() {
            expect(component.state().items.length).toEqual(5);
        }

        function webToolListTestsA1() {
            expect(component.state().choiceCount).toEqual(0);
            component.instance().updateChoice('pos', 1);
            expect(component.state().choiceCount).toEqual(1);
            component.instance().updateChoice('pos', 3);
            expect(component.state().choiceCount).to.equal(2);
            component.instance().updateChoice('pos', 0);
            expect(component.state().choiceCount).to.equal(3);
        }

        function webToolListTestsA3() {
            expect(component.state().items.length).toEqual(5);
        }
    });
});
//
//it('fetches forks from GitHub', () => {
//    const rendered = TestUtils.renderIntoDocument(
//        <Detail params={{repo: 'react'}} />
//    );
//
//    waitsFor(() => {
//        console.log('In waitFor: ' + rendered.state.forks.length);
//        return rendered.state.forks.length > 0;
//    }, "commits to be set", 2000);
//
//    runs(() => {
//        expect(rendered.state.forks.length).toEqual(30);
//    });
//});

describe('ToolItem length changes after updateList is called', () => {
      const component2 = mount(
        <WebToolList initialListLen={5} initialAnswerLen={3} dataUrl="http://localhost:3000/get-list"/>
      );

    it('updateList is called, updates state: items', () => {

        setTimeout(() => {
                webToolListTestsB0();
                component2.instance().updateList(8);

                it('after updateChoice called three times, the length of items should be 10 after the second call', () => {
                    setTimeout(() => {
                        webToolListTestsB3();
                    }, 500);
                });

            }, 500);

        function webToolListTestsB0() {
            expect(component2.state().items.length).toEqual(5);
        }

        function webToolListTestsB3() {
            expect(component2.state().items.length).toEqual(8);
        }
    });

});
