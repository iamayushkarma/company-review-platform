import { ChevronDown, MapPin, Plus, Search } from "lucide-react";

interface HomeFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onAddCompany: () => void;
}

const HomeFilters = ({ search, setSearch, onAddCompany }: HomeFiltersProps) => {
  return (
    <section className="mt-10 flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-wrap items-end gap-4">
        {/* City */}

        <div className="w-80">
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Select City
          </label>

          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search company..."
              className="h-12 w-full rounded-lg border border-gray-300 px-4 pr-10 outline-none transition focus:border-violet-600"
            />

            <MapPin
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-violet-600"
            />
          </div>
        </div>

        {/* Find */}

        <button className="flex h-12 items-center gap-2 rounded-lg bg-violet-600 px-6 text-white transition hover:bg-violet-700">
          <Search size={18} />

          <span>Find Company</span>
        </button>

        {/* Add Company */}

        <button
          onClick={onAddCompany}
          className="flex h-12 items-center gap-2 rounded-lg bg-violet-600 px-6 text-white transition hover:bg-violet-700"
        >
          <Plus size={18} />

          <span>Add Company</span>
        </button>
      </div>

      {/* Sort */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-600">
          Sort
        </label>

        <div className="relative">
          <select className="h-12 w-40 appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-10 outline-none">
            <option value="createdAt">Newest</option>

            <option value="name">Name</option>

            <option value="rating">Rating</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFilters;
