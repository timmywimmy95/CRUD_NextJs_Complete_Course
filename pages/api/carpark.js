// import Cors from 'cors';
// import initMiddleware from '../../lib/init-middleware';

// //http://localhost:3000/api/cors

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// );

// let token = '';

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/cors');
//   const data = await response.json();
//   token = data.Result;
// }

// getServerSideProps();
// console.log(token);

// export default async function handler(req, res) {
//   // Run cors
//   await cors(req, res);

//   // Rest of the API logic
//   try {
//     const response = await fetch(
//       'https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Availability',
//       {
//         method: 'GET', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//           AccessKey: process.env.URA_ACCESS_KEY,
//           Token: token,
//         },
//       }
//     );

//     const result = await response.json();
//     res.status(200).json(result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
