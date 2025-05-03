export function getFavoriteMediaArray(): number[] {
  const favoriteMediaJSON = localStorage.getItem("favoriteMedia");

  return favoriteMediaJSON ? JSON.parse(favoriteMediaJSON) : [];
}

export function updateFavoriteMediaData(id: number): boolean {
  const favoriteMedia = getFavoriteMediaArray();

  if (favoriteMedia.includes(id)) {
    removeFavoriteMedia(id, favoriteMedia);

    return false;
  }

  addFavoriteMedia(id, favoriteMedia);

  return true;
}

function addFavoriteMedia(id: number, idList: number[] = []) {
  localStorage.setItem("favoriteMedia", JSON.stringify([...idList, id]));
}

function removeFavoriteMedia(id: number, idList: number[]) {
  localStorage.setItem(
    "favoriteMedia",
    JSON.stringify(idList.filter((mediaId) => mediaId !== id)),
  );
}
