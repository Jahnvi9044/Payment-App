import { NavLink } from 'react-router-dom';

const Service = () => {
  return (
    <div className="relative mt-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">Services
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"> Offered</span>
      </h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We provide a range of different services tailored to meet various needs
        </p>
      </div>

      <div className="space-y-8 mb-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {/* Service Card 1 */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Service A</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best option for individuals looking for personalized solutions
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$49</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span><span className="font-semibold">3</span> Custom Features</span>
            </li>
          </ul>
          <NavLink to="/get-started" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900">Get started</NavLink>
        </div>

        {/* Service Card 2 */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Service B</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best for small businesses looking to enhance productivity
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$79</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span><span className="font-semibold">5</span> Custom Features</span>
            </li>
          </ul>
          <NavLink to="/get-started" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900">Get started</NavLink>
        </div>

        {/* Service Card 3 */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Service C</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best for large enterprises seeking comprehensive solutions
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$199</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span><span className="font-semibold">Unlimited</span> Custom Features</span>
            </li>
          </ul>
          <NavLink to="/get-started" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900">Get started</NavLink>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto max-w-screen-md text-center">
        <p className="text-lg font-medium text-gray-800 dark:text-white">Ready to get started?</p>
        <NavLink to="/signup" className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-semibold">Sign up now</NavLink>
      </div>
    </div>
  );
};

export default Service;
