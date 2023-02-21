import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from "@faker-js/faker";

// DEV ONLY !!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    fetchFn: async (...args) => {
      //Remove for PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
        removePhoto: builder.mutation({
            // invalidatesTags: (result, error, album) => {
            //   return [{ type: "Album", id: album.id }];
            // },
            query: (photo) => {
              return {
                method: "DELETE",
                url: `/photos/${photo.id}`,
              };
            },
          }),
          addPhoto: builder.mutation({
            // invalidatesTags: (result, error, user) => {
            //   return [{ type: "UsersAlbum", id: user.id }];
            // },
            query: (album) => {
              return {
                url: "/photos",
                method: "POST",
                body: {
                  albumId: album.id,
                  url: faker.image.abstract(150, 150, true),
                },
              };
            },
          }),
          fetchPhotos: builder.query({
            // providesTags: (result, error, user) => {
            //   const tags = result.map((album) => {
            //     return { type: "Album", id: album.id };
            //   });
            //   tags.push({ type: "UsersAlbum", id: user.id });
            //   return tags;
            // },
            query: (album) => {
              return {
                url: "/photos",
                params: {
                  albumId: album.id,
                },
                method: "GET",
              };
            },
          }),
    }
  }
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
  } = photosApi;
  export { photosApi };
