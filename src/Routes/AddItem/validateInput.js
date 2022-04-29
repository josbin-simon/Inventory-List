export const checkForError = (data) => {
  let error = false;
  for (let i = 0; i < data.length; i++) {
    const object = data[i];
    if (object.nameError || object.codeError || object.quantityError) {
      error = true;
      break;
    }
  }
  return error;
};
