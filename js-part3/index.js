function severalParams(...rest){
    return rest;
}
const arr1 = [...arr];
const obj = {
    name: "nnino",
    adress: {
        city: "kutaisi",
    },
};

const obj1 = { ...obj};

console.log(obj2==obj);
// obj1.name = "mariami";
// obj1.adress.city = "tbilisi",
