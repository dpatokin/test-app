import { MediaItem } from "../types";

export function getFavoriteMediaArray(): MediaItem[] {
  const favoriteMediaJSON = localStorage.getItem("favoriteMedia");

  return favoriteMediaJSON ? JSON.parse(favoriteMediaJSON) : [];
}

export function updateFavoriteMediaData(mediaItem: MediaItem): boolean {
  const favoriteMedia = getFavoriteMediaArray();

  if (favoriteMedia.some((favoriteItem) => favoriteItem.id === mediaItem.id)) {
    removeFavoriteMedia(mediaItem, favoriteMedia);

    return false;
  }

  addFavoriteMedia(mediaItem, favoriteMedia);

  return true;
}

function addFavoriteMedia(mediaItem: MediaItem, idList: MediaItem[] = []) {
  localStorage.setItem("favoriteMedia", JSON.stringify([...idList, mediaItem]));
}

function removeFavoriteMedia(mediaItem: MediaItem, idList: MediaItem[]) {
  localStorage.setItem(
    "favoriteMedia",
    JSON.stringify(
      idList.filter((filterItem: MediaItem) => filterItem.id !== mediaItem.id),
    ),
  );
}
