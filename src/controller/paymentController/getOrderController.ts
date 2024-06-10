import { Request, Response } from 'express'
import { orderData } from '../../services/paymentServices/getOrderServices'


export const getOrders = async (req: Request, res: Response, id: any)=>{
    const orderDeatils = await orderData(req.body, id);
    res.send(orderDeatils)
}