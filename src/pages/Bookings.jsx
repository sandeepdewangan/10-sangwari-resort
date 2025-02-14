import BookingsTable from "../features/bookings/BookingsTable";

const Bookings = () => {
  return (
    <div className="mx-25">
      <span className="text-2xl">Bookings Table</span>
      <div className="pt-2">
        <BookingsTable />
      </div>
    </div>
  );
};

export default Bookings;
