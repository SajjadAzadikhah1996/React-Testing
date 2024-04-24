By default, jest runs tests in Node environment. Therefore, depending on your
packages and configuration, fetch may not be available in your tests.
Therefore, the solution is to add fetch in the test environment.