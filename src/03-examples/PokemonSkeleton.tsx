export const PokemonSkeleton = () => {
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>

      {/* Bloque del título */}
      <div className="h-6 w-40 bg-gray-400 rounded-md animate-pulse mt-4"></div>

      {/* Imagen placeholder */}
      <div className="h-40 w-40 bg-gray-500 rounded-xl animate-pulse mt-6"></div>

      {/* Botones fake */}
      <div className="flex gap-2 mt-6">
        <div className="h-10 w-24 bg-gray-400 rounded-md animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-400 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};
