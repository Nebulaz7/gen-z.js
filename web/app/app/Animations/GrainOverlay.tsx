"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface GrainOptions {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const GrainOverlay: React.FC<GrainOptions> = ({
  patternSize = 150,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 25,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<{
    ctx: CanvasRenderingContext2D;
    patternCanvas: HTMLCanvasElement;
    patternCtx: CanvasRenderingContext2D;
    patternData: ImageData;
    patternPixelDataLength: number;
    frame: number;
    animationId: number | null;
  } | null>(null);

  const resize = useCallback(() => {
    if (!canvasRef.current || !grainRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  }, []);

  const update = useCallback(() => {
    if (!grainRef.current) return;

    const { patternPixelDataLength, patternData, patternCtx } =
      grainRef.current;

    // Put a random shade of gray into every pixel of the pattern
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      const value = Math.random() * 255;

      patternData.data[i] = value; // Red
      patternData.data[i + 1] = value; // Green
      patternData.data[i + 2] = value; // Blue
      patternData.data[i + 3] = patternAlpha; // Alpha
    }

    patternCtx.putImageData(patternData, 0, 0);
  }, [patternAlpha]);

  const draw = useCallback(() => {
    if (!canvasRef.current || !grainRef.current) return;

    const canvas = canvasRef.current;
    const { ctx, patternCanvas } = grainRef.current;
    const { width, height } = canvas;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Fill the canvas using the pattern
    const pattern = ctx.createPattern(patternCanvas, "repeat");
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
    }
  }, []);

  const loop = useCallback(() => {
    if (!grainRef.current) return;

    // Only update grain every n frames
    const shouldDraw = ++grainRef.current.frame % patternRefreshInterval === 0;
    if (shouldDraw) {
      update();
      draw();
    }

    grainRef.current.animationId = requestAnimationFrame(loop);
  }, [patternRefreshInterval, update, draw]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Scale the context
    ctx.scale(patternScaleX, patternScaleY);

    // Create pattern canvas
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext("2d");
    if (!patternCtx) return;

    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4; // rgba = 4

    // Initialize grain reference
    grainRef.current = {
      ctx,
      patternCanvas,
      patternCtx,
      patternData,
      patternPixelDataLength,
      frame: 0,
      animationId: null,
    };

    // Set up resize listener
    window.addEventListener("resize", resize);
    resize();

    // Start animation loop
    loop();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resize);
      if (grainRef.current?.animationId) {
        cancelAnimationFrame(grainRef.current.animationId);
      }
      grainRef.current = null;
    };
  }, [patternSize, patternScaleX, patternScaleY, resize, loop]);

  return (
    <canvas
      ref={canvasRef}
      className="grain"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default GrainOverlay;
