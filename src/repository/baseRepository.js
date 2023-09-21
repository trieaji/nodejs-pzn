const insertOne = (table, params) => {
    const data = table.create({
        data: params
    });
    return data;
}