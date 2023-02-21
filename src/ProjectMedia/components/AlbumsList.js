import React from 'react'
import { useFetchAlbumsQuery } from '../store'
import ExpandablePanel from './ExpandablePanel';
import Skeleton from './Skeleton';

function AlbumsList({user}) {
  const { data, error, isLoading} = useFetchAlbumsQuery(user);

  let content;
  if(isLoading) {
    content = <Skeleton times={3} />
  } else if(error){
    content = <div>Error Loading albums.</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>
      return <ExpandablePanel key={album.id} header={header}>
        List of photos in album
      </ExpandablePanel>
    })
  }

  return (
    <div>
      <div>AlbumsList for {user.name}</div>
      <div>{ content }</div>
    </div>
  )
}

export default AlbumsList