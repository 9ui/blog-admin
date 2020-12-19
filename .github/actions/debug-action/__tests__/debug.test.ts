import * as core from '@actions/core';
import run from '../debug';

beforeEach(() => {
  jest.resetModules();
  process.env['INPUT_AMAZING-CREATURE'] = 'person';
});

afterEach(() => {
  delete process.env['INPUT_AMAZING-CREATURE'];
});

describe('debug action debug messages', () => {
  it('outputs a debug message', async () => {
    const debugMock = jest.spyOn(core, 'debug');
    await run();
    expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌');
  });
});
