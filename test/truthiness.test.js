test("truthiness", () => {
    let value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();

    let val = undefined;
    expect(val).toBeUndefined();
    expect(val).toBeFalsy();

    let nawa = 'Sanemi';
    expect(nawa).toBeTruthy();
    expect(nawa).toBe('Sanemi');
})