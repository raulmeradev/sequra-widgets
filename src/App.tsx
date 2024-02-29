import { InstalmentsSelector } from './components/InstalmentsSelector/index'
import './index.css'

function App() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  seQura
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  Frontend Challenge
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                iPhone 14 Pro
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:pt-10 lg:pb-20 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200">
            <div className="overflow-hidden max-h-96 lg:max-h-full rounded-lg">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=910&hei=833&fmt=jpg"
                alt="iPhone"
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <span className="text-xs uppercase text-orange-300 font-medium">new</span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Apple iPhone 14 PRO</h1>

            <div className="mt-2 mb-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-200 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-green-600 hover:text-green-500">
                  117 reviews
                </a>
              </div>
            </div>

            <p id="product-price" className="text-4xl tracking-tight text-gray-900">
              399,99 €
            </p>

            <div className="form mt-8">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
                  <label className="item-color ring hover:ring relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500">
                    <span id="color-choice-0-label" className="sr-only">
                      white
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                  <label className="item-color hover:ring hover:ring-gray-200 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500">
                    <span id="color-choice-1-label" className="sr-only">
                      purple
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-purple-900 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                  <label className="item-color hover:ring hover:ring-gray-200 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500">
                    <span id="color-choice-2-label" className="sr-only">
                      yellow
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-yellow-300 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                  <label className="item-color hover:ring hover:ring-gray-200 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500">
                    <span id="color-choice-3-label" className="sr-only">
                      red
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 bg-red-600 rounded-full border border-black border-opacity-10"
                    ></span>
                  </label>
                </div>
              </fieldset>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Choose a capacity</h3>
                <fieldset className="mt-4">
                  <legend className="sr-only">Choose a capacity</legend>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                    <label className="product-capacity relative flex items-center justify-center rounded-md border py-2 px-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4 cursor-pointer bg-white text-gray-900 ring ring-green-500">
                      <span data-price="399,99 €">128 GB</span>
                    </label>

                    <label className="product-capacity relative flex items-center justify-center rounded-md border py-2 px-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4 cursor-pointer bg-white text-gray-90 ring-green-500">
                      <span data-price="450,00 €">256 GB</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="quantity mt-6">
                <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                  Quantity
                </label>
                <div className="mt-4 flex flex-row h-10 w-full rounded-md border overflow-hidden relative bg-transparent bg-white text-gray-900 shadow-sm">
                  <div
                    data-action="decrement"
                    className="btn-decrement flex align-center text-gray-700 hover:text-gray-700 hover:bg-gray-100 h-full w-20 rounded-l cursor-pointer"
                  >
                    <span className="m-auto text-xl font-normal">-</span>
                  </div>
                  <input
                    className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black hover:bg-gray-100 focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    defaultValue="1"
                  ></input>
                  <div
                    data-action="increment"
                    className="btn-increment flex align-center hover:text-gray-700 hover:bg-gray-100 h-full w-20 cursor-pointer"
                  >
                    <span className="m-auto text-xl font-normal">+</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 mb-10 flex w-full items-center justify-center rounded-md border border-transparent bg-neutral-900 py-3 px-8 text-base font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
              >
                Add to bag
              </button>

              <InstalmentsSelector />
            </div>

            <div className="mt-10">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  Get your hands on a magical way to use iPhone, combined with security features designed to save lives.
                  And a spectacular 48 Mpx camera that achieves an enormous level of detail. All under the control of
                  the most advanced chip in a smartphone.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">A16 Bionic chip</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Dynamic Island A new way to interact with iPhone</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Superfast 5G cellular</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-xs text-gray-600">
                  Available space is less and varies due to many factors. A standard configuration uses approximately
                  12GB to 17GB of space, including iOS 16 with its latest features and Apple apps that can be deleted.
                </p>
              </div>
            </div>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"></div>
        </div>
      </div>
    </div>
  )
}

export default App
