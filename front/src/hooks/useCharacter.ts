import { useEffect, useState } from "react";
import { createCharacter } from "../services/characterService";
import { getElements } from "../services/elementService";
import { getNations } from "../services/nationService";
import { getFactions } from "../services/factionsService";

interface Elements {
  id: string;
  name: string;
}

interface Nations {
  id: string;
  name: string;
  element: Elements;
}

interface Factions {
  name: string;
  nationId: string;
}

export const useCharacter = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [weapon, setWeapon] = useState("");
  const [factions, setFactions] = useState<Factions[]>([]);
  const [factionOptions, setFactionOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [visionId, setVisionId] = useState("");
  const [elements, setElements] = useState<Elements[]>([]);
  const [nationId, setNationId] = useState("");
  const [nations, setNations] = useState<Nations[]>([]);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await getElements();
        setElements(response);
      } catch (error: any) {
        throw new error();
      }
    };

    fetchElements();
  }, []);

  useEffect(() => {
    const fetchNations = async () => {
      try {
        const response = await getNations();
        setNations(response);
      } catch (error: any) {
        throw new error();
      }
    };

    fetchNations();
  }, []);

  useEffect(() => {
    const fetchFactions = async () => {
      try {
        const response = await getFactions();
        setFactionOptions(
          response.map((faction: Factions) => ({
            value: faction.name,
            label: faction.name,
          })),
        );
      } catch (error: any) {
        throw new error();
      }
    };

    fetchFactions();
  }, []);

  useEffect(() => {
    setFactions((prevFactions) =>
      prevFactions.map((faction) => ({ ...faction, nationId })),
    );
  }, [nationId]);

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
        image,
      );

      setName("");
      setTitle("");
      setWeapon("");
      setFactions([]);
      setVisionId("");
      setNationId("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  const elementOptions = elements.map((element) => ({
    value: element.id,
    label: element.name,
  }));
  const nationOptions = nations.map((nation) => ({
    value: nation.id,
    label: nation.name,
  }));

  const weaponOptions = [
    { value: "Sword", label: "Sword" },
    { value: "Bow", label: "Bow" },
    { value: "Catalyst", label: "Catalyst" },
    { value: "Claymore", label: "Claymore" },
    { value: "Polearm", label: "Polearm" },
  ];

  return {
    name,
    setName,
    title,
    setTitle,
    weapon,
    setWeapon,
    factions,
    factionOptions,
    setFactions,
    visionId,
    setVisionId,
    nationId,
    setNationId,
    setImage,
    submitHandler,
    elementOptions,
    nationOptions,
    weaponOptions,
  };
};
