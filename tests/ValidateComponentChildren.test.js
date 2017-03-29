import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ValidComponentChildren } from '../src/utils';

describe('ValidComponentChildren util', () => {

  it('should exist and be healthy', () => {
    expect(ValidComponentChildren).to.not.equal(null);
    expect(ValidComponentChildren).to.not.equal(undefined);
  });

  it('should have a healthy map func', () => {
    const child = <div>test</div>;
    const orig = ValidComponentChildren.map;
    const func = sinon.spy(ValidComponentChildren.map);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
  });

  it('should have a healthy forEach func', () => {
    const child = [<div />];
    const testFn = sinon.spy();
    const orig = ValidComponentChildren.forEach;
    const func = sinon.spy(ValidComponentChildren.forEach);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(child, testFn)).to.equal(undefined);
    expect(testFn.called).to.equal(true);
  });

  it('should have a healthy count func', () => {
    const childs = [<div />, <div />];
    const orig = ValidComponentChildren.count;
    const func = sinon.spy(ValidComponentChildren.count);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(childs)).to.equal(2);
  });

  it('should have a healthy filter func', () => {
    const children = [<div />, <div />];
    const testFn   = sinon.spy();
    const orig = ValidComponentChildren.filter;
    const func = sinon.spy(ValidComponentChildren.filter);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(children, testFn).length).to.equal(0);
    expect(testFn.called).to.equal(true);
  });

  it('should have a healthy find func', () => {
    const children = [<div />, <span />, <div />];
    const testFn = sinon.spy();
    const orig = ValidComponentChildren.find;
    const func = sinon.spy(ValidComponentChildren.find);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(children, testFn, {})).to.equal(undefined);
    expect(testFn.called).to.equal(true);
  });

  it('should have a healthy every func', () => {
    const children = [<div />, <span />, <div />];
    const testFn = sinon.spy();
    const orig = ValidComponentChildren.every;
    const func = sinon.spy(ValidComponentChildren.every);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(children, testFn, {})).to.equal(false);
    expect(testFn.called).to.equal(true);
  });

  it('should have a healthy some func', () => {
    const children = [<div />, <span />, <div />];
    const testFn = sinon.spy();
    const orig = ValidComponentChildren.some;
    const func = sinon.spy(ValidComponentChildren.some);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(children, testFn, {})).to.equal(false);
    expect(testFn.called).to.equal(true);
  });

  it('should have a healthy toArray func', () => {
    const child = <div>test</div>;
    const orig = ValidComponentChildren.toArray;
    const func = sinon.spy(ValidComponentChildren.toArray);

    expect(orig).to.not.equal(null);
    expect(orig).to.not.equal(undefined);
    expect(func.threw).to.not.equal(true);
    expect(orig(child).length).to.not.equal(0);
    expect(orig(child).length).to.equal(1);
  });

});
