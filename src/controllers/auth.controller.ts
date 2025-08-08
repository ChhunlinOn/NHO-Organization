
import { NextRequest, NextResponse } from "next/server";
import { registerAdmin, loginAdmin } from "@/services/auth.service";

// Controller for Register
export async function registerController(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email and password are required" },
        { status: 400 }
      );
    }

    const admin = await registerAdmin(name, email, password);
    return NextResponse.json({ success: true, admin });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}

// Controller for Login
export async function loginController(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const admin = await loginAdmin(email, password);
    return NextResponse.json({ success: true, admin });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ success: false, message }, { status: 401 });
  }
}
