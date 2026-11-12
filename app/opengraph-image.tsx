import { ImageResponse } from "next/og";

export const alt = "Shreya Sinha - Computer Science undergraduate portfolio";
export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(ellipse at 75% 30%, #26333c 0%, #11181d 45%, #080a0c 100%)",
          color: "#f5f2eb",
          display: "flex",
          height: "100%",
          padding: "80px 96px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#bbc7cb",
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 78,
              marginTop: 28,
            }}
          >
            SHREYA SINHA
          </div>
          <div
            style={{
              background: "#bbc7cb",
              height: 2,
              marginTop: 30,
              width: 160,
            }}
          />
          <div style={{ fontSize: 30, marginTop: 30 }}>
            COMPUTER SCIENCE UNDERGRADUATE
          </div>
          <div style={{ color: "#bbc7cb", fontSize: 23, marginTop: 24 }}>
            PYTHON · JAVA · DATA SCIENCE · MACHINE LEARNING
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
