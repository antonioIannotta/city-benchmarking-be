import { Request, Response } from "express";
import User from "../models/users";

export const user = async (req: Request, res: Response) => {
    try {
        const requestBody = req.body;
        const user = new User({
            username: requestBody.username,
            email: requestBody.email,
            grossSalary: Number.parseFloat(requestBody.grossSalary),
            city: requestBody.city,
            region: requestBody.region == null ? undefined : requestBody.region,
            country: requestBody.country == null ? undefined : requestBody.country,
            company: requestBody.company,
            yoE: Number.parseInt(requestBody.yoE),
            yoEwithinTheCompany: Number.parseInt(requestBody.yoEwithinTheCompany),
            weekelyRemoteWorking: requestBody.yoEwithinTheCompany === 'true',
            weekelyRemoteWorkingInDays: requestBody.weekelyRemoteWorkingInDays == null ?
                undefined : Number.parseInt(requestBody.weekelyRemoteWorkingInDays),
            industry: requestBody.industry,
            jobTitle: requestBody.jobTitle,
            ticketRestaurant: requestBody.ticketRestaurant == 'true',
            ticketRestaurantAmount: requestBody.ticketRestaurantAmount == null ? undefined :  Number.parseInt(requestBody.ticketRestaurantAmount),
            ticketRestaurantValue: requestBody.ticketRestaurantValue == null ? undefined : Number.parseFloat(requestBody.ticketRestaurantValue)
        });
        await user.save();
        res.end();
    } catch (error) {
        console.log(error);
    }
};