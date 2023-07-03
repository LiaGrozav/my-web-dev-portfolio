const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("YSG.1VxD8b42SyCNjRT8VNBZvg.e1xWR5jBh-nV4ntsMnilWIojEBbuKfa5ShpOmX5Or2I");

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  try {
    await sgMail.send({
      to: "grozavlia@gmail.com", // Replace with your recipient email address
      from: "liagrozav@yahoo.com", // Replace with your sender email address
      subject: "New Form Submission",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
    });

    console.log("Form submitted successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Failed to submit form:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to submit form" }),
    };
  }
};
