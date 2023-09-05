import { loginRequest } from "hooks/auth/request";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { TLoginData } from "../../../../types";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    maxAge: 2 * 60 * 60,
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const user = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });
          console.log(user);
          return user;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === "string"
              ? error.response.data
              : error.response.data?.message,
          );
        }
      },
    }),
  ],
};
