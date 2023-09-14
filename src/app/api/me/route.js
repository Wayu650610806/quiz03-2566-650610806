import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Wayu Tharai",
    studentId: "650610806",
  });
};
