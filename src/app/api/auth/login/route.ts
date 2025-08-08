
import { NextResponse } from "next/server";
import { loginAdmin } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body as { email?: string; password?: string };

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await loginAdmin(email, password);
    return NextResponse.json({ success: true, user });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ success: false, message }, { status: 401 });
  }
}
