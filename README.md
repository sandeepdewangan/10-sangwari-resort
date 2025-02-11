## Sangwari Resort Project

### Project requirements from the business

- Users of the apps are hotel employees. They need to login to perform various tasks.
- New users can be created inside the application.
- User can change photo, name and password.
- Table view of cabin showing cabin photo, name, capacity, price and discount.
- User can update or delete cabin and create new cabin.
- Table view for bookings, showing arrival, departures, status, paid amount, cabin and guest data.
- Booking status -> unconfirmed, checked in, checked out. Apply table filters also.
- Other booking data includes num of gusts, number of nights, guest observations, are they booked for breakfast, breakfast price.
- User can be able to delete, check in, check out as the guest arrives.
- On check in user can add breakfast for the entire stay or selected stay.
- Guest data -> fullname, email, national ID, nationality, country flag.
- Dashboard containing all stats.
- User can be able to define a few application wide settings like, breakfast price, min and max nights/booking, max guests/booking.
- App needs a dark mode.

### App Features and Pages

- Booking `/bookings`
- Cabins `/cabins`
- Guests
- Dashboard
- Check in and out `/checkin/:bookingID`
- App Settings `/settings`
- Authentication `/users` `/login` `/account`
  Extra Page: `dashboard`

### Client Side Rendering or Server Side Rendering

CSR with Plain React:

- Single Page Application.
- All HTML is rendered on client.
- All JS needs to be downloaded before app starts.
- Used internally as inside companies.
  SSR with Next.js:
- Multi Page Application.
- All HTML is rendered on server.
- Some JS needs to be downloaded.

### Technology Decisions

1. **Routing:** React Router (Best for routing)
2. **Styling:** Tailwind (Best styling method)
3. **Remote State Management:** React Query (Best way of managing remote state)
4. **UI State Management:** Context API or Redux (We will use ContextAPI bez there is almost no UI State)
5. **Form Management:** React Hook Form
6. React Icons, React Hot Toast, ReCharts, Date-fns, Supabase

### React Router

Setup `npm install react-router-dom@latest`
