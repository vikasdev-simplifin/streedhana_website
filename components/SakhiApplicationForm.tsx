"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const sakhiFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  emailId: z.string().email("Enter valid email address"),
  city: z.string().min(2, "City is required"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
  highestQualification: z.string().min(1, "Qualification is required"),
  currentOccupation: z.string().min(1, "Occupation is required"),
  languages: z.string().min(2, "At least one language is required"),
  motivation: z.string().min(10, "Please share your motivation").max(500),
  experienceDetails: z.string().optional(),
  hasExperience: z.enum(["yes", "no"]),
  sessionTypes: z.array(z.string()).min(1, "Select at least one option"),
  declaration1: z.boolean().refine((val) => val === true, "This declaration is required"),
  declaration2: z.boolean().refine((val) => val === true, "This declaration is required"),
  declaration3: z.boolean().refine((val) => val === true, "This declaration is required"),
});

type SakhiFormValues = z.infer<typeof sakhiFormSchema>;

interface SakhiApplicationFormProps {
  trigger?: React.ReactNode;
}

const SakhiApplicationForm = ({ trigger }: SakhiApplicationFormProps) => {
  const [open, setOpen] = useState(false);
  
  const form = useForm<SakhiFormValues>({
    resolver: zodResolver(sakhiFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      mobileNumber: "",
      emailId: "",
      city: "",
      district: "",
      state: "",
      highestQualification: "",
      currentOccupation: "",
      languages: "",
      motivation: "",
      experienceDetails: "",
      hasExperience: "no",
      sessionTypes: [],
      declaration1: false,
      declaration2: false,
      declaration3: false,
    },
  });

  const onSubmit = (data: SakhiFormValues) => {
    console.log("Sakhi Application Submitted:", data);
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying to become a Mutual Fund Sakhi. We will contact you soon.",
    });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant='gredient' size="lg" >
            <FileText className="w-5 h-5 mr-2" />
            Apply to Become a Sakhi
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-display text-primary ">

                🌸
                <span className="text-gradient">

                  Mutual Fund Sakhi – Application Form
                </span>
              </DialogTitle>
              <DialogDescription>
                Join our mission to empower women through financial literacy
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            {/* Basic Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Basic Details</h3>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth (18+ mandatory) *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emailId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email ID *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>District *</FormLabel>
                      <FormControl>
                        <Input placeholder="District" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Background Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Background Information</h3>

              <FormField
                control={form.control}
                name="highestQualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Graduate, Post Graduate, 12th Pass" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentOccupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Occupation *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="homemaker">Homemaker</SelectItem>
                        <SelectItem value="working_professional">Working Professional</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher_trainer">Teacher / Trainer</SelectItem>
                        <SelectItem value="social_worker_ngo">Social Worker / NGO</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Languages You Can Communicate In *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Hindi, English, Tamil, Telugu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Interest & Motivation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Interest & Motivation</h3>

              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to become a Mutual Fund Sakhi? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your motivation..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have experience in teaching, counselling, or community work? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="exp-yes" />
                          <Label htmlFor="exp-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="exp-no" />
                          <Label htmlFor="exp-no">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("hasExperience") === "yes" && (
                <FormField
                  control={form.control}
                  name="experienceDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief details of your experience</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your experience..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Availability</h3>
              
              <FormField
                control={form.control}
                name="sessionTypes"
                render={() => (
                  <FormItem>
                    <FormLabel>Are you willing to conduct: *</FormLabel>
                    <div className="space-y-3 mt-2">
                      {[
                        { id: "online", label: "Online awareness sessions" },
                        { id: "offline", label: "Offline community sessions" },
                        { id: "one-on-one", label: "One-on-one guidance (education only)" },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="sessionTypes"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked: any) => {
                                    const current = field.value || [];
                                    if (checked) {
                                      field.onChange([...current, item.id]);
                                    } else {
                                      field.onChange(current.filter((v) => v !== item.id));
                                    }
                                  }}
                                />
                              </FormControl>
                              <Label className="font-normal">{item.label}</Label>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Mandatory Declaration */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Mandatory Declaration</h3>
              
              <FormField
                control={form.control}
                name="declaration1"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="font-normal text-sm">
                        I understand that as a Mutual Fund Sakhi, my role is limited to financial literacy and awareness only. *
                      </Label>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="declaration2"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="font-normal text-sm">
                        I will not recommend, sell, or execute any investment product. *
                      </Label>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="declaration3"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="font-normal text-sm">
                        I will follow the StreeDhana Sakhi Code of Conduct. *
                      </Label>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button variant="gredient" type="submit" size="lg" className="w-full ">
              Submit Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SakhiApplicationForm;
