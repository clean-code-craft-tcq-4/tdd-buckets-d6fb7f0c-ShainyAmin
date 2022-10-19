const range = require('../src/range');
const {expect} = require('chai');

describe('sort', () => {
  it('should exists', () => {
    expect(range.sort).to.exist;
  });
  it('should return sorted list', () => {
    const mockData = [7, 2, 6, 9, 5, 1];
    expect(range.sort(mockData)).to.deep.equals([1, 2, 5, 6, 7, 9]);
  });
});
describe('formatJson', () => {
  it('should exist', () => {
    expect(range.formatJson).to.exist;
  });
  it('should format json', () => {
    expect(range.formatJson('2-3', 3)).to.equal('2-3, 3');
  });
});

describe('checkIfCountinous', () => {
  it('should return true for continous numbers', () => {
    expect(range.checkIfCountinous(10, 9)).to.be.true;
  });
  it('should return true for same numbers', () => {
    expect(range.checkIfCountinous(5, 5)).to.be.true;
  });
  it('should return false for non-continous numbers', () => {
    expect(range.checkIfCountinous(15, 13)).to.be.false;
  });
});


describe('range', () => {
  it('should exist', () => {
    expect(range.getRange).to.exist;
  });
  it('should return range pairs', () => {
    let mockData = [4, 5];
    expect(range.getRange(mockData)).to.include({'4-5': 2});
    mockData = [3, 3, 5, 4, 10, 11, 12];
    expect(range.getRange(mockData)).to.include({
      '3-5': 4,
      '10-12': 3,
    });
  });
  it('should return range pairs for single input', () => {
    const mockData = [4];
    expect(range.getRange(mockData)).to.include({'4-4': 1});
  });
  it('should return range pairs for 2 value input', () => {
    const mockData = [4, 4];
    expect(range.getRange(mockData)).to.include({'4-4': 2});
  });
});
