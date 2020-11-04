export const updateObjectInArray = (array, objectToUpdate) =>
  array.map((item) =>
    item.id === objectToUpdate.id
      ? {
          ...item,
          ...objectToUpdate,
        }
      : item
  );

export const removeItem = (array, id) => array.filter((item) => item.id !== id);
