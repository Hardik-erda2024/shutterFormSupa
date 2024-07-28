import { ModalCompInf } from "../interfaces/compInterface";

export default function ModalComp(prop: ModalCompInf) {
  const { btnText, title, children, onclick, closeOnclick } = prop;
  return (
    <div className="fixed z-50 w-full bg-slate-700 bg-opacity-70 inset-0 p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full mx-auto max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg dark:bg-gray-700">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              onClick={closeOnclick}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">{children}</div>
          {btnText && (
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                onClick={onclick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {btnText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
