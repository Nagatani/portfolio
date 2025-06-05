import { render, screen } from '@testing-library/svelte';
import SimpleGreeting from './SimpleGreeting.svelte';

describe('SimpleGreeting', () => {
  it('renders a greeting message with the default prop', () => {
    render(SimpleGreeting);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders a greeting message with a provided prop', () => {
    render(SimpleGreeting, { props: { name: 'Vitest' } });
    expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument();
  });
});
