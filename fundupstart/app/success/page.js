import Login from "@/components/Login";
import Payments from "@/components/Payment";
import { useRouter } from "next/navigation";

const payments = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful
        </h1>
      </div>
    </div>
  );
};

export default payments;
