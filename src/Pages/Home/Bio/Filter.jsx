

const Filter = ({filters}) => {
  const { Image,Biodata_Type,Permanent_Division_Name} =filters;
 return (
                              <div>
                              <div className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <div>
                                  <img className="rounded-t-lg w-full h-72" src={Image} alt="" />
                              </div>
                              <div className="flex justify-between">
                                  <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Permanent Division Name: {Permanent_Division_Name}</h5>
                                  <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Biodata Type : {Biodata_Type}</h5>
                              </div>
                              <div className="p-5">
                                  <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  
                                       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                      </svg>
                                  </div>
                              </div>
                          </div>                                                                                      
                            </div>
 );
};

export default Filter;