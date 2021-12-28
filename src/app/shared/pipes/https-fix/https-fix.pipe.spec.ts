import { HttpsFixPipe } from './https-fix.pipe'

describe('Pipe: Http Fix', () => {
  let pipe: HttpsFixPipe;

  beforeEach(() => {
    pipe = new HttpsFixPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });

  it('providing a value returns value', () => {
    expect(pipe.transform('http://place-hold.it/300', 'fallback')).toBe('http://place-hold.it/300');
  });

  it('asking for https returns https', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
  });
});