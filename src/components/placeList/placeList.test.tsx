

import React from 'react';

import Enzyme, { shallow  } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import PlaceList from './placeList';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new EnzymeAdapter() });

interface dataObject {
    key: any;
    name: string;
    image: any
  }
const mainProps = {
    places: dataObject[];
    placeSelected: (e: any) => any;
};
//setup is factory function to create shallow wrapper or videoplayer components
const setup = (props = {}, state = null) => {
  return shallow(<PlaceList {...mainProps} />);
};

const findByTestAtribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render withot carashing', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy(); // it will return true (not empthy string, undefined or null)
  const videoPlayerComponent = findByTestAtribute(
    wrapper,
    'component-video-player'
  );
  expect(videoPlayerComponent.length).toBe(1);
});

test('render video if there is any video URL ', () => {
  const wrapper = setup();
  const video = findByTestAtribute(wrapper, 'video');
  expect(video.length).toBe(1);
});

it('render correctly video component', () => {
  const wrapper = setup();
  const videoComponent = renderer.create(wrapper).toJSON();
  expect(videoComponent).toMatchSnapshot();
});




// const createTestProps = (props: object) => ({
//     ...props
//   });
  
//   describe("App", () => {
//     const props = createTestProps({});
//     const wrapper = shallow(<App {...props} />);
                                 
//     describe("rendering", () => {
//       it("should render a <View />", () => {
//         expect(wrapper.find("View")).toHaveLength(1);
//       });
//     });
//   });