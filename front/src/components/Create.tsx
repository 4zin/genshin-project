import { useCharacter } from "../hooks/useCharacter";
import Select from "react-select";

export default function Create() {
  const {
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
    handleFactionChange,
    submitHandler,
    elementOptions,
    nationOptions,
    weaponOptions,
  } = useCharacter();

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="bg-white px-2 text-black rounded-sm"
        />
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="bg-white px-2 text-black rounded-sm"
        />
      </div>
      <div className="flex gap-2 mb-2 w-[12rem]">
        <Select
          value={weaponOptions.find((option) => option.value === weapon)}
          onChange={(selectedOption) => setWeapon(selectedOption?.value || "")}
          options={weaponOptions}
          placeholder="Select Weapon"
          className="text-black"
        />
      </div>
      {factions.map((faction, index) => (
        <div key={index} className="flex flex-col gap-2 mb-2">
          <input
            type="text"
            value={faction.nationId}
            onChange={(event) =>
              handleFactionChange(index, "nationId", event.target.value)
            }
            placeholder="Faction Nation ID"
            className="bg-white px-2 text-black rounded-sm"
          />
          <input
            type="text"
            value={faction.name}
            onChange={(event) =>
              handleFactionChange(index, "name", event.target.value)
            }
            placeholder="New Faction Name (if not existing)"
            className="bg-white px-2 text-black rounded-sm"
          />
        </div>
      ))}
      <div className="flex gap-2 mb-2 w-[12rem]">
        <Select
          value={elementOptions.find((option) => option.value === visionId)}
          onChange={(selectedOption) =>
            setVisionId(selectedOption?.value || "")
          }
          options={elementOptions}
          placeholder="Select Vision"
          className="text-black"
        />
      </div>
      <div className="flex gap-2 mb-2 w-[12rem]">
        <Select
          value={nationOptions.find((option) => option.value === nationId)}
          onChange={(selectedOption) =>
            setNationId(selectedOption?.value || "")
          }
          options={nationOptions}
          placeholder="Select Nation"
          className="text-black"
        />
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="file"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              setImage(file);
            }
          }}
          className="bg-white px-2 text-black rounded-sm"
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
