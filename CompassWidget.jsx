import React, { useEffect, useRef, useState } from "react";

/**
 * CompassWidget
 * A small, transparent, live-updating compass.
 * - Transparent background (no fill/circle behind it)
 * - N / E / S / W labels in solid black
 * - Needle: red tip = points to true North, dark tail = south
 * - Uses the device's real compass heading on phones/tablets (HTTPS required)
 * - Falls back to a drag-to-rotate demo on desktop / unsupported browsers
 *
 * Usage:
 *   <CompassWidget size={96} />
 *
 * Drop it wherever you like, e.g. pinned top-left like your navbar mock:
 *   <div className="absolute top-4 left-4 z-50">
 *     <CompassWidget size={96} />
 *   </div>
 */
export default function CompassWidget({ size = 96, labelColor = "#111111" }) {
  const [heading, setHeading] = useState(0);
  const [needsPermission, setNeedsPermission] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const gotRealEvent = useRef(false);
  const dragging = useRef(false);
  const dialRef = useRef(null);

  useEffect(() => {
    function normalize(h) {
      return ((h % 360) + 360) % 360;
    }

    function handleOrientation(e) {
      let h = null;
      if (typeof e.webkitCompassHeading === "number") {
        // iOS Safari gives true compass heading directly (clockwise from North)
        h = e.webkitCompassHeading;
      } else if (e.absolute && e.alpha !== null) {
        // Most Android browsers: alpha is counter-clockwise from device's initial position
        h = 360 - e.alpha;
      } else if (e.alpha !== null) {
        h = 360 - e.alpha;
      }
      if (h !== null) {
        gotRealEvent.current = true;
        setDemoMode(false);
        setHeading(normalize(h));
      }
    }

    const hasAPI = typeof window !== "undefined" && "DeviceOrientationEvent" in window;
    const needsIOSPermission =
      hasAPI && typeof DeviceOrientationEvent.requestPermission === "function";

    if (needsIOSPermission) {
      setNeedsPermission(true);
    } else if (hasAPI) {
      window.addEventListener("deviceorientationabsolute", handleOrientation, true);
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    // If no real sensor data shows up shortly (desktop, unsupported), enable a
    // drag-to-rotate demo so the widget is still interactive/testable.
    const fallbackTimer = setTimeout(() => {
      if (!gotRealEvent.current && !needsIOSPermission) setDemoMode(true);
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("deviceorientationabsolute", handleOrientation, true);
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  const requestAccess = async () => {
    try {
      const result = await DeviceOrientationEvent.requestPermission();
      if (result === "granted") {
        setNeedsPermission(false);
        window.addEventListener(
          "deviceorientation",
          (e) => {
            let h =
              typeof e.webkitCompassHeading === "number"
                ? e.webkitCompassHeading
                : e.alpha !== null
                ? 360 - e.alpha
                : null;
            if (h !== null) {
              gotRealEvent.current = true;
              setHeading(((h % 360) + 360) % 360);
            }
          },
          true
        );
      } else {
        setDemoMode(true);
      }
    } catch (err) {
      setDemoMode(true);
    }
  };

  // --- Drag-to-rotate demo (desktop preview / no sensor available) ---
  const angleFromEvent = (clientX, clientY) => {
    const rect = dialRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let deg = (Math.atan2(dx, -dy) * 180) / Math.PI;
    return ((deg % 360) + 360) % 360;
  };

  const onPointerDown = (e) => {
    if (!demoMode) return;
    dragging.current = true;
    setHeading(angleFromEvent(e.clientX, e.clientY));
  };
  const onPointerMove = (e) => {
    if (!demoMode || !dragging.current) return;
    setHeading(angleFromEvent(e.clientX, e.clientY));
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const cardinal = (deg) => {
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return dirs[Math.round(deg / 45) % 8];
  };

  const rounded = Math.round(heading);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        userSelect: "none",
      }}
    >
      <div
        ref={dialRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{
          position: "relative",
          width: size,
          height: size,
          background: "transparent",
          cursor: demoMode ? "grab" : "default",
          touchAction: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${-heading}deg)`,
            transition: dragging.current ? "none" : "transform 0.15s ease-out",
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            {/* Cardinal letters — solid black, transparent everywhere else */}
            <text x="50" y="17" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill={labelColor}>N</text>
            <text x="85" y="51" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="600" fill={labelColor}>E</text>
            <text x="50" y="85" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="600" fill={labelColor}>S</text>
            <text x="15" y="51" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="600" fill={labelColor}>W</text>

            {/* Needle: red tip = true North, dark tail = South */}
            <polygon points="50,24 44,49 50,43 56,49" fill="#e01515" />
            <polygon points="50,76 44,51 50,57 56,51" fill={labelColor} />
            <circle cx="50" cy="50" r="2.4" fill={labelColor} />
          </svg>
        </div>
      </div>

      <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600, color: labelColor, letterSpacing: "0.02em" }}>
        {rounded}&deg; {cardinal(rounded)}
      </div>

      {needsPermission && (
        <button
          onClick={requestAccess}
          style={{
            marginTop: 8,
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: 999,
            border: `1px solid ${labelColor}`,
            background: "transparent",
            color: labelColor,
            cursor: "pointer",
          }}
        >
          Enable Compass
        </button>
      )}

      {demoMode && (
        <div style={{ marginTop: 4, fontSize: 9, color: labelColor, opacity: 0.55 }}>
          demo — drag to rotate
        </div>
      )}
    </div>
  );
}
