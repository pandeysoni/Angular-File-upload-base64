'use strict';

// var Image = require('../model/omage.js'),
var Image = require('./image.server.model').Image;
var Boom = require('boom');
var request = require('request');

/** create function to create Image. */
exports.create = function (req, res, next) {
    Image.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(Boom.badImplementation(err)); // 500 error
        }
    });
};


/** getImage function to get Image by id. */
exports.get = function (req, res, next) {
    Image.getAll(function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(Boom.badImplementation(err)); // 500 error
        }
    });
};