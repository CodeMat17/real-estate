export const usePropertyFormat = (property) => {
  const address = property.location.map((item) => item.name).join(", ");
  const coverPhoto = property.coverPhoto.url;
  const propertyType = `${property.category[0].name}, ${property.category[1].name}`;
  const price = new Intl.NumberFormat().format(property.price);
  const title = property.title;
  const rooms = property.rooms;
  const baths = property.baths;
  const purpose = property.purpose;
  const sqSize = property.area.toFixed(2);
  const externalID = property.externalID;

  const photos = property.photos?.map((photo) => photo.url) || [];
  const description = property.description;
  const coverVideoUrl = property.coverVideo.url;
  const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11);
  const panaorama = property.panaoramas?.length
    ? property.panaoramas[0].url
    : [];
  const amenities = property.amenities
    ?.flatMap(({ amenities }) => amenities)
    .map((item) => item.text);

  const furnished = property.furnishingStatus;

  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panaorama,
    amenities,
    furnished,
  };
};
