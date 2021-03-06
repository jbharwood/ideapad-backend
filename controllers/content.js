const Content = require('../models').Content;
const Idea = require('../models').Idea;

module.exports = {
  list(req, res) {
    return Content
      .findAll({
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then((contents) => res.status(200).send(contents))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    debugger
    return Content
      .findByPk(req.params.id, {
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then((content) => {
        if (!content) {
          return res.status(404).send({
            message: 'Content Not Found',
          });
        }
        return res.status(200).send(content);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Content
      .create({
        idea_id: req.body.idea_id,
        post: req.body.post,
        audio: req.body.audio,
        html: req.body.html,
      })
      .then((content) => res.status(201).send(content))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Content
      .findByPk(req.params.id, {
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: 'Content Not Found',
          });
        }
        return content
          .update({
            post: req.body.post || idea.post,
            audio: req.body.audio || idea.audio,
            html: req.body.html || idea.html,
          })
          .then(() => res.status(200).send(content))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Content
      .findByPk(req.body.id)
      .then(content => {
        if (!content) {
          return res.status(400).send({
            message: 'Content Not Found',
          });
        }
        return content
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
