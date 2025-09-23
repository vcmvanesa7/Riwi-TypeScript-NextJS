import { toast } from "react-toastify";

export const notification = (
  text: string,
  type: "error" | "success" | "warning",
  time: number = 5000
) => {
  if (type === "error") {
    toast.error(text, {
      position: "top-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  if (type === "success") {
    toast.success(text, {
      position: "top-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  if (type === "warning") {
    toast.warning(text, {
      position: "top-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
