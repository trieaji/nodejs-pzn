test("array simple", () => {
    const names = ['Laksa', 'Bayu', 'Trie'];
    expect(names).toEqual(['Laksa', 'Bayu', 'Trie']);
    expect(names).toContain('Trie');
})

test('array object', () => {
    const persons = [
        {
            nawa: 'Sanemi'
        },
        {
            nawa: 'Shinazugawa'
        }
    ];
    expect(persons).toContainEqual({
        nawa: 'Shinazugawa'
    })
})