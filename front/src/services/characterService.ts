import axios from "axios";

const API_URL = "http://localhost:3000/character";

export const createCharacter = async (
    name: string,
    title: string,
    weapon: string,
    factions: { name: string; nationId: string }[],
    visionId: string,
    nationId: string,
    image: File
  ) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("weapon", weapon);
    factions.forEach((faction, index) => {
      formData.append(`factions[${index}][name]`, faction.name);
      formData.append(`factions[${index}][nationId]`, faction.nationId);
    });
    formData.append("visionId", visionId);
    formData.append("nationId", nationId);
    formData.append("file", image);

    return await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };