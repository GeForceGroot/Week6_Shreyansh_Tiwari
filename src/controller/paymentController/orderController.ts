import { Request, Response } from 'express'
import { getOrder } from '../../services/paymentServices/orderServices'


export const getOrderData = async (req: Request, res: Response)=>{
    const palcedOrder = await getOrder(req.body);
    res.send(palcedOrder)
}