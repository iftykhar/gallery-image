import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://mohab0104-backend-w28i.onrender.com/api/v1/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const resT = await res.json();
        const userData = resT?.data;

        if (!res.ok || !userData) {
          return null;
        }

        return {
          id: userData.user._id,
          email: userData.user.email,
          name: `${userData.user.firstName} ${userData.user.lastName}`,
          role: userData.user.role,
          image: userData.user.imageLink,
          token: userData.accessToken,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // On first login
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.image = user.image;
        token.accessToken = user.token; // save backend token here
      }
      return token;
    },
    async session({ session, token }) {
      // Expose token data in session
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
        image: token.image,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,

});

export { handler as GET, handler as POST };
