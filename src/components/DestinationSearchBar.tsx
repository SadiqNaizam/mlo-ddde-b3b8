import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { MapPin, Calendar as CalendarIcon, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";

const DestinationSearchBar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const { toast } = useToast();

  useEffect(() => {
    console.log("DestinationSearchBar loaded");
  }, []);

  const handleSearch = () => {
    if (!destination) {
      toast({
        title: "Missing Destination",
        description: "Please enter a destination to begin your search.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Search Initiated",
      description: `Searching for trips to ${destination}${date?.from ? ` from ${format(date.from, "LLL dd, y")}` : ""}${date?.to ? ` to ${format(date.to, "LLL dd, y")}` : ""}.`,
    });
    console.log("Searching with state:", { destination, date });
  };

  return (
    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full max-w-4xl mx-auto border">
      {/* Destination Input */}
      <div className="relative flex-grow w-full">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="h-14 pl-10 text-base font-body w-full border-0 md:border-r md:rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {/* Date Picker */}
      <div className="w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "h-14 w-full md:w-[300px] justify-start text-left font-normal text-base border-0 md:border-r md:rounded-none",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span className="font-body">Pick your dates</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto">
        <Button
          onClick={handleSearch}
          className="h-14 w-full md:w-auto px-8 text-lg font-heading font-bold"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default DestinationSearchBar;