/**
 * Created by rpanos on 8/28/17.
 */
import React from 'react';
import ToolItem from '../static/js/ToolList/ToolItem';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';


//import {shallow} from 'enzyme';


//test('ToolItem changes class after click', () => {
//  const component = shallow(
//    <ToolItem title={"React"}  choiceId={1} />
//  );
//
//  //expect(checkbox.text()).toEqual('Off');
//
//  component.find('.thumb-up').simulate('click');
//
//  expect(component.find('.tool-item-choices').hasClass('pos-choice')).to.equal(true);
//
//  component.find('.thumb-up').simulate('click');
//
//  expect(component.find('.tool-item-choices').hasClass('neutral')).to.equal(true);
//
//});


describe('ToolItem changes class after click', () => {
  const component = shallow(
    <ToolItem title={"React"}  choiceId={1} />
  );

    it('first click to thumbs up, we expect pos class', () => {
        component.find('.thumb-up').simulate('click');
        expect(component.find('.tool-item-choices').hasClass('pos-choice')).to.equal(true);
    });
    it('second click to thumbs up, we expect neutral class', () => {
        component.find('.thumb-up').simulate('click');
        expect(component.find('.tool-item-choices').hasClass('neutral')).to.equal(true);
    });
    it('third click to thumbs up, we expect pos class again', () => {
        component.find('.thumb-up').simulate('click');
        expect(component.find('.tool-item-choices').hasClass('pos-choice')).to.equal(true);
    });
    it('fourth click to thumbs DOWN, we expect neg class', () => {
        component.find('.thumb-down').simulate('click');
        expect(component.find('.tool-item-choices').hasClass('neg-choice')).to.equal(true);
    });
});