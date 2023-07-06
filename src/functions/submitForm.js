// export const submitForm = async (data) => {
//   try {
//     const apiKey = process.env.SENDGRID_API_KEY; // Retrieve the API key from the environment variable

//     const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`, // Use the retrieved API key in the Authorization header
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         personalizations: [
//           {
//             to: [
//               {
//                 email: "grozavlia@gmail.com", // Replace with your recipient email address
//               },
//             ],
//             subject: "New Form Submission",
//           },
//         ],
//         from: {
//           email: "liagrozav@yahoo.com", // Replace with your sender email address
//           name: "Sender Name", // Replace with your sender name
//           reply_to: {
//             email: "liagrozav@yahoo.com", // Replace with your reply-to email address
//             name: "Reply-to Name", // Replace with your reply-to name
//           },
//         },
//         content: [
//           {
//             type: "text/plain",
//             value: `
//               Name: ${data.name}
//               Email: ${data.email}
//               Message: ${data.message}
//             `,
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit form");
//     }

//     console.log("Form submitted successfully");
//   } catch (error) {
//     console.error("Failed to submit form:", error);
//   }
// };
