import { configure } from 'enzyme';
import { GlobalWithFetchMock } from 'jest-fetch-mock';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;