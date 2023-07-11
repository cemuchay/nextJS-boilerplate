import { NextApiResponse } from "next";

const dummyRes = (res: NextApiResponse) => {
  res.status(400).json({
    success: true,
    data: null,
    message: "This is a dummy response",
  });
};

export default dummyRes;
