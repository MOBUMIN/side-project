#!/usr/bin/env node

const { program } = require('commander')

// action
program.action(cmd => console.log(`Hello, i'm subin!`))

program.parse(process.argv)