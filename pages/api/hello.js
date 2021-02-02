const NOTES = [];

/**
 * API has 4 methods
 * GET -> get data
 * POST -> create new data
 * PUT -> update existing data
 * DELETE -> delete data
 */

export default async(req, res) => {
  
  switch (req.method) {
    case 'GET':
      
      if(req.query.id) {
        const id  = req.query.id;
        const notes = NOTES;
        let setNote = [];
        Object.keys(notes).forEach((key) => {
            if (notes[key].id == id) {
                setNote = notes[key];
            }
        })
        // console.log(retNote);
        res.json({data: setNote});
      }else {
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
      console.log("DELETE")
      let idDelete = req.body.id; //id -> note id to be deleted
      const _note = NOTES.findIndex((note) => note.id !==idDelete );
      console.log(_note);

      NOTES.splice(_note, 1); //The splice () method adds/removes items to/from an array, and returns the removed item (s).

      res.statusCode = 200
      res.json({ data: NOTES });
      break;

      case 'PUT':
        let updateID =  req.query.id;
        console.log(updateID)
        const _title = req.body.title;
        const _description = req.body.description;
      console.log("old data =>", NOTES)
        const filteredObjs = NOTES.filter(note=>note.id !== updateID);
        const newObj = {id: updateID, title: _title, description: _description}
        NOTES.push(...filteredObjs, newObj);
        console.log("new data =>", NOTES)
        res.statusCode = 200
        res.json({data: newObj});
        break;
        // const _updateObjId = NOTES.findIndex(note => note.id === updateID);

        // const _updateObj = NOTES[_updateObjId]
        


        // _updateObj.title = title;
        // _updateObj.description = description;

    default:
      break;
  }  
}

