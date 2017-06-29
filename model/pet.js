/**
 * Created by hoangdv on 0028, Jun, 28, 2017.
 */
let ListData = [
    {id: 1, name: 'Kitty01', status: 'available'},
    {id: 2, name: 'Kitty02', status: 'available'},
    {id: 3, name: 'Kitty03', status: 'available'},
    {id: 4, name: 'Kitty04', status: 'available'},
    {id: 5, name: 'Kitty05', status: 'available'},
    {id: 6, name: 'Kitty06', status: 'available'},
    {id: 7, name: 'Kitty07', status: 'available'},
    {id: 8, name: 'Kitty08', status: 'available'},
    {id: 9, name: 'Kitty09', status: 'available'}
];
module.exports.find = (callback) => {
    callback(null, ListData);
};
module.exports.findById = (id, callback) => {
    callback(null, ListData.find(item => item.id == id)); // typeof id === "string"
};
module.exports.save = (pet, callback) => {
    let {name, status} = pet;
    if (!name || !status) {
        callback({message: "Pet is invalid!"});
        return;
    }
    pet = {
        id: Date.now(),
        name,
        status
    };
    ListData.push(pet);
    callback(null, pet);
};
module.exports.delete = (id, callback) => {
    let roweffected = ListData.length;
    ListData = ListData.filter(item => item.id != id);
    roweffected = roweffected - ListData.length;
    callback(null, {roweffected})
};
module.exports.update = (id, pet, callback) => {
    let oldPet = ListData.find(item => item.id == id);
    if (!oldPet) {
        callback("Pet not found!");
        return;
    }
    let index = ListData.indexOf(oldPet);
    Object.assign(oldPet, pet);
    ListData.fill(oldPet, index, ++index);
    callback(null, oldPet);
};
