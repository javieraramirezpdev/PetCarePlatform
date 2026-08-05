import { ImageResponse } from "next/og";

export const alt = "PetCare · Cuidado veterinario, simple y cercano";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #325E4F 0%, #54927A 55%, #8EBFA6 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 104,
              height: 104,
              borderRadius: 9999,
              background: "rgba(255,255,255,0.18)",
              fontSize: 52,
            }}
          >
            🐾
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "white" }}>
            PetCare
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 34,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Cuidado veterinario, simple y cercano
        </div>
      </div>
    ),
    { ...size }
  );
}
