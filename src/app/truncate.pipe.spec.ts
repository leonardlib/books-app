import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    // arrange
    const pipe = new TruncatePipe();

    // assert
    expect(pipe).toBeTruthy();
  });

  it('should truncate longer text', () => {
    // arrange
    const text =
      "King said to herself. Imagine her surprise, when the Rabbit came up to the Gryphon. 'How the creatures order one about, and called out 'The Queen! The Queen!' and the Queen said to one of the words.";
    const expected =
      "King said to herself. Imagine her surprise, when the Rabbit came up to the Gryphon. 'Ho...";
    const pipe = new TruncatePipe();

    // act
    const result = pipe.transform(text);

    // assert
    expect(result).toEqual(expected);
  });
});
