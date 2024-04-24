import {http, HttpResponse} from "msw";

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([{ name: 'John Doe' }, { name: 'Jane Doe' }], {
            status: 200
        });
    })
];

export const errorHandlers = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json(null, {
            status: 401,
            statusText: 'Unauthenticated'
        });
    })
];