"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FaCreditCard, FaPaypal, FaApple } from "react-icons/fa";


export default function Page() {
    const [method, setMethod] = useState("bank");

    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT SIDE - USER INFO FORM */}
            <div className="border p-6 h-[350px] rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Customer Details</h2>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-2 border rounded"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-2 border rounded"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 border rounded"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded"
                    />
                </form>
            </div>

            {/* RIGHT SIDE - PAYMENT METHOD */}

            <Card className="w-full md:w-[450px]">
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Add a new payment method to your account.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                        <div>
                            <RadioGroupItem value="card" id="card" className="peer sr-only" aria-label="Card" />
                            <Label
                                htmlFor="card"
                                className="border-muted hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4">
                                <FaCreditCard className="mb-3 size-6" />
                                Card
                            </Label>
                        </div>

                        <div>
                            <RadioGroupItem
                                value="paypal"
                                id="paypal"
                                className="peer sr-only"
                                aria-label="Paypal"
                            />
                            <Label
                                htmlFor="paypal"
                                className="border-muted hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4">
                                <FaPaypal className="mb-3 size-6" />
                                Paypal
                            </Label>
                        </div>

                        <div>
                            <RadioGroupItem value="apple" id="apple" className="peer sr-only" aria-label="Apple" />
                            <Label
                                htmlFor="apple"
                                className="border-muted hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4">
                                <FaApple className="mb-3 size-6" />
                                Apple
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name on the card</Label>
                        <Input id="name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="number">Card number</Label>
                        <Input id="number" placeholder="" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="month">Expires</Label>
                            <Select>
                                <SelectTrigger className="w-full" id="month" aria-label="Month">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">January</SelectItem>
                                    <SelectItem value="2">February</SelectItem>
                                    <SelectItem value="3">March</SelectItem>
                                    <SelectItem value="4">April</SelectItem>
                                    <SelectItem value="5">May</SelectItem>
                                    <SelectItem value="6">June</SelectItem>
                                    <SelectItem value="7">July</SelectItem>
                                    <SelectItem value="8">August</SelectItem>
                                    <SelectItem value="9">September</SelectItem>
                                    <SelectItem value="10">October</SelectItem>
                                    <SelectItem value="11">November</SelectItem>
                                    <SelectItem value="12">December</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Year</Label>
                            <Select>
                                <SelectTrigger className="w-full" id="year" aria-label="Year">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                            {new Date().getFullYear() + i}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="CVC" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Pay</Button>
                </CardFooter>
            </Card>
        </div>

    );
}
