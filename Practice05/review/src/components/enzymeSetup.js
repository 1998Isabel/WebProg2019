import * as Adapter from 'enzyme-adapter-react-16';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });