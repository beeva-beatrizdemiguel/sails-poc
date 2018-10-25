/**
 * Artist.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fullName: { type: 'string', required: true },
    birthDate: { type: 'string', required: true },
    nationality: { type: 'string', required: true },
    photo: { type: 'string', required: true },
    gender: { type: 'string', required: true },
    actor: { collection: 'actor', via: 'artist' },  // relation with Actor
    director: { collection: 'director', via: 'artist' } // relation with Director
  }

};

