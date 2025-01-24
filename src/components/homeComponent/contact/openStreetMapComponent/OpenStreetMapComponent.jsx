"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'use-intl';

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const OpenStreetMapComponent = () => {
  const [mounted, setMounted] = useState(false);
    const contact = useTranslations("Contact")

  useEffect(() => {
    // Ensure Leaflet CSS is loaded
    if(typeof window !== 'undefined') {
      const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(link);
    
    setMounted(true);
    return () => {
      document.head.removeChild(link);
    };
    }
  }, []);

  // Default coordinates (Paris)
  const position = [4.06674, 9.72001];

  if (!mounted) return null;

  return (
    <div className="w-full h-[500px]">
      <MapContainer 
        center={position} 
        zoom={20} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup className="flex flex-col items-center justify-normal">
            <div className="flex flex-col items-center justify-normal">
              <h1 className="text-xl font-bold"> {contact("mapTitle")}</h1>
              <p className="text-md">
              {contact("mapSubtitle")}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMapComponent;