import { useEffect, useState } from "react";
import { createCharacter } from "../services/characterService";
import { getElements } from "../services/elementService";
import { getNations } from "../services/nationService";

interface Elements {
    id: string;
    name: string;
}

interface Nations {
    id: string;
    name: string;
    element: Elements;
}

export const useCharacter = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [weapon, setWeapon] = useState("");
  const [factions, setFactions] = useState([{ name: "", nationId: "" }]);
  const [visionId, setVisionId] = useState("");
  const [elements, setElements] = useState<Elements[]>([]);
  const [nationId, setNationId] = useState("");
  const [nations, setNations] = useState<Nations[]>([])
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
        try {
            const response = await getElements()
            setElements(response)
        } catch (error: any) {
            throw new error
        }
    }
    
    fetchElements()
  },[])

  useEffect(() => {
    const fetchNations = async () => {
      try {
        const response = await getNations()
        setNations(response)
        
      } catch (error: any) {
        throw new error
      }
    }

    fetchNations()
  },[])
 

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    try {
      await createCharacter(
        name,
        title,
        weapon,
        factions,
        visionId,
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

  const elementOptions = elements.map(element => ({value: element.id, label: element.name}))
  const nationOptions = nations.map(nation => ({value: nation.id, label: nation.name}))

  const weaponOptions = [
    { value: "Sword", label: "Sword" },
    { value: "Bow", label: "Bow" },
    { value: "Catalyst", label: "Catalyst" },
    { value: "Claymore", label: "Claymore" },
    { value: "Polearm", label: "Polearm" },
  ]

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
    elementOptions,
    nationOptions,
    weaponOptions
  }
}