import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  // Describe the requests to mock.
  rest.get('/book/:bookId', (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        author: 'J. R. R. Tolkien',
      }),
    )
  }),
)

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})

test('renders a book data', () => {
  // Render components, perform requests, API communication is covered.
})


// import { rest } from "msw";
// import { setupServer } from "msw/node";

// const server = setupServer(
//   // testing
//   rest.get("/test", (req, res, ctx) => {
//     return res(ctx.json({ ok: true }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test("empty", async () => {
//   const res = await fetch("/test");
//   const json = await res.json();
//   expect(json.ok).toBe(true);
// });
