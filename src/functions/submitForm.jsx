import axios from "axios";

export const submitForm = async (data) => {
  try {
    await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [
              {
                email: "grozavlia@gmail.com", // Replace with your recipient email address
              },
            ],
            subject: "New Form Submission",
          },
        ],
        from: {
          email: "liagrozav@yaho.com", // Replace with your sender email address
          name: "Sender Name", // Replace with your sender name
          reply_to: {
            email: "liagrozav@yaho.com", // Replace with your reply-to email address
            name: "Reply-to Name", // Replace with your reply-to name
          },
        },
        content: [
          {
            type: "text/plain",
            value: `
              Name: ${data.name}
              Email: ${data.email}
              Message: ${data.message}
            `,
          },
        ],
      },
      {
        headers: {
          Authorization: "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", // Replace with your SendGrid API key
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Form submitted successfully");
  } catch (error) {
    console.error("Failed to submit form:", error);
    throw new Error("Failed to submit form");
  }
};

export default submitForm;
