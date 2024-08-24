const usermodel = require("../models/usermodel");

const UserController = {
  Get: async (req, res) => {
    const result = await usermodel.find();
    res.send({
      isSuccessfull: true,
      data: result,
    });
  },
  Post: (req, res) => {
    const body = req.body;

    const obj = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    };

    const UserObj = new usermodel(obj);
    UserObj.save()
      .then((result) => {
        res.status(201).send({
          isSuccessfull: true,
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).send({
          isSuccessfull: false,
          data: null,
          error: err,
        });
      });
  },
  Put: () => {},
  Del: () => {},
};

module.exports = UserController;
