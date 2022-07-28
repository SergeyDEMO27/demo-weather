interface locationInterface {
  items: Array<{
    position: {
      lat: number;
      lng: number;
    };
  }>;
}

export const locationParser = ({
  items,
}: locationInterface): { latitude: number; longtitude: number } => {
  return { latitude: items[0].position.lat, longtitude: items[0].position.lng };
};
