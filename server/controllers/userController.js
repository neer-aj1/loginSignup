import asyncHandler from 'express-async-handler';
import User from '../models/userModels.js';
import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(
    async(req, res) => {

        const {fname,lname,email,password} = req.body;
        
        const userExist = await User.findOne({email});
        if(userExist) {
            res.status(400);
            throw new Error('User Already Exists');
        }   
        const user = await User.create({
            fname,
            lname,
            email,
            password
        });

        if(user){
            generateToken(res, user.email);
            res.status(200).json({
                fname: user.fname,
                email: user.email
            });
        }
        else{
            res.status(400);
            throw new Error("Cannot save data");
        }

    }
);

const login = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(user && (await user.matchPassword(password))){
            generateToken(res, user.email);
            res.status(200).json({
                fname: user.fname,
                email: user.email 
            })
        }
        else{
            res.status(400);
            throw new Error("Invalid email or password");
        }
    }
)

const logout = asyncHandler(
    async (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires : new Date(0),
        });
        res.status(200).json({message: 'User Logout out'});
    }
)

export {registerUser, login, logout};