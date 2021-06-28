const express = require('express');
const { Product, Users } = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, description, price, userId } = req.body;
  Product.create({ name, description, price, UserId: userId })
    .then((newProduct) => {
      res.status(200).json(newProduct);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Algo deu errado." });
    })
});

router.get('/', (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Algo deu errado." });
    })
})

router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id, { include: { model: Users, as: 'user' } } )
    .then((product) => {
      if (product === null) {
        res.status(404).send({ message: 'Produto não encontrado.'})
      }
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Algo deu errado." });
    })
})

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((products) => {
    res.status(200).send({ message: 'Produto excluído com sucesso.' });
  })
  .catch((e) => {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  });
})

router.put('/:id', (req, res) => {
  const { name, description, price, userId } = req.body;
  Product.update(
    { name, description, price, UserId: userId },
    { where:{ id: req.params.id } }
  )
  .then((products) => {
    res.status(200).send({ message: 'Produto atualizado com sucesso.' });
  })
  .catch((e) => {
    console.log(e.message);
    res.status(500).send({ message: 'Algo deu errado' });
  });
})

module.exports = router;