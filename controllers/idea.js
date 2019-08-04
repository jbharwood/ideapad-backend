const Idea = require('../models').Idea;
const Content = require('../models').Content;

module.exports = {
  list(req, res) {
    return Idea
      .findAll({
        include: [{
          model: Content,
          as: 'contents'
        }],
      })
      .then((companies) => res.status(200).send(companies))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Idea
      .findById(req.params.id, {
        include: [{
          model: Content,
          as: 'contents'
        }],
      })
      .then((company) => {
        if (!company) {
          return res.status(404).send({
            message: 'Idea Not Found',
          });
        }
        return res.status(200).send(company);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Idea
      .create({
        subject: req.body.subject,
        category: req.body.category,
      })
      .then((company) => res.status(201).send(company))
      .catch((error) => res.status(400).send(error));
  },

  addWithContents(req, res) {
    return Idea
      .create({
        subject: req.body.subject,
        category: req.body.category,
        contents: req.body.contents,
      }, {
          include: [{
          model: Content,
          as: 'contents'
        }]
      })
      .then((company) => res.status(201).send(company))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    console.log(req.body);
    return Idea
      .findById(req.params.id, {
        include: [{
          model: Content,
          as: 'contents'
        }],
      })
      .then(company => {
        if (!company) {
          return res.status(404).send({
            message: 'Idea Not Found',
          });
        }
        return company
          .updateAttributes({
            subject: req.body.subject || company.subject,
            category: req.body.category || company.category,
            contents: req.body.contents || company.contents,
          }, {
              include: [{
              model: Content,
              as: 'contents'
            }]
          })
          .then(() => res.status(200).send(company))
          .catch((error) => {console.log(error);res.status(400).send(error);});
      })
      .catch((error) => {console.log(error);res.status(400).send(error);});
  },

  delete(req, res) {
    return Idea
      .findById(req.params.id)
      .then(company => {
        if (!company) {
          return res.status(400).send({
            message: 'Idea Not Found',
          });
        }
        return company
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
