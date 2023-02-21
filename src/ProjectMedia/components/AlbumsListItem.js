import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemove = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-3 text-red-600"
        loading={results.isLoading}
        onClick={handleRemove}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
