import { useRef, useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import Select, { type SelectInstance } from "react-select";
import CreatableSelect from "react-select/creatable";

export default function Create() {
  const {
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
  } = useCharacter();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const weaponSelectRef =
    useRef<SelectInstance<{ value: string; label: string }>>(null);

  const elementSelectRef =
    useRef<SelectInstance<{ value: string; label: string }>>(null);
  const nationSelectRef =
    useRef<SelectInstance<{ value: string; label: string }>>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await submitHandler(event);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (weaponSelectRef.current) {
      weaponSelectRef.current.clearValue();
    }

    if (elementSelectRef.current) {
      elementSelectRef.current.clearValue();
    }

    if (nationSelectRef.current) {
      nationSelectRef.current.clearValue();
    }
  };

  if (!isClient) return null;

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="bg-white px-[8px] py-[4px] border border-black text-black rounded-md w-[12rem]"
        />
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="bg-white px-[8px] py-[4px] border border-black text-black rounded-md w-[12rem]"
        />
      </div>
      <div className="flex gap-2 mb-2">
        <Select
          value={weaponOptions.find((option) => option.value === weapon)}
          ref={weaponSelectRef}
          onChange={(selectedOption) => setWeapon(selectedOption?.value || "")}
          options={weaponOptions}
          placeholder="Select Weapon"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "12rem",
              borderColor: "black",
              ":hover": {
                borderColor: "black",
              },
            }),
            option: (styles) => ({ ...styles, color: "black" }),
          }}
        />
      </div>

      <div className="flex gap-2 mb-2">
        <Select
          value={elementOptions.find((option) => option.value === visionId)}
          ref={elementSelectRef}
          onChange={(selectedOption) =>
            setVisionId(selectedOption?.value || "")
          }
          options={elementOptions}
          placeholder="Select Vision"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "12rem",
              borderColor: "black",
              ":hover": {
                borderColor: "black",
              },
            }),
            option: (styles) => ({ ...styles, color: "black" }),
          }}
        />
      </div>
      <div className="flex gap-2 mb-2">
        <Select
          value={nationOptions.find((option) => option.value === nationId)}
          ref={nationSelectRef}
          onChange={(selectedOption) =>
            setNationId(selectedOption?.value || "")
          }
          options={nationOptions}
          placeholder="Select Nation"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "12rem",
              borderColor: "black",
              ":hover": {
                borderColor: "black",
              },
            }),
            option: (styles) => ({ ...styles, color: "black" }),
          }}
        />
      </div>
      <div className="flex gap-2 mb-2">
        <CreatableSelect
          isMulti
          value={factions.map((faction) => ({
            label: faction.name,
            value: faction.name,
          }))}
          onChange={(selectedOptions) => {
            const newFactions = selectedOptions.map((option) => ({
              name: option.label,
              nationId,
            }));
            setFactions(newFactions);
          }}
          options={factionOptions}
          placeholder="Select or create factions"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "18rem",
              borderColor: "black",
              ":hover": {
                borderColor: "black",
              },
            }),
            option: (styles) => ({ ...styles, color: "black" }),
          }}
        />
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              setImage(file);
            }
          }}
          className="bg-white text-black rounded-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-[#393b40] text-xl text-[#f4c780] px-8 py-2 rounded-md mt-2"
      >
        Create
      </button>
    </form>
  );
}
