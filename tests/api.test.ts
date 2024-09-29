import { busTrackingService } from '../src/logic/bus-tracking/bus-tracking';

describe('Test leftovers on a bus', () => {
  it('Tell how many passengers left happy path', async () => {
    const array = [{in: 3,out:0},{in:0, out:3}]
    expect(busTrackingService.claculateLeftovers(array)).toBe(0);
  });
});

describe('Test empty array', () => {
  it('Test empty array of stops', async () => {
    const array:any = []
    expect(busTrackingService.claculateLeftovers(array)).toBe(0);
  });
});

describe('Test empty on a bus', () => {
  it('Tell how many passengers left when the bus is empty', async () => {
    const array = [{in: 0,out:0}]
    expect(busTrackingService.claculateLeftovers(array)).toBe(0);
  });
});

describe('Test full bus', () => {
  it('Tell how many passengers left when the bus is full', async () => {
    const array = [{in: 5,out:0},{in: 7,out:0},{in: 8,out:0},{in: 6,out:0},{in: 4,out:0}]
    expect(busTrackingService.claculateLeftovers(array)).toBe(30);
  });
});

describe('Test wrong input', () => {
  it('Test wrong input inserted', async () => {
    const array = ""
    // @ts-ignore: testing wrong input
    expect(() => busTrackingService.claculateLeftovers(array)).toThrow(TypeError);
  });
});

