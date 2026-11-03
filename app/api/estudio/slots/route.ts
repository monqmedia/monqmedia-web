import { NextResponse } from "next/server";
import { buildDays } from "@/lib/estudioSlots";
import { getBusy } from "@/lib/googleCalendar";

export const dynamic = "force-dynamic";

export async function GET() {
  const now = new Date();
  let busy: Awaited<ReturnType<typeof getBusy>> = [];
  try {
    busy = await getBusy(now, new Date(now.getTime() + 14 * 86400000));
  } catch (e) {
    console.error("[estudio/slots] freebusy", e);
  }
  return NextResponse.json({ days: buildDays(now, busy) }, { headers: { "Cache-Control": "no-store" } });
}
