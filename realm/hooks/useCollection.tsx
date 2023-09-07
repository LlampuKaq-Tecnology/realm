import useUserRealm from "./useUserRealm";

/**
 * Hook para obtener una colección de MongoDB en el contexto de una aplicación Realm.
 *
 * @param db - El nombre de la base de datos.
 * @param collection - El nombre de la colección.
 * @param mongoClient - (Opcional) El nombre del cliente MongoDB. Si no se proporciona, se utiliza "mongodb-atlas" por defecto.
 * @returns La colección deseada o null si no se puede acceder.
 */
function useCollection<T>(
  db: string,
  collection: string,
  mongoClient: string = "mongodb-atlas"
) {
  const { userRealm } = useUserRealm();
  const c = userRealm?.mongoClient(mongoClient).db(db).collection(collection);
  return c;
}

export default useCollection;
