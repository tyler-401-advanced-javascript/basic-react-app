import React from 'react'
import Counter from '.'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

describe('<Counter />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('changes the state on a click', () => {
    //mount  the counter.
    const component = mount(<Counter />)

    //find a #increase
    const button = component.find('#increase')
    button.simulate('click')
    
    expect(component).toHaveState({ counter: 1 })
    expect(component.find('span')).toIncludeText('1')
  })
})
