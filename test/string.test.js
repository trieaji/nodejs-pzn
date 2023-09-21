test("string", () => {
    const name = "Laksa Bayu";

    expect(name).toBe("Laksa Bayu");
    expect(name).toMatch(/ksa/);
})


