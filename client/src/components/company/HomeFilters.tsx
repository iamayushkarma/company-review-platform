import { MapPin, Plus, Search, ChevronDown } from "lucide-react";

const HomeFilters = () => {
  return (
    <section className="mt-10 flex items-end justify-between gap-8">
      <div className="flex items-end gap-5">
        {/* City */}

        <div className="w-[370px]">
          <label className="mb-2 block text-sm font-medium text-text-secondary">
            Select City
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="Indore, Madhya Pradesh, India"
              className="h-12 w-full rounded-md border border-border px-4 pr-10 outline-none"
            />

            <MapPin
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
            />
          </div>
        </div>

        {/* Find */}

        <button className="flex h-12 items-center gap-2 rounded-md bg-primary px-8 font-medium text-white transition hover:bg-primary-hover">
          <Search size={18} />
          Find Company
        </button>

        {/* Add */}

        <button className="flex h-12 items-center gap-2 rounded-md bg-primary px-8 font-medium text-white transition hover:bg-primary-hover">
          <Plus size={18} />
          Add Company
        </button>
      </div>

      {/* Sort */}

      <div>
        <label className="mb-2 block text-sm font-medium text-text-secondary">
          Sort
        </label>

        <div className="relative">
          <select className="h-12 w-36 appearance-none rounded-md border border-border bg-white px-4 outline-none">
            <option>Name</option>

            <option>Rating</option>

            <option>Date</option>
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
