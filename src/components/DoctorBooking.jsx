// DoctorBooking.jsx
import React from 'react';
import { useParams } from 'react-router';

const DoctorBooking = () => {
  const { doctorId } = useParams();

  const dummyDoctor = {
    d1: { name: 'Dr. Mahabubur Rahman', specialty: 'Emergency Medicine' },
    d2: { name: 'Dr. James Lee', specialty: 'Trauma Surgery' },
    d3: { name: 'Sarah Mitchell', specialty: 'Mental Health & Counseling' },
    d4: { name: 'Dr. Ayesha Karim', specialty: 'Pediatrics' },
    d5: { name: 'Dr. Tariq Hasan', specialty: 'Cardiology' },
  }[doctorId] || { name: 'Unknown Doctor', specialty: 'N/A' };

  return (
    <div>
      <div className="mt-16"></div>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl my-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Book an Appointment
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          You are booking an appointment with:
          <span className="font-extrabold text-[#FF9B10] block mt-2">
            {dummyDoctor.name}
          </span>
          <span className="text-sm text-gray-500">
            ({dummyDoctor.specialty})
          </span>
        </p>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 focus:border-[#FF9B10] focus:ring-[#FF9B10]"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Time Slot
            </label>
            <select
              id="time"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 focus:border-[#FF9B10] focus:ring-[#FF9B10]"
            >
              <option>9:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>2:00 PM - 3:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Need help? Call us at +880 1234 567 89
        </p>
      </div>
    </div>
  );
};

export default DoctorBooking;
