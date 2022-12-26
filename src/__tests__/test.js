import getBuffer from '../js/app';
import ArrayBufferConverter from '../js/ArrayBufferConverter';

test('test 1', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});