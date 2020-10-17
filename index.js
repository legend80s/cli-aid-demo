const { CLI } = require('cli-aid');

new CLI({ name: 'tinify-client', version: '2.0.0' })
  .option('max-count', 'm', { to: CLI.toNumber, defaultVal: 15, help: 'The max compressing turns. Default 15.' })
  .parse(process.argv.slice(2));
