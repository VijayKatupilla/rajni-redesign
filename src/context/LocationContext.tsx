"use client";

import { createContext, useContext, useState } from "react";

export type Location = {
  name: string;
  city: string;
  address: string;
  phone: string;
  map: string;
  order?: string;
  hours: string[];
};

export const locations: Location[] = [
  {
    name: "Rajni Madison",
    city: "Madison, WI",
    address: "429 Commerce Drive, Madison, WI 53719",
    phone: "(608) 123-4567",
    map: "https://www.google.com/maps/place/Rajni+Indian+Cuisine,+429+Commerce+Dr,+Madison,+WI+53719",
    order: "https://order.toasttab.com/online/rajni-madison-429-commerce-drive",
    hours: [
      "Mon-Thu: 11:00 AM - 2:30 PM / 5:00 PM - 9:00 PM",
      "Fri-Sat: 11:00 AM - 2:30 PM / 5:00 PM - 10:00 PM",
      "Sun: 11:00 AM - 2:30 PM / 5:00 PM - 9:00 PM",
    ],
  },
  {
    name: "Rajni Atlanta",
    city: "Atlanta, GA",
    address: "Peachtree Street, Atlanta, GA",
    phone: "(470) 555-1212",
    map: "https://www.google.com/maps/search/?api=1&query=Rajni+Indian+Cuisine+Atlanta+GA",
    order: "",
    hours: [
      "Mon-Thu: 11:00 AM - 2:30 PM / 5:00 PM - 9:30 PM",
      "Fri-Sat: 11:00 AM - 2:30 PM / 5:00 PM - 10:30 PM",
      "Sun: 11:00 AM - 2:30 PM / 5:00 PM - 9:00 PM",
    ],
  },
  {
    name: "Rajni Parsippany",
    city: "Parsippany, NJ",
    address: "Morris Corporate Center, Parsippany, NJ",
    phone: "(973) 555-2020",
    map: "https://www.google.com/maps/search/?api=1&query=Rajni+Indian+Cuisine+Parsippany+NJ",
    order: "",
    hours: [
      "Mon-Thu: 11:00 AM - 2:30 PM / 5:00 PM - 9:00 PM",
      "Fri-Sat: 11:00 AM - 2:30 PM / 5:00 PM - 10:00 PM",
      "Sun: 11:00 AM - 2:30 PM / 5:00 PM - 9:00 PM",
    ],
  },
];

type LocationContextValue = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const LocationContext = createContext<LocationContextValue | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return <LocationContext.Provider value={{ selectedIndex, setSelectedIndex }}>{children}</LocationContext.Provider>;
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used within LocationProvider");
  return ctx;
}
