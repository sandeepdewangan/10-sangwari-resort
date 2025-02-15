import { useBookings } from "../../hooks/useBookings";
import Booking from "./Booking";

const BookingTable = () => {
  // const [showForm, setShowForm] = useState(false);
  const { isLoading, bookings, error } = useBookings();

  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Full Name</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Cabin</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Start Date</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">End Date</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal"># Nights</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal"># Guests</p>
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
                <p className="text-sm leading-none font-normal">
                  Has Breakfast
                </p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Is Paid?</p>
              </th>
              <th className="p-2">
                <p className="text-sm leading-none font-normal">Observations</p>
              </th>
              <th className="p-2">
                <p></p>
              </th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <Booking key={booking.id} booking={booking} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
