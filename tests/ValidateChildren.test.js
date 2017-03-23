import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ValidateChildren } from '../src/utils';

describe('ValidateChildren util', () => {

  const children = <div>test</div>;
  const wrapper = ValidateChildren(children, 'test');

  it('should exist and be healthy', () => {
    expect(wrapper).to.not.equal(null);
    expect(wrapper).to.not.equal(undefined);
  });

});
