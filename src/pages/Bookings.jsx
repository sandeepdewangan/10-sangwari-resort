import BookingTable from "../features/bookings/BookingTable";

const Bookings = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Bookings Table</span>
      <div className="pt-2">
        <BookingTable />
      </div>
    </div>
  );
};

export default Bookings;
