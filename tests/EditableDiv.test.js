import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { EditableDiv, Input } from 'src';


describe('<EditableDiv />', () => {

  const props = {
    dataId: 1234,
    divContent: 'test content',
    name: 'description',
    readOnly: false,
    theme: 'accent',
    type: 'number',
    onUpdate: sinon.spy()
  };

  const defaultWrapper = mount(<EditableDiv />);
  const wrapper = mount(<EditableDiv { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditableDiv />, div);
  });

  // PROPS

  it('should have a default dataId prop', () => {
    const prop = defaultWrapper.props().dataId;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(null);
  });

  it('should accept a dataId prop', () => {
    const prop = wrapper.props().dataId;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('1234');
    expect(prop).to.equal(props.dataId);
  });

  it('should have a default divContent prop', () => {
    const prop = defaultWrapper.props().divContent;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('no content');
  });

  it('should accept a divContent prop', () => {
    const prop = wrapper.props().divContent;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.not.equal('no content');
    expect(prop).to.equal(props.divContent);
  });

  it('should have a default name prop', () => {
    const prop = defaultWrapper.props().name;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal('');
  });

  it('should accept a name prop', () => {
    const prop = wrapper.props().name;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.name);
  });

  it('should have a default theme prop', () => {
    const prop = defaultWrapper.props().theme;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(null);
  });

  it('should accept a theme prop', () => {
    const prop = wrapper.props().theme;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.theme);
  });

  it('should have a default readOnly prop', () => {
    const prop = defaultWrapper.props().readOnly;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.equal(false);
  });

  it('should accept a readOnly prop', () => {
    const prop = wrapper.props().readOnly;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.readOnly);
  });

  it('should have a default type prop', () => {
    const prop = defaultWrapper.props().type;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('text');
  });

  it('should accept a type prop', () => {
    const prop = wrapper.props().type;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('text');
    expect(prop).to.equal(props.type);
  });

  it('should have a default onUpdate prop', () => {
    const prop = defaultWrapper.props().onUpdate;
    const result = console.log('add onUpdate prop');
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop()).to.equal(result);
  });

  it('should accept a onUpdate prop', () => {
    const prop = wrapper.props().onUpdate;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
  });

  // STATE

  it('should have a default isEditing state', () => {
    const state = defaultWrapper.state().isEditing;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  it('should have a default showSaved state', () => {
    const state = defaultWrapper.state().showSaved;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  it('should have a default textChanged state', () => {
    const state = defaultWrapper.state().textChanged;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('');
  });

  // COMPONENT

  it('should add a special theme class if theme prop given', () => {
    const el = wrapper.find('.accent').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should display "no content" if divContent is an empty String', () => {
    const newWrapper = mount(<EditableDiv divContent="" />);
    const text = newWrapper.find('.EditableDiv-text').text();
    expect(text).to.not.equal('');
    expect(text).to.equal('no content');
  });

  it('should not have an input on render', () => {
    const defaultEl = defaultWrapper.find('input').length;
    const el = wrapper.find('input').length;

    expect(defaultEl).to.not.equal(1);
    expect(defaultEl).to.equal(0);
    expect(el).to.not.equal(1);
    expect(el).to.equal(0);
  });

  it('should return a <DotLoader /> if divContent is null', () => {
    const newWrapper = mount(<EditableDiv divContent={ null } />);
    const dotEl = newWrapper.find('.DotLoader').length;
    const el = newWrapper.find('.EditableDiv').length;

    expect(dotEl).to.not.equal(0);
    expect(dotEl).to.equal(1);
    expect(el).to.not.equal(1);
    expect(el).to.equal(0);
  });

  it('should not return a <DotLoader /> if divContent is an empty String', () => {
    const newWrapper = mount(<EditableDiv divContent="" />);
    const dotEl = newWrapper.find('.DotLoader').length;
    const el = newWrapper.find('.EditableDiv').length;

    expect(dotEl).to.not.equal(1);
    expect(dotEl).to.equal(0);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should update isEditing to true onClick', () => {
    expect(wrapper.state().isEditing).to.equal(false);
    expect(wrapper.find('.EditableDiv-text').length).to.equal(1);
    wrapper.find('.EditableDiv-text').simulate('click');
    expect(wrapper.state().isEditing).to.equal(true);
  });

  it('should return an input from _getInputContent', () => {
    const func = wrapper.instance()._getInputContent;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(func()).to.not.equal(null);
    expect(func()).to.not.equal(undefined);
  });

  it('should return an input from _getTextContent', () => {
    const func = wrapper.instance()._getTextContent;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(func()).to.not.equal(null);
    expect(func()).to.not.equal(undefined);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._handleNumSave;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(false);
      expect(wrapper.state().showSaved).to.equal(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._handleTextSave;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(false);
      expect(wrapper.state().showSaved).to.equal(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the isEditing & textChanged state when run', () => {
    const func = wrapper.instance()._onReset;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({
      isEditing: true,
      textChanged: ''
    });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(true);
      expect(wrapper.state().textChanged).to.equal(props.divContent);
    }, 400);
  });

  it('should update the state and call onUpdate prop when run', () => {
    const func = wrapper.instance()._onUpdate;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ textChanged: 10 });

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(false);
      expect(wrapper.state().showSaved).to.equal(true);
      expect(props.onUpdate).toHaveBeenCalled();
      expect(props.onUpdate).toHaveBeenCalledTimes(1);
    }, 400);
  });

  it('should update the textChanged state to args given', () => {
    const func = wrapper.instance()._handleInput;
    const textChanged = 'new text';

    wrapper.setState({ textChanged: '' });

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func(textChanged);

    setTimeout(() => {
      expect(wrapper.state().textChanged).to.equal(textChanged);
    }, 400);

    // reset state
    wrapper.setState({ textChanged: '' });
  });

  it('should return _handleSave if keypress === "enter"', () => {
    const e = { key: 1 };
    const spy = sinon.spy(wrapper.instance()._handleKeyPress(e));
    const result = sinon.spy(wrapper.instance()._handleSave);

    expect(wrapper.instance()._handleKeyPress(e)).to.not.equal(null);
    spy.returned(result);
  });

  it('should update the isEditing state to false', () => {
    const func = wrapper.instance()._hideEditing;

    wrapper.setState({ isEditing: true });

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(false);
    }, 400);
  });

  it('should return a new state from _hideShowSaved', () => {
    const func = wrapper.instance()._hideShowSaved;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ showSaved: true });

    func();

    setTimeout(() => {
      expect(wrapper.state().showSaved).to.equal(true);
    }, 400);

    expect(wrapper.state().showSaved).to.equal(false);
  });

  it('should return a new state from _showEditing', () => {
    const func = wrapper.instance()._showEditing;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ showSaved: false });
    wrapper.setProps({ readOnly: false });
    func();

    setTimeout(() => {
      expect(wrapper.state().isEditing).to.equal(true);
    }, 400);
  });

  it('should update the state when input is changed', () => {
    const newWrapper = mount(<EditableDiv divContent="test content" />);
    const selectorInput = '.Input';
    let thisInput = null;

    newWrapper.find('.EditableDiv-text').simulate('click');
    thisInput = newWrapper.find(selectorInput);

    expect(thisInput.length).to.equal(1);
    expect(newWrapper.state().textChanged).to.equal('');

    newWrapper.instance()._handleInput('A new hope');
    expect(newWrapper.state().textChanged).to.equal('A new hope');
  });

  it('should be able to save when pressing enter key', () => {
    const newWrapper = mount(
      <EditableDiv
        dataId={ 1234 }
        divContent="test content"
        name="description"
        onUpdate={ props.updateItem }
      />
    );

    const inputSelector = newWrapper.find('.Input');
    let newInput = null;

    expect(inputSelector.length).to.not.equal(1);
    expect(inputSelector.length).to.equal(0);

    // activate editing mode
    newWrapper.find('.EditableDiv-text').simulate('click');
    newInput = newWrapper.find('.Input');

    expect(newInput.length).to.not.equal(0);
    expect(newInput.length).to.equal(1);

    // press the Enter key
    newInput.simulate('keypress', { keyCode: 13 });

    // make sure the isEditing class is not applied
    expect(inputSelector.length).to.not.equal(1);
    expect(inputSelector.length).to.equal(0);
  });

  it('should be able to save onBlur', () => {
    const newWrapper = mount(<EditableDiv divContent="test" />);
    const selector = '.Input';
    let thisInput = null;

    expect(newWrapper.find(selector).length).to.not.equal(1);
    expect(newWrapper.find(selector).length).to.equal(0);

    // go into edit mode
    newWrapper.find('.EditableDiv-text').simulate('click');
    thisInput = newWrapper.find(selector);
    expect(thisInput.length).to.not.equal(0);
    expect(thisInput.length).to.equal(1);

    expect(newWrapper.state().textChanged).to.equal('');
    newWrapper.instance()._handleInput('There is no hope');
    expect(newWrapper.state().textChanged).to.equal('There is no hope');

    // blur the input newWrapper
    thisInput = newWrapper.find(selector);
    thisInput.simulate('blur');
  });

});
