"use client"
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap() {
  const mapState = {
    center: [53.229188, 63.636520],
    zoom: 12,
  };

  return (
    <div style={{width:"100%", height:"100%", filter: 'grayscale(100%)' }}>
      <YMaps>
        <Map state={mapState} width="100%" height="100%">
          <Placemark
            geometry={mapState.center}
            options={{
              preset: 'islands#blackIcon',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}
