const BookingsTable = () => {
  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Name</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Start Date</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">End Date</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal"># of Nights</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal"># of Guests</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Cabin Price</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Extra Price</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Total Price</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Status</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Status</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Status</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Status</p>
              </th>
              <th className="p-2">
                <p></p>
              </th>
            </tr>
          </thead>
          {/* {cabins.map((cabin) => (
            <Cabin key={cabin.id} cabin={cabin} />
          ))} */}
        </table>
      </div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
        // onClick={() => setShowForm(!showForm)}
      >
        Show Cabin Form
      </button>
      {/* {showForm ? (
    <div className="w-[40%] pt-10">
      <CabinForm />
    </div>
  ) : (
    <p>Click to create a new room.</p>
  )} */}
    </div>
  );
};

export default BookingsTable;
