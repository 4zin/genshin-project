import { useEffect, useState } from "react";
import { createCharacter } from "../services/characterService";
import { getElements } from "../services/elementService";

interface Elements {
    id: string;
    name: string;
}

export const useCharacter = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [weapon, setWeapon] = useState("");
  const [factions, setFactions] = useState([{ name: "", nationId: "" }]);
  const [visionId, setVisionId] = useState("");
  const [elements, setElements] = useState<Elements[]>([]);
  const [nationId, setNationId] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
        try {
            const response = await getElements()
            setElements(response.data)
        } catch (error) {
            
        }
    }
    
    fetchElements()
  },[])


  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    const matchingElement = elements.find(element => element.name.toLowerCase() === visionId.toLowerCase());
    const visionIdToSubmit = matchingElement ? matchingElement.id : visionId;

    try {
      await createCharacter(
        name,
        title,
        weapon,
        factions,
        visionIdToSubmit,
        nationId,
        image
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFactionChange = (
    index: number,
    field: "name" | "nationId",
    value: string
  ) => {
    const newFactions = [...factions];
    newFactions[index][field] = value;
    setFactions(newFactions);
  };

  const addFaction = () => {
    setFactions([...factions, { name: "", nationId: "" }]);
  };

  return {
    name,
    setName,
    title,
    setTitle,
    weapon,
    setWeapon,
    factions,
    visionId,
    setVisionId,
    nationId,
    setNationId,
    setImage,
    submitHandler,
    handleFactionChange,
    addFaction,
  }
}