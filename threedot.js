const ages = [22, 24, 26, 28];
const ages2 = [10, 12, 13, 9, 7];
const ages3 = [15, 18, 20, 21];

const totalBalance = [600, 800, 200, 1500];

const result = Math.max(...totalBalance);

console.log(result);

console.log([...ages, ...ages2 , ...ages3]);