"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface Location {
  id: string;
  name: string;
  slug?: string;
  status: string;
  address: string;
}

interface LocationContextType {
  selectedLocation: string | null;
  setSelectedLocation: (id: string | null) => void;
  locations: Location[];
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = useMemo(
    () => [
      {
        id: "nWqvW8vTEknD",
        name: "Metro Pizza - Green Valley",
        slug: "green-valley",
        status: "Closed until 11:00 AM PDT",
        address: "1420 W Horizon Ridge Pkwy, Henderson, NV 89012, USA",
      },
      {
        id: "sCxs2Rm88CU2",
        name: "Metro Pizza - Tropicana",
        status: "Closed until 11:00 AM PDT",
        address: "1395 E Tropicana Ave, Las Vegas, NV 89119, USA",
      },
      {
        id: "9qdPXDuXyKA0",
        name: "Metro Pizza - Decatur",
        status: "Closed until 11:00 AM PDT",
        address: "4001 S Decatur Blvd, Las Vegas, NV 89103, USA",
      },
      {
        id: "FcuzBPk5UhUP",
        name: "Metro Pizza - Northwest",
        status: "Closed until 11:00 AM PDT",
        address: "6720 Sky Pointe Dr, Las Vegas, NV 89131, USA",
      },
    ],
    [],
  );

  // Load selectedLocation from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocation = localStorage.getItem("selectedLocation");
      if (
        storedLocation &&
        locations.some((loc) => loc.id === storedLocation)
      ) {
        setSelectedLocation(storedLocation);
      }
    }
  }, [locations]);

  // Save selectedLocation to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedLocation) {
        localStorage.setItem("selectedLocation", selectedLocation);
      } else {
        localStorage.removeItem("selectedLocation");
      }
    }
  }, [selectedLocation]);

  return (
    <LocationContext.Provider
      value={{ selectedLocation, setSelectedLocation, locations }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider",
    );
  }
  return context;
};
