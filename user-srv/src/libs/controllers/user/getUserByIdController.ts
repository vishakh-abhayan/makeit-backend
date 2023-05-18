import { Request, Response } from "express";

export default  (dependencies: any) => {
  const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { 
      userCase: {getUserBy_Id_useCase},
    } = dependencies;
    const userData = await getUserBy_Id_useCase(dependencies).executefunction(userId);
    if (!userData.staus) return res.status(200).json(userData);
    return res.status(401).json({ status: false });
  };
  return getUserById;
};
