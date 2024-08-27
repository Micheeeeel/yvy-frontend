import { useRouteError } from "react-router-dom";

type ErrorResponse = {
  statusText?: string;
  message?: string;
};

type HTTPErrorResponse = {
  status?: number;
  statusText: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse | HTTPErrorResponse | null;

  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as HTTPErrorResponse)?.statusText ??
            (error as ErrorResponse)?.message ??
            "Unknown error"}
        </i>
      </p>
    </div>
  );
}
