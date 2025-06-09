"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TimeSlot {
  time: string;
  label: string;
}

export const ScheduleOrderDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("");
  const [showAllDays, setShowAllDays] = useState(false);

  const days = [
    { id: "1", name: "Tomorrow", date: "Jun 11" },
    { id: "2", name: "Wed", date: "Jun 12" },
    { id: "3", name: "Thu", date: "Jun 13" },
    { id: "4", name: "Fri", date: "Jun 14" },
    { id: "5", name: "Sat", date: "Jun 15" },
    { id: "6", name: "Sun", date: "Jun 16" },
  ];

  const timeSlots: TimeSlot[] = [
    { time: "11:45", label: "11:45 AM PDT" },
    { time: "12:00", label: "12:00 PM PDT" },
    { time: "8:00", label: "8:00 PM PDT" },
  ];

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="w-full md:w-auto shadow-none ">
        Schedule your pickup
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[100vw] max-w-[100vw] border-0 rounded-none md:rounded-lg bg-white p-0 sm:w-full sm:max-w-md md:max-w-2xl">
          <div className="flex h-[100dvh] max-h-[100vh] flex-col sm:h-[80vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl md:text-3xl">
                  Schedule order
                </DialogTitle>
              </DialogHeader>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border p-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Main scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 pb-4 sm:px-6">
              {/* Days Selection */}
              <div>
                <div className="grid grid-cols-2 gap-2">
                  {days.slice(0, showAllDays ? days.length : 2).map((day) => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => setSelectedDay(day.name)}
                      className={`rounded-2xl border p-3 text-left transition-colors sm:p-4 ${
                        selectedDay === day.name
                          ? "border-2 border-gray-900"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium sm:text-base">
                          {day.name}
                        </span>
                        <span className="text-xs text-gray-500 sm:text-sm">
                          {day.date}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setShowAllDays(!showAllDays)}
                  className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl border border-gray-200 p-3 text-sm hover:border-gray-300 sm:p-4 sm:text-base"
                >
                  <span>Show {showAllDays ? "less" : "more"}</span>
                  {showAllDays ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Time Selection */}
              <div className="mt-4 sm:mt-6">
                <h3 className="mb-3 text-sm font-medium sm:mb-4 sm:text-base">
                  Time
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot.time}
                      className="flex cursor-pointer items-center gap-3 border-b py-3 sm:py-4"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 sm:h-6 sm:w-6">
                        <input
                          type="radio"
                          name="time-slot"
                          checked={selectedTime === slot.time}
                          onChange={() => setSelectedTime(slot.time)}
                          className="sr-only"
                        />
                        {selectedTime === slot.time && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-900 sm:h-3 sm:w-3" />
                        )}
                      </div>
                      <span className="text-sm sm:text-base">{slot.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4 sm:p-6 ">
              <Button
                disabled={!selectedTime}
                className={`w-full gap-2 p-4 text-sm sm:p-6 sm:text-base ${
                  !selectedTime
                    ? "bg-gray-300 text-gray-600"
                    : "bg-[#B90606] text-white hover:bg-[#B90606]/90"
                }`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 " />
                Schedule your pickup
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
