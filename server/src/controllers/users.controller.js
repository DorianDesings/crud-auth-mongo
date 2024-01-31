const { v4 } = require('uuid');
const UserModel = require('../models/user.model');

const controller = {};

// Obtener todos los usuarios
controller.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Obtener usuario por id
controller.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not Exists' });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Crear un usuario nuevo
controller.createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send({ error: 'Bad request.' + err });

  try {
    const newUser = new UserModel({
      _id: v4(),
      name,
      email
    });

    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(409).send({ error: 'User not Exists' });
    }

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: 'User not Exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

module.exports = controller;
