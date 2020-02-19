const PetController = {
    index: (req, res) => {
        res.send("Pagina Inicial");
    },
    add: (req, res) => {
        res.send("Adiciona Pet");
    },
    show: (req, res) => {
        res.send("Exibe 1 pet especifico");
    } 
};

module.exports = PetController;