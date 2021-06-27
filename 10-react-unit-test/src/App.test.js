// test file
import { shallow } from 'enzyme';
import App from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
let wrapper;

describe("Component should render", () => {
  it("should match snapshot", () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
