# To get started with Playwright Test is to run the init command.
# Run from your project's root directory
npm init playwright@latest

#Run all the tests
npx playwright test

#Run a single test file
npx playwright test products.spec.js

#Run the test with the title
npx playwright test -g "Change shipping address from cart"

#Disable parallelization
npx playwright test --workers=1

#Choose a reporter
npx playwright test --reporter=dot