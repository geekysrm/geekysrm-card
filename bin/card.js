#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Soumya Ranjan Mohanty /'),
  handle: chalk.cyan('geekysrm'),
  work: chalk.white('Full stack web developer, Google certified MWS'),
  twitter: chalk.cyan('https://twitter.com/geekysrm'),
  medium: chalk.cyan('https://medium.com/@geekysrm'),
  github: chalk.cyan('https://github.com/geekysrm'),
  linkedin: chalk.cyan('https://linkedin.com/in/geekysrm'),
  web: chalk.cyan('https://soumya.dev'),
  npx: chalk.white('npx geekysrm'),
  labelWork: chalk.white.bold('      About me:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelMedium: chalk.white.bold('   Medium:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + mediuming + newline+linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
