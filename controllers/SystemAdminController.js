const { Town } = require("../models/TownModel");
const { User } = require("../models/UserModel");


exports.addTown = async(req, res) => {
    let newTown = new Town(req.body);

    await newTown.save((err, town) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    });
};

exports.getCustomers = async(req, res) => {
    await User.find({ "userType": `${req.query.userType}` }, async function(err, user) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid user type!"
            });
        }

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "Invalid user type!"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Customers received!",
            data: user
        });
    });
};