import { Request, Response } from "express";
import User from "../models/users";
import { IUser } from "../models/users";

const parseNumber = (value: any, fallback?: number): number | undefined => {
    const parsed = Number(value);
    return isNaN(parsed) ? fallback : parsed;
};

export const userInsert = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            username,
            email,
            grossSalary,
            city,
            region,
            country,
            company,
            yoE,
            yoEwithinTheCompany,
            weekelyRemoteWorking,
            weekelyRemoteWorkingInDays,
            industry,
            jobTitle,
            ticketRestaurant,
            ticketRestaurantAmount,
            ticketRestaurantValue,
        } = req.body;
        
        const user = new User({
            username,
            email,
            grossSalary: parseNumber(grossSalary),
            city,
            region: region || undefined,
            country: country || undefined,
            company,
            yoE: parseNumber(yoE),
            yoEwithinTheCompany: parseNumber(yoEwithinTheCompany),
            weekelyRemoteWorking: weekelyRemoteWorking === 'true',
            weekelyRemoteWorkingInDays: parseNumber(weekelyRemoteWorkingInDays),
            industry,
            jobTitle,
            ticketRestaurant: ticketRestaurant === 'true',
            ticketRestaurantAmount: parseNumber(ticketRestaurantAmount),
            ticketRestaurantValue: parseNumber(ticketRestaurantValue),
        });

        await user.save();

        return res.status(201).json({message: 'User inserted successfully', 
            user
        });
        
    } catch (error) {
        console.log('Error while inserting the user', error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const userUpdate = async (req: Request, res: Response) => {
    try {
        const { username, ...updates } = req.body;

        if (!username) {
            return res.status(400).json({message: "Username is\
                required to update the information"});
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                message: "At least one field to update is necessary!"
            });
        }

        const user: IUser | null = await  User.findOne({ username }).exec();

        if (!user) {
            return res.status(404).json({message: 'User not found.'});
        }

        Object.entries(updates).forEach(([key, value]) => {
            if (key in user) {
                (user as any)[key] = value;
            }
        });

        const updatedUser = await user.save();

        return res.status(200).json({message: 'User updated successfully', 
            user: updatedUser
        });
    
    } catch(error) {
        console.error('Error while updating the user', error);
        return res.status(500).json({message: 'Internal server error'});
    }
};