// Test database.
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
      res.statusCode = 200
      res.json({ data: NOTES })
      break;
    case 'POST':
      const id = req.body.id;
      const title = req.body.title;
      const description = req.body.description;
      NOTES.push({id: id,title: title, description: description});
      console.log('post request');
      console.log(NOTES);
      res.statusCode = 200
      res.json({ data: NOTES });
      break;
    default:
      break;
  }  
}

// export default async(req, res) => {
//   const data = 
//     {   
//         title: 'Pages',
//         description: 'In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.'
//     }
  
//   res.statusCode = 200
//   res.json({data})
// }


