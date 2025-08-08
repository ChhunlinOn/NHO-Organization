
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export const registerAdmin = async (name: string, email: string, password: string) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("Admin already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "ADMIN", // must match Prisma enum
    },
  });

  return { id: admin.id, name: admin.name, email: admin.email };
};

export const loginAdmin = async (email: string, password: string) => {
  const admin = await prisma.user.findUnique({ where: { email } });
  if (!admin) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return { id: admin.id, name: admin.name, email: admin.email };
};
