import { ImageResponse } from "next/og";

export const alt =
  "Monq Media: leads exclusivos para empresas de energías renovables";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(235,10,92,.18), #ffffff 55%)",
          color: "#14161b",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>
          MONQ MEDIA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            Clientes interesados
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#EB0A5C",
            }}
          >
            (de verdad)
          </div>
          <div style={{ fontSize: 40, marginTop: 24 }}>
            para tu negocio de energías renovables
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#5b5f6b" }}>
          Placas solares · Autoconsumo · Aerotermia · Cargadores de coche
          eléctrico
        </div>
      </div>
    ),
    size,
  );
}
