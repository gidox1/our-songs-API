'use strict';

const cloudinary = require('cloudinary').v2;
const config = require('../../config/config');

cloudinary.config(config.cloudinary);

module.exports = {
    /**
     * Uploader function
     * @param {Buffer Object} file 
     */

    Upload: async (file, type) => {
        return new Promise(async (resolve, reject) => {
            await cloudinary.uploader.upload(file, { resource_type: type }, async (err, res) => {
                if (err) {
                    return reject(err);
                }
                let uploaddetails = await res;
                return resolve(uploaddetails);
            });
        });
    },

    /**
    * Delete files from Cloudinary.
    * Expects an array of public_ids
    * @param {<array>} files 
    */
    cloudinaryDelete: async (files) => {
        return new Promise(async (resolve, reject) => {
            return files.map(async public_id => {
                return await cloudinary.api.delete_resources(public_id, {}, async (err, res) => {
                    if (err) { console.log('cloudinary error', err); reject({ status: false }); }
                    resolve(res);
                });
            });
        });
    }
};