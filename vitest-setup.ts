console.log('vitest-setup.ts is being executed, now with jest-dom matchers');
import '@testing-library/jest-dom/vitest';
import '@testing-library/svelte/vitest'; // This might be redundant if jest-dom/vitest covers all, but safe to keep.
