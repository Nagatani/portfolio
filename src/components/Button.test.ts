import { render, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';
import { describe, it, expect } from 'vitest';

describe('Button.svelte', () => {
  it('renders with default label and count', () => {
    const { getByText } = render(Button);
    expect(getByText('Click me (0)')).toBeInTheDocument();
  });

  it('increments count when clicked', async () => {
    const { getByText } = render(Button);
    const button = getByText('Click me (0)');
    await fireEvent.click(button);
    expect(getByText('Click me (1)')).toBeInTheDocument();
  });

  it('renders with a custom label', () => {
    const { getByText } = render(Button, { props: { label: 'Custom Label' } });
    expect(getByText('Custom Label (0)')).toBeInTheDocument();
  });
});
