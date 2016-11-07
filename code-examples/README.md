# Code Examples

Here are steps to use code examples.

1. Install Node.js as you download it from here for your platform https://nodejs.org/en/

> do not bother with node version managers at this stage 

2. Make sure you have it as write 'node --version' in your terminal 

3. In your terminal from code-examples folder do: 

* install dependencies with - 'npm install'

* got to subfolder with .js files and run node <FILE_NAME>


### Using scripts from package.json 

* One can run particular test suite with - 'npm run <NAME_OF_THE_SUITE>'

Where <NAME_OF_THE_SUITE> is one of the available test suites that are specified in package.json script property

**FOR WINDOWS USERS**
Please change package.json in script property replace DEBUG=* with SET DEBUG=*
**END FOR WINDOWS USERS**

## Test Runner Info

* tape is your test runner and assertion framework

> more details at: https://github.com/substack/tape
