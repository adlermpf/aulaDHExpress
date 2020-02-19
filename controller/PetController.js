const petModel = require("../model/Pet");

const PetController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`${novoPet.nome} foi adicionado`);
    },
    show: (req, res) => {
        res.send("Exibe 1 pet especifico");
    } 
};

module.exports = PetController;