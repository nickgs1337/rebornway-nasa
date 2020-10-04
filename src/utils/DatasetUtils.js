
const generateDataset = (scale, amount, variability) => {
    let data = parseInt(Math.random() * scale);
    let dataset = [];
    while (amount > 0) {
        dataset.push(data);
        let variation = (parseInt(Math.random() * (variability * 2))) - variability;
        if(variation + data > scale) {
            variation *= -1;
        }
        data += variation;
        if(data < 0) {
            data *= -1;
        }
        amount--;
    }
    //dataset = [6.7, 7.2, 6.8, 7.1, 6.9, 7.2];
    return dataset;
};

export {generateDataset};
