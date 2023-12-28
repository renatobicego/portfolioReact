import axios from "axios";

const sendEmail = async ({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) => {
  try {
    await axios.post(
      "https://formcarry.com/s/1Z_LAmVpFc",
      {
        name,
        email,
        message,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default sendEmail;
