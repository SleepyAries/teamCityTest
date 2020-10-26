/**
 *
 * @flow
 */
import 'jest-styled-components';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Todo from '../todo';


Enzyme.configure({ adapter: new Adapter() });

describe('Todo Test', () => {

  const themeProps = { themeConfig: {}, themeState: {}, onLugia: () => true };
  const getPartOfThemeProps = () => true;
  const getCmp = target => {
    return target.children().instance();
  };

  it('css', () => { //快照测试用例
    const Target = <Todo />;
    expect(renderer.create(Target).toJSON()).toMatchSnapshot();
  });


  it('Function: doAddTodo ', async () => {
    const target = mount(
      <Todo
        getPartOfThemeProps={getPartOfThemeProps}
        getPartOfThemeHocProps={getPartOfThemeProps}
      />
    );
    const order = VerifyOrder.create();
    const mockGetOffset = mockObject.create(
      getCmp(target),
      VerifyOrderConfig.create('handleAdd', order)
    );

    console.log('mockGetOffset',mockGetOffset)
    // const getOffset = mockGetOffset.mockFunction('doAddTodo');
    // getOffset.forever({ offsetLeft: 76, offsetWidth: 18 });
    //
    // findRate(target, 2).simulate('click', { pageX: 80 }, 2, true);
    // expect(getCmp(target).state.value).toEqual(4);
    // expect(await changePromise).toBe(2.5);
    //
    // target.setProps({ value: 2 });
    // expect(getCmp(target).state.value).toEqual(2);
    //
    // findRate(target, 2).simulate('click', { pageX: 80 }, 2, true);
    // expect(getCmp(target).state.value).toEqual(2);
    // expect(await changePromise).toBe(2.5);
  });

});
