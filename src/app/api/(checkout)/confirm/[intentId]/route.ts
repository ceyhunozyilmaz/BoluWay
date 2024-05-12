import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async (
  request: Request,
  { params }: { params: { intentId: string } }
) => {
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Sipariş Hazırlanıyor!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Sipariş Güncellendi" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
