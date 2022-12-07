import axios from "axios";

const searchImages = async(term)=>{
  //uPXCtoIcXl8vMZ6lkS12Y_3YOGsUosuVsB7_08fBcDw
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID OD-AhF-_qNbrBGCgMKxtfawrUtYXbOe7BPEG96B_TGE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;