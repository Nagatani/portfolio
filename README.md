# ポートフォリオサイト
## デプロイ先

https://nagatani.me/

## Testing

This project uses [Vitest](https://vitest.dev/) for unit and component testing, along with [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro) for testing Svelte components.

### Running Tests

- To run all tests once:
  ```bash
  npm test
  ```

- To run tests in watch mode (re-runs tests on file changes):
  ```bash
  npm run test:watch
  ```

### Writing Tests

Test files should be created with the `.test.ts` or `.spec.ts` extension (e.g., `MyComponent.test.ts`).
Tests are typically placed alongside the component they are testing or in a dedicated `__tests__` directory.

Here's a basic example of a test for a Svelte component (`src/App.test.ts`):

```typescript
import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';
// Import mocks or setup files if necessary
// Example: vi.mock('./path/to/module', () => ({ ... }));

describe('App.svelte', () => {
  it('renders without crashing', () => {
    render(App);
    // Add assertions here, for example:
    // expect(screen.getByText('Some Text')).toBeInTheDocument();
  });
});
```

For more complex scenarios, especially those involving routing or external stores, you might need to mock dependencies. Refer to the `src/App.test.ts` for an example of how `@roxi/routify` was mocked.
