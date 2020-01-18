import expect from 'expect';

import fixUrlProtocol from './fixUrlProtocol';

describe('fixUrlProtocol:', () => {
  it('Should add http if there\'s no protocol specified', () => {
    const input = 'google.com';
    const output = 'http://google.com';
    expect(fixUrlProtocol(input)).toEqual(output);
  });
});
