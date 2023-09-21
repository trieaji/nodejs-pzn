test('string.not', () => {
    const nawa = 'Laksa Bayu';

    expect(nawa).not.toBe('Trie');
    expect(nawa).not.toEqual('Laksa');
    expect(nawa).not.toMatch(/Akaza/);
})

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(4);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
})