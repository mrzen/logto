import { describe, expect, it } from 'vitest';

import { domainRegEx } from './regex.js';

describe('Regular expressions should work as expected', () => {
  it('should allow valid domains that consists of 3 parts. E.g. foo.bar.com', () => {
    expect(domainRegEx.test('foo.bar.com')).toBe(true);
    expect(domainRegEx.test('foo1.bar.com')).toBe(true);
    expect(domainRegEx.test('foo.bar1.com')).toBe(true);
    expect(domainRegEx.test('1foo.bar.com')).toBe(true);
    expect(domainRegEx.test('f.bar.co')).toBe(true);
    expect(domainRegEx.test('f.b.com')).toBe(true);
    expect(domainRegEx.test('1.b.tk')).toBe(true);
  });

  it('should not allow domains that consists of 2 parts. E.g. bar.com', () => {
    expect(domainRegEx.test('bar.com')).toBe(false);
    expect(domainRegEx.test('b.co')).toBe(false);
  });

  it('should handle domains that contains dash in the middle. E.g. auth-gate.bar.com', () => {
    expect(domainRegEx.test('auth-gate.bar.com')).toBe(true);
    expect(domainRegEx.test('auth-.bar.com')).toBe(false);
    expect(domainRegEx.test('-auth.bar.com')).toBe(false);
    expect(domainRegEx.test('auth.bar-foo.com')).toBe(true);
  });

  it('should allow domains where the first part is a wildcard. e.g. *.bar.com', () => {
    expect(domainRegEx.test('*.bar.com')).toBe(true);
  });

  it('should allow domains where the first part ends with a wildcard. e.g. foo-*.bar.com', () => {
    expect(domainRegEx.test('foo-*.bar.com')).toBe(true);
  });

  it('should not allow a wildcard in the middle of the first part. e.g. f*o.bar.com', () => {
    expect(domainRegEx.test('f*o.bar.com')).toBe(false);
    expect(domainRegEx.test('m*re-th*n-*ne.bar.com')).toBe(false);
  });

  it('should not allow wildcards outside the first part of the domain. e.g. foo.*.com', () => {
    expect(domainRegEx.test('foo.*.com')).toBe(false);
    expect(domainRegEx.test('foo.bar.*')).toBe(false);
  });
});
