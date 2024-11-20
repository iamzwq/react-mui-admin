import { Outlet } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <div>Product</div>
      <Outlet />
    </div>
  );
}
