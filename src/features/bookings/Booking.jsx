const Booking = ({ booking }) => {
  return (
    <>
      <tbody key={booking.id}>
        <tr className="hover:bg-slate-50">
          <td className="p-2">
            <p className="text-sm font-bold">{booking.guests.fullName}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.cabins.name}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.startDate}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.endDate}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.numOfNights}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.numOfGuests}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.cabinPrice}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.extraPrice}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.totalPrice}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.status}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.hasBreakfast}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.isPaid}</p>
          </td>
          <td className="p-2">
            <p className="text-sm">{booking.observations}</p>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Booking;
