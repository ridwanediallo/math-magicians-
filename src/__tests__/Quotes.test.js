import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

it('Displays the quote correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
