import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const COST_FACTORS = {
    hotel: {
        budget: 75,
        'mid-range': 150,
        luxury: 300,
    },
    flight: {
        economy: 400,
        business: 1200,
        'first-class': 2500,
    },
    extras: {
        meals: 50, // per day
        tours: 80, // per day
    }
};

type HotelTier = keyof typeof COST_FACTORS.hotel;
type FlightClass = keyof typeof COST_FACTORS.flight;

const CostEstimatorTool: React.FC = () => {
    console.log('CostEstimatorTool loaded');

    const [tripDays, setTripDays] = useState<number>(7);
    const [hotelTier, setHotelTier] = useState<HotelTier>('mid-range');
    const [flightClass, setFlightClass] = useState<FlightClass>('economy');
    const [includeMeals, setIncludeMeals] = useState<boolean>(true);
    const [includeTours, setIncludeTours] = useState<boolean>(false);

    const totalCost = useMemo(() => {
        const hotelCost = COST_FACTORS.hotel[hotelTier] * tripDays;
        const flightCost = COST_FACTORS.flight[flightClass];
        const extrasCost = ( (includeMeals ? COST_FACTORS.extras.meals : 0) + (includeTours ? COST_FACTORS.extras.tours : 0) ) * tripDays;

        return hotelCost + flightCost + extrasCost;
    }, [tripDays, hotelTier, flightClass, includeMeals, includeTours]);
    
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-border/60">
            <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-6 md:p-8">
                    <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-3xl font-heading text-foreground">Trip Cost Estimator</CardTitle>
                        <CardDescription className="text-muted-foreground font-body mt-1">
                            Adjust the options below to get a real-time cost estimate for your dream trip.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-8">
                        {/* Trip Duration Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-baseline">
                                <Label htmlFor="trip-days" className="text-lg font-medium font-body">Trip Duration</Label>
                                <span className="text-lg font-semibold text-primary">{tripDays} Days</span>
                            </div>
                            <Slider
                                id="trip-days"
                                defaultValue={[tripDays]}
                                min={1}
                                max={30}
                                step={1}
                                onValueChange={(value) => setTripDays(value[0])}
                                aria-label="Trip Duration Slider"
                            />
                        </div>

                        <Separator />
                        
                        {/* Accommodation & Flights Selectors */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="hotel-tier" className="font-medium font-body">Hotel Tier</Label>
                                <Select onValueChange={(value: HotelTier) => setHotelTier(value)} defaultValue={hotelTier}>
                                    <SelectTrigger id="hotel-tier" className="w-full"><SelectValue placeholder="Select hotel tier" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="budget">Budget (≈ {formatCurrency(COST_FACTORS.hotel.budget)}/night)</SelectItem>
                                        <SelectItem value="mid-range">Mid-Range (≈ {formatCurrency(COST_FACTORS.hotel['mid-range'])}/night)</SelectItem>
                                        <SelectItem value="luxury">Luxury (≈ {formatCurrency(COST_FACTORS.hotel.luxury)}/night)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="flight-class" className="font-medium font-body">Flight Class</Label>
                                <Select onValueChange={(value: FlightClass) => setFlightClass(value)} defaultValue={flightClass}>
                                    <SelectTrigger id="flight-class" className="w-full"><SelectValue placeholder="Select flight class" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="economy">Economy</SelectItem>
                                        <SelectItem value="business">Business</SelectItem>
                                        <SelectItem value="first-class">First Class</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Separator />

                        {/* Add-ons Switches */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                                <Label htmlFor="include-meals" className="font-medium font-body flex flex-col">
                                    <span>Daily Meals Included</span>
                                    <span className="text-xs text-muted-foreground">Breakfast, Lunch & Dinner</span>
                                </Label>
                                <Switch id="include-meals" checked={includeMeals} onCheckedChange={setIncludeMeals} />
                            </div>
                             <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                                <Label htmlFor="include-tours" className="font-medium font-body flex flex-col">
                                    <span>Guided Tours & Activities</span>
                                     <span className="text-xs text-muted-foreground">Entry fees & local guides</span>
                                </Label>
                                <Switch id="include-tours" checked={includeTours} onCheckedChange={setIncludeTours} />
                            </div>
                        </div>
                    </CardContent>
                </div>

                {/* Cost Display */}
                <div className="md:col-span-2 bg-secondary/40 dark:bg-secondary/20 flex flex-col items-center justify-center p-8 text-center border-l border-border/60 rounded-r-lg">
                    <h3 className="text-lg font-body text-muted-foreground mb-2">Estimated Total Cost</h3>
                    <div className="relative h-20 w-full overflow-hidden">
                        <motion.div
                            key={totalCost}
                            initial={{ y: '100%', opacity: 0 }}
                            animate={{ y: '0%', opacity: 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <p className="text-5xl lg:text-6xl font-bold font-heading text-primary tracking-tight">
                                {formatCurrency(totalCost)}
                            </p>
                        </motion.div>
                    </div>
                     <p className="text-xs text-muted-foreground mt-4 font-body text-balance">
                        This is an indicative cost. Prices may vary based on availability and season.
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default CostEstimatorTool;