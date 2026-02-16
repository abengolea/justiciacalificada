import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn (utils)', () => {
  it('combines class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('merges tailwind classes correctly', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', true && 'visible')).toBe('base visible');
  });
});
