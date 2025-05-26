import Image from "next/image";
import useExtensionStore from "@/stores/extensionStore";

interface Extension {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

export function Card({ data, index }: { data: Extension; index: number }) {
  const { setActive, removeExtension, extensions } = useExtensionStore();
  const currentExtension = extensions.find((ext) => ext.name === data.name);
  const isActive = currentExtension?.isActive;

  return (
    <div className="col-span-1 w-full h-48 bg-bg-primary rounded-3xl p-5 border-1 border-gray-500 flex flex-col justify-between shadow-lg">
      <div className="flex flex-row gap-4 ">
        <div className="mt-1">
          <Image
            src={data.logo.trim()}
            alt={data.name}
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl text-primary font-bold">{data.name}</h2>
          <p className="text-sm text-secondary">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => removeExtension(data.name)}
          className="outline-1 rounded-2xl text-primary font-medium py-1 px-2 focus:outline-focus-primary cursor-pointer hover:bg-focus-primary hover:outline-focus-primary hover:text-text-hover  transition-all duration-300 ease-in-out"
        >
          Remove
        </button>
        <form>
          <label className="switch hover:brightness-75 transition-all duration-300 ease-in-out">
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => setActive(data.name)}
            ></input>
            <span className="slider"></span>
          </label>
        </form>
      </div>
    </div>
  );
}
