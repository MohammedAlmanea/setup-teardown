import strings from '../../utilities/strings';

describe('testing strings.ts functions', () => {
  describe('function capitalize capitalize a string', () => {
    it('should capitalize a string', () => {
      expect(strings.capitalize('a sentence')).toEqual('A Sentence');
    });
    it('should allow sentence to remain capitalized', () => {
      expect(strings.capitalize('A Sentence')).toEqual('A Sentence');
    });
  });
});
