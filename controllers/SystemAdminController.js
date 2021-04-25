const { Town } = require("../models/TownModel");

exports.addTown = async(req, res) => {
    let newTown = new Town(req.body);

    await newTown.save((err, town) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to add town!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New town is added!",
                data: town
            });
        }
    });
};