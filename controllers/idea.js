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
      .then((ideas) => res.status(200).send(ideas))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Idea
      .findByPk(req.params.id, {
        include: [{
          model: Content,
          as: 'contents'
        }],
      })
      .then((idea) => {
        if (!idea) {
          return res.status(404).send({
            message: 'Idea Not Found',
          });
        }
        return res.status(200).send(idea);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Idea
      .create({
        subject: req.body.subject,
        category: req.body.category,
      })
      .then((idea) => res.status(201).send(idea))
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
      .then((idea) => res.status(201).send(idea))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    console.log(req.body);
    return Idea
      .findByPk(req.params.id, {
        include: [{
          model: Content,
          as: 'contents'
        }],
      })
      .then(idea => {
        if (!idea) {
          return res.status(404).send({
            message: 'Idea Not Found',
          });
        }
        return idea
          .updateAttributes({
            subject: req.body.subject || idea.subject,
            category: req.body.category || idea.category,
            contents: req.body.contents || idea.contents,
          }, {
              include: [{
              model: Content,
              as: 'contents'
            }]
          })
          .then(() => res.status(200).send(idea))
          .catch((error) => {console.log(error);res.status(400).send(error);});
      })
      .catch((error) => {console.log(error);res.status(400).send(error);});
  },

  delete(req, res) {
    return Idea
      .findByPk(req.params.id)
      .then(idea => {
        if (!idea) {
          return res.status(400).send({
            message: 'Idea Not Found',
          });
        }
        return idea
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
