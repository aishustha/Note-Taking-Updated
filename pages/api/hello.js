export default async(req, res) => {
  const data = 
    {   
        title: 'Pages',
        description: 'In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.'
    }
  
  res.statusCode = 200
  res.json({data})
}

