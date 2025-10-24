import { prisma } from "../../config/db";

const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Something went wrong");
  }

  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...safeUser } = user;

  return safeUser;
};

export const AuthService = {
  loginUser,
};
