function ErrorComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">
          Something went wrong. Please try again later.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a.5.5 0 01-.707 0L10 10.707 6.354 14.354a.5.5 0 01-.707-.707l3.646-3.646-3.646-3.646a.5.5 0 01.707-.707L10 9.293l3.646-3.646a.5.5 0 01.707.707L10.707 10l3.646 3.646a.5.5 0 010 .707z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default ErrorComponent;
