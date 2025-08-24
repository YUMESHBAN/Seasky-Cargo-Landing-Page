import React, { useEffect, useState } from "react";
import axios from "axios";

interface Futsal {
  id: number;
  name: string;
  location: string;
}

interface Player {
  name: string;
  age: number;
}

interface TeamData {
  name: string;
  location: string;
  skill_level: string;
  futsal_id: number | null;
  preferred_futsal_ids: number[];
}

const API_BASE_URL = "http://127.0.0.1:8000/api";

export default function CreateTeam() {
  const [teamData, setTeamData] = useState<TeamData>({
    name: "",
    location: "",
    skill_level: "",
    futsal_id: null,
    preferred_futsal_ids: [],
  });

  const [players, setPlayers] = useState<Player[]>([
    { name: "", age: 0 },
    { name: "", age: 0 },
  ]);

  const [futsals, setFutsals] = useState<Futsal[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch futsals on mount
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/futsals/`)
      .then((res) => setFutsals(res.data))
      .catch((err) => {
        console.error("❌ Failed to fetch futsals:", err);
        setErrors("Failed to load futsal list.");
      });
  }, []);

  // Handle player input change
  const handlePlayerChange = (
    index: number,
    field: keyof Player,
    value: any
  ) => {
    const updated = [...players];

    if (field === "age") {
      updated[index].age = parseInt(value) || 0;
    } else if (field === "name") {
      updated[index].name = value;
    }

    setPlayers(updated);
  };

  // Add new player
  const addPlayer = () => {
    setPlayers([...players, { name: "", age: 0 }]);
  };

  // Remove player by index
  const removePlayer = (index: number) => {
    if (players.length <= 2) return; // minimum 2 players required
    const updated = [...players];
    updated.splice(index, 1);
    setPlayers(updated);
  };

  // Handle checkbox toggle for preferred futsals
  const togglePreferredFutsal = (id: number) => {
    setTeamData((prev) => {
      const alreadySelected = prev.preferred_futsal_ids.includes(id);
      let newSelected;
      if (alreadySelected) {
        newSelected = prev.preferred_futsal_ids.filter((fId) => fId !== id);
      } else {
        newSelected = [...prev.preferred_futsal_ids, id];
      }
      return { ...prev, preferred_futsal_ids: newSelected };
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors(null);

    // Validate players
    if (players.length < 2) {
      setErrors("At least 2 players are required.");
      return;
    }
    if (players.some((p) => !p.name.trim() || p.age <= 0)) {
      setErrors("Please fill all player names and valid ages.");
      return;
    }

    // Validate preferred futsals
    if (teamData.preferred_futsal_ids.length < 2) {
      setErrors("Select at least 2 preferred futsals.");
      return;
    }

    setLoading(true);

    const payload = {
      ...teamData,
      futsal_id: teamData.futsal_id, // null allowed for optional
      preferred_futsal_ids: teamData.preferred_futsal_ids,
      players,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setErrors("User not authenticated.");
        setLoading(false);
        return;
      }

      const response = await axios.post(`${API_BASE_URL}/teams/`, payload, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      alert("Team created successfully!");
      // Optionally reset form or redirect here

      setLoading(false);
    } catch (error: any) {
      console.error(
        "❌ Team creation failed:",
        error.response || error.message
      );
      setErrors(
        error.response?.data?.detail ||
          "Team creation failed. Please check your inputs."
      );
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Team</h2>
      {errors && (
        <div className="text-red-600 mb-4 font-semibold">{errors}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Team info */}
        <div>
          <label className="block font-semibold mb-1">Team Name:</label>
          <input
            type="text"
            value={teamData.name}
            onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location:</label>
          <input
            type="text"
            value={teamData.location}
            onChange={(e) =>
              setTeamData({ ...teamData, location: e.target.value })
            }
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Skill Level:</label>
          <input
            type="text"
            value={teamData.skill_level}
            onChange={(e) =>
              setTeamData({ ...teamData, skill_level: e.target.value })
            }
            className="w-full border rounded p-2"
          />
        </div>

        {/* Home futsal */}
        <div>
          <label className="block font-semibold mb-1">
            Home Futsal (Optional):
          </label>
          <select
            value={teamData.futsal_id ?? ""}
            onChange={(e) =>
              setTeamData({
                ...teamData,
                futsal_id: e.target.value ? parseInt(e.target.value) : null,
              })
            }
            className="w-full border rounded p-2"
          >
            <option value="">-- Select --</option>
            {futsals.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} - {f.location}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred futsals checkboxes */}
        <div>
          <label className="block font-semibold mb-2">
            Preferred Futsals (Select at least 2):
          </label>
          {futsals.map((futsal) => (
            <label key={futsal.id} className="block">
              <input
                type="checkbox"
                checked={teamData.preferred_futsal_ids.includes(futsal.id)}
                onChange={() => togglePreferredFutsal(futsal.id)}
              />{" "}
              {futsal.name} - {futsal.location}
            </label>
          ))}
        </div>

        {/* Players */}
        <div>
          <h3 className="font-semibold mb-2">Players (min 2):</h3>
          {players.map((player, idx) => (
            <div key={idx} className="border rounded p-3 mb-3">
              <label className="block mb-1 font-semibold">
                Player {idx + 1}
              </label>
              <input
                type="text"
                placeholder="Name"
                value={player.name}
                onChange={(e) =>
                  handlePlayerChange(idx, "name", e.target.value)
                }
                required
                className="w-full mb-2 border rounded p-2"
              />
              <input
                type="number"
                placeholder="Age"
                min={1}
                value={player.age || ""}
                onChange={(e) => handlePlayerChange(idx, "age", e.target.value)}
                required
                className="w-full border rounded p-2"
              />
              {players.length > 2 && (
                <button
                  type="button"
                  className="mt-2 text-red-600 underline"
                  onClick={() => removePlayer(idx)}
                >
                  Remove Player
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addPlayer}
            className="text-blue-600 font-semibold underline"
          >
            + Add Player
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Creating..." : "Create Team"}
        </button>
      </form>
    </div>
  );
}
