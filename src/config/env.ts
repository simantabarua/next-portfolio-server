import dotenv from "dotenv";

dotenv.config();

interface IEnv {
  DATABASE_URL: string;
  JWT_SECRET: string;
  NODE_ENV: string;
  FRONTEND_URL: string;
  PORT: string;
}

const loadEnvVariables = (): IEnv => {
  return {
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    NODE_ENV: process.env.NODE_ENV as string,
    FRONTEND_URL: process.env.FRONTEND_URL as string,
    PORT: process.env.PORT as string,
  };
};

export const envVars = loadEnvVariables();
