import testData from './testData';
import ApiCrosswalk from './model/ApiCrosswalk'

console.log(testData);
const MockData = new ApiCrosswalk(testData);

export default MockData;
