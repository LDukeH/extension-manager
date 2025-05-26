import { useEffect } from "react";
import { Card } from "./Card";
import useExtensionStore from "@/stores/extensionStore";

function FilterButton({ label, active }: { label: string; active?: boolean }) {
  const { setFilter } = useExtensionStore();
  return (
    <button
      className={`${
        active ? "active" : ""
      } px-4 py-1 rounded-4xl bg-bg-primary box-border outline-1 outline-gray-500 focus:outline-focus-primary hover:brightness-theme shadow-sm transition-all duration-300 cursor-pointer`}
      onClick={() => setFilter(label)}
    >
      {label}
    </button>
  );
}

export function ExtensionList() {
  const { extensions, fetchExtensions } = useExtensionStore();
  const { filter } = useExtensionStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchExtensions();
    };
    fetchData();
  }, []);

  const filterExtensions = extensions.filter((extension: any) => {
    if (filter === "All") return true;
    if (filter === "Active") return extension.isActive;
    if (filter === "Inactive") return !extension.isActive;
    return true;
  });
  return (
    <div className="text-primary ">
      <div className="flex justify-between items-center gap-3 w-full">
        <h1 className="md:text-2xl text-2 font-bold w-32 md:w-fit">
          Extensions List
        </h1>
        <div className="flex gap-4 text-sm sm:text-xl">
          <FilterButton label="All" active={filter === "All"} />
          <FilterButton label="Active" active={filter === "Active"} />
          <FilterButton label="Inactive" active={filter === "Inactive"} />
        </div>
      </div>
      <div className="w-full h-112 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-3 overflow-scroll overflow-x-hidden">
        {filterExtensions.map((extension: any, index: number) => (
          <Card key={index} data={extension} index={index} />
        ))}
      </div>
    </div>
  );
}
