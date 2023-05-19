export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}

// handling form input w/ API routes
// save to database, api route code will not be part of client bundle, so can safely write server-side code

// export default function handler(req, res) {
//     const email = req.body.email;
//     // Then save email to your database, etc...
//   }
  