## Types Of Tests

* Unit Tests.
* Integration Tests.
* E2E Tests.

### Unit Test

Focus is on testing the individual building blocks of an application such as
a class or a function or a component.Each unit or building block is tested
in isolation, independent on other units.Dependencies are mocked.Run in
a short amount of time and make it very easy to pinpoint failures.
Relatively easier to write and maintain.

### Integration Test

Focus is on testing a combination of units and ensuring they work together.
It takes longer than unit tests.

### E2E Tests

Focus is on testing the entire of application flow and ensuring it works as
designed start to finish.It involves in a real UI, a real backend database,
real services etc.It takes longest as they cover the most amount of code.
It has a cost implication as you interact with real APIs that may charge
based on the number of requests.