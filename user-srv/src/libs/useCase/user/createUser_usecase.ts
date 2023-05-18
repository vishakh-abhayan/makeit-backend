import { userData, userProfile } from "../../entities";

export const createNewUser_useCase = (dependdecies: any) => {
  const {
    repository: { userRepository },
  } = dependdecies;
  if (!userRepository)
    throw new Error("The user repository shuld be dependecie");
  const exicutefunction = async ({
    firstName,
    lastName,
    email,
    phoneNumber,
  }: userData) => {
    const userExist = await userRepository.getUserByEmail(email);

    if (!userExist) {
      const userData = new userProfile({
        firstName,
        lastName,
        email,
        phoneNumber,
      });

      return userRepository.createUser(userData);
    } else {
      return { status: false };
    }
  };
  return {
    exicutefunction,
  };
};
