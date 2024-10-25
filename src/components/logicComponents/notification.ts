import { toast } from "react-toastify";

export const notify = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  toast("No disponible", {
    position: "bottom-right",
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    className: "bg-slate-900 text-white",
  });
};
