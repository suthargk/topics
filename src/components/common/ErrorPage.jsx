import { useNavigate, useRouteError } from "react-router";
import PageNotFound from "../../assets/images/PageNotFound";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col text-center space-y-4">
      <PageNotFound />
      <h3 className="text-gray-500">{error.statusText}</h3>
      <p>{error.data}</p>
      <button
        onClick={() => navigate("")}
        className="mx-auto space-x-1 px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 rounded-md"
        type="button"
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
