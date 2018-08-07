import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// call method to wire up enzyme with adapter
Enzyme.configure({
    adapter: new Adapter()
});