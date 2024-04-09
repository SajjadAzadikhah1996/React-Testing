## Code Coverage

A metric that can help you understand how much of your software code is tested .
It indicates that test coverage information should be collected and reported in the output.

* Statement coverage: how many of the statements in the software code have been executed.
* Branches coverage: how many of the branches of the control structures (if statements for instance)
* Function coverage: how many of the functions defined have been called and finally.
* Line coverage: how many of lines of source code have been tested.

run `npx jest --coverage` or `jest --coverage` to see result of coverage.

When you run the command you will found an index.html file in the coverage folder, that
could be loaded into a browser. It included the information printed at the command line,
plus additional information and some graphical output.