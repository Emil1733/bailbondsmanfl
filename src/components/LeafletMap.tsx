'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix Leaflet marker icon issue in Next.js
const icon = L.icon({
    iconUrl: '/marker-icon.png', // We might need to handle this asset, or just rely on CSS falling back/default
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Since we can't easily rely on default assets in Next.js without copy-pasting, we'll try to use a CDN or just a circle marker for simplicity/robustness in this artifact.
// Actually, let's use a custom DivIcon or standard if we can.
// For now, I'll attempt standard but beware of the 404 on marker.png.

interface MapProps {
    lat: number;
    lng: number;
    jailName: string;
}

export default function LeafletMap({ lat, lng, jailName }: MapProps) {
    useEffect(() => {
        // Fix for default markers
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    return (
        <div className="h-[400px] w-full rounded-xl overflow-hidden border border-white/10 z-0">
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className="h-full w-full bg-slate-900">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[lat, lng]}>
                    <Popup>
                        {jailName}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
