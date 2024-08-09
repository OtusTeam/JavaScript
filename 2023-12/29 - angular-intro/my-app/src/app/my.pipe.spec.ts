import { MyPipe } from './my.pipe';

describe('MyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipe();
    expect(pipe).toBeTruthy();
  });
});
