import * as core from '@actions/core';

const run = async (): Promise<void> => {
  //   const creature = core.getInput('amazing-creature');
  core.debug(`👋 Hello! You are an amazing person! 🙌`);
};

run();

export default run;
