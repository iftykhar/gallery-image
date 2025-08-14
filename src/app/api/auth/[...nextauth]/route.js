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
        // 1️⃣ Here you check your DB or API
        const res = await fetch("https://your-backend.com/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        // 2️⃣ If login fails
        if (!res.ok || !user) {
          return null; // null means login failed
        }

        // 3️⃣ If login success — must return an object
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user; // attach user info to token
      return token;
    },
async session({ session, token }) {
  session.user = token.user; // attach user info to session
  return session;
}

  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
