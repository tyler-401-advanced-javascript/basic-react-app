import React from 'react'
import App from './'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

//this is why it fails when you change the snapshot
describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('is alive at application start', () => {
    const component = shallow(<App />)
    expect(component.find('h1')).toExist()
  })
})
