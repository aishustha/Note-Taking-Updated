const NOTES = [];

export default async(req, res) => {
  
  switch (req.method) {
    case 'GET':
      
      if(req.query.id) {
        const id  = req.query.id;
        const notes = NOTES;
        let getNote = [];
        Object.keys(notes).forEach((key) => {
            if (notes[key].id == id) {
                getNote = notes[key];
            }
        })
        res.json({data: getNote});
      } else {
        res.statusCode = 200;
        res.json({ data: NOTES });
      }

      break;

    case 'POST':
    //req.body - An object containing the body parse by content-type or null if no body was sent
      let id = req.body.id;
      const title = req.body.title;
      const description = req.body.description;
      const postdata = {id: Math.random().toString(36).substr(2, 9),title: title, description: description};
      NOTES.push(postdata);
      console.log('post request');
      console.log(NOTES);
      res.statusCode = 200
      res.json({ data: postdata });

      break;

    case 'DELETE':
      let idDelete = req.query.id; //id -> note id to be deleted
      const removeNote = NOTES.findIndex((note) => note.id !==idDelete ); //findIndex return the first element in the array
      console.log(removeNote);
      NOTES.splice(removeNote, 1); //The splice () method adds/removes items to/from an array, and returns the removed item (s).
      res.statusCode = 200
      res.json({ data: NOTES });
      break;

      case 'PUT':
        let updateID =  req.query.id;
        console.log(updateID);
        const updateTitle = req.body.title;
        const updateDescription = req.body.description;
        console.log("old data =>", NOTES)
        //const filteredObjs = NOTES.filter(note=>note.id !== updateID);
        const newObj = {id: updateID, title: updateTitle, description: updateDescription}
        NOTES.push(newObj);
        console.log("new data =>", NOTES)
        res.statusCode = 200
        res.json({data: newObj});
        break;

    default:
      break;
  }  
}

