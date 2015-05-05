exports.config = {

  baseUrl: 'https://www.zumba.com',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    // require your step definitions
    require: ['features/steps/*_steps.js'],
    format: 'pretty',
  },

};
