import { NextResponse } from "next/server";
import { buildDays, type Busy } from "@/lib/estudioSlots";

export const dynamic = "force-dynamic";

// TODO (conexión Google Calendar): obtener los periodos ocupados con freebusy y pasarlos a buildDays.
async function getBusy(): Promise<Busy[]> {
  return [];
}

export async function GET() {
  const days = buildDays(new Date(), await getBusy());
  return NextResponse.json({ days }, { headers: { "Cache-Control": "no-store" } });
}
