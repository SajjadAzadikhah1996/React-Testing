## React-Testing

### Testing

As a developer, our primary goal is to build software that works, to ensure our application
works. You want to write maintainable tests that give you high confidence that your application are working for your
users. As a part of this goal, you want your tests to avoid including implementation details so refactors of your
components (**changes to implementation but not functionality**) don't break your tests and slow you and your team down.

### Manual Testing

An individual will open the app, interact with the app and ensure everything works
as intended.If a new feature is released, you repeat the same steps.You may have to
test not only the new feature but also the existing features.

problems:

* Time-Consuming.
* Complex repetitive tasks has a risk of human error.
* You may not get a chance to test all the features you should.

### Automated Testing

Codes that automatically test our applications and report the result.If a new feature
is added, the test codes must be added for that feature as well. But there is no need to
test the previous features again.

Advantage:

* Not Time-Consuming.
* Reliable, consistent and not error prone.
* Easy to identify and fix features that break tests.
* Gives you high confidence that your application are working for your users.

## Jest vs Testing-Library

### Jest

Jest is a javascript testing framework.It's a test runner that finds tests,runs the test,determines
whether the tests passed or failed and report it back in a human-readable manner.

### Testing-Library

The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements
on the page. The [`@testing-library`](https://www.npmjs.com/org/testing-library) family of packages helps you test UI
components in a user-centric way.The core library has been wrapped to provide ergonomic APIs for several frameworks,
including React, Angular, and Vue.

### React Testing Library (RTL)

[`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro) builds on top of `DOM Testing
Library` by adding APIs for working with React components.

#### What this library is not

* A test runner or framework.
* Specific to a testing framework.

DOM Testing Library works with any environment that provides DOM APIs, such as Jest, Mocha + JSDOM, or a real browser.