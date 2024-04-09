## React Testing Library (RTL)

### [Queries](https://testing-library.com/docs/queries/about#overview)

Queries are the methods that Testing Library gives you to find (select) elements
on the page.

type of queries:

| Type of Query        | No Match      | 1 Match         | \>1 Match    | Retry (Async/Await) |
|----------------------|---------------|-----------------|--------------|---------------------|
| **Single Element**   |               |                 |              |                     |
| `getBy...`           | Throw error   | Return element	 | Throw error  | No                  |
| `queryBy...`         | Return `null` | Return element	 | Throw error  | No                  |
| `findBy...`          | Throw error   | Return element	 | Throw error  | Yes                 |
| **Multiple Element** |               |                 |              |                     |
| `getAllBy...`        | Throw error   | Return array    | Return array | No                  |
| `queryByAll...`      | Return `[]`   | Return array    | Return array | No                  |
| `findByAll...`       | Throw error   | Return array    | Return array | Yes                 |

### [Priority](https://testing-library.com/docs/queries/about#priority)

your test should resemble how users interact with your code (component, page, etc.) as much as possible.

With this in mind, we recommend this order of priority:

| Priority                                                                                        |
|-------------------------------------------------------------------------------------------------|
| **Queries Accessible to Everyone** (visual/mouse)                                               | 
| 1: getByRole `example: getByRole('button', {name: /submit/i})`                                  |
| 2: getByLabelText  `good for form fields.`                                                      |
| 3: getByPlaceholderText                                                                         |
| 4: getByText `Can be used to find non-interactive elements (like divs, spans, and paragraphs).` |
| 5: getByDisplayValue                                                                            |
| **Semantic Queries** (Screen-readers)                                                           | 
| 1: getByAltText  `Find the element by alt  atribiute.`                                          | 
| 2: getByTitle                                                                                   | 
| **Test IDs**                                                                                    |
| 1: getByTestId                                                                                  |





