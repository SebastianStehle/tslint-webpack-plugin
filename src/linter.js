const { Runner } = require('tslint/lib/runner');
const path = require('path');
const chalk = require('chalk');

process.stdout.write(chalk.cyan('[tslint-plugin] Starting linter in separate process...\n'));

const files = JSON.parse(process.argv[2]) || [];

if (!files.length) {
  process.stdout.write(chalk.yellow.bold('\n[tslint-plugin] Incorrect `files` argument.\n\n'));
  process.exit();
}

const runner = new Runner({
  files,
  format: 'custom',
  formattersDirectory: path.join(__dirname, 'formatters')
}, process.stdout);

runner.run(() => {
  process.stdout.write(chalk.green('[tslint-plugin] Linting complete.\n'));
  process.exit();
});
