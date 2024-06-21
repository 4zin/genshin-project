import { useCharacter } from "../hooks/useCharacter";

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
    addFaction,
    submitHandler,
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
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={weapon}
          onChange={(event) => setWeapon(event.target.value)}
          placeholder="Weapon"
          className="bg-white px-2 text-black rounded-sm"
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
      {/* <button type="button" onClick={addFaction}>
        Add Faction
      </button> */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={visionId}
          onChange={(event) => setVisionId(event.target.value)}
          placeholder="Vision"
          className="bg-white px-2 text-black rounded-sm"
        />
      </div>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={nationId}
          onChange={(event) => setNationId(event.target.value)}
          placeholder="Nation ID"
          className="bg-white px-2 text-black rounded-sm"
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
