import { Request, Response } from 'express';
import { userValSchema } from './user.validation';

export const createDemoController = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using Zod

    const data = userValSchema.parse(req.body);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'successfully created demo',
      data: data,
    });
  } catch (error: any) {
    res.status(error.status).json({
      status: error.status,
      success: false,
      message: error.message,
    });
  }
};
