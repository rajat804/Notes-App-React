// src/component/utlis/findNotesArchive.js

export const findNotesInArchive = (archive , id) => {
    // return archive.some(note => note.id === id);
    return Array.isArray(archive) && archive.some(note => note.id === id);
  } 

//   export default findNotesInArchive;