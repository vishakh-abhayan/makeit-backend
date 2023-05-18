import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    userCase: { getAllUser_useCase },
  } = dependencies;
  const getAllUsers = async (req: Request, res: Response) => {
    try {
      const userData = await getAllUser_useCase(dependencies).executefunction();
      if (!userData) res.json({ staus: false });
      res.status(200).json(userData);
    } catch (error: any) {
      res.json(error);
    }
  };
  return getAllUsers;
};
