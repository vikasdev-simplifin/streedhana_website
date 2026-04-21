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
import { FileText, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { createGinnieApplication } from "@/services/streedhana.service";

const ginnieFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  emailId: z.string().email("Enter valid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  highestQualification: z.string().min(1, "Qualification is required"),
  currentRole: z.string().optional(),
  priorBfsiExperience: z.string().optional(),
  certificationStatus: z.enum(["certified", "willing"]),
  arnNumber: z.string().optional(),
  certificationDays: z.string().optional(),
  comfortableDigitalKyc: z.boolean(),
  comfortableDocumentation: z.boolean(),
  comfortableExplainingRisks: z.boolean(),
  declaration1: z.boolean().refine((val) => val === true, "This declaration is required"),
  declaration2: z.boolean().refine((val) => val === true, "This declaration is required"),
  declaration3: z.boolean().refine((val) => val === true, "This declaration is required"),
});

type GinnieFormValues = z.infer<typeof ginnieFormSchema>;

interface GinnieApplicationFormProps {
  trigger?: React.ReactNode;
}

const GinnieApplicationForm = ({ trigger }: GinnieApplicationFormProps) => {
  const [open, setOpen] = useState(false);
  
  const form = useForm<GinnieFormValues>({
    resolver: zodResolver(ginnieFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      mobileNumber: "",
      emailId: "",
      city: "",
      state: "",
      highestQualification: "",
      currentRole: "",
      priorBfsiExperience: "",
      certificationStatus: "willing",
      arnNumber: "",
      certificationDays: "",
      comfortableDigitalKyc: false,
      comfortableDocumentation: false,
      comfortableExplainingRisks: false,
      declaration1: false,
      declaration2: false,
      declaration3: false,
    },
  });

  const onSubmit = async (data: GinnieFormValues) => {
    try {
      const skills: string[] = [];

      if (data.comfortableDigitalKyc)
        skills.push("Digital KYC processes");

      if (data.comfortableDocumentation)
        skills.push("Documentation & compliance");

      if (data.comfortableExplainingRisks)
        skills.push("Explaining risks & processes clearly");

      const payload = {
        full_name: data.fullName,
        dob: data.dateOfBirth,
        mobile: data.mobileNumber,
        email: data.emailId,
        city: data.city,
        state: data.state,
        highest_qualification: data.highestQualification,

        current_role_and_experience: data.currentRole || "",
        bfsi_finance_experience: data.priorBfsiExperience || "",

        amfi_certification_status:
          data.certificationStatus === "certified"
            ? "Certified"
            : "Willing",

        willing_to_get_certificate_in_days:
          data.certificationStatus === "willing"
            ? Number(data.certificationDays)
            : null,

        // ✅ Send ARN if certified
        arn_number:
          data.certificationStatus === "certified"
            ? data.arnNumber || ""
            : null,

        skills_assessment: skills,

        domain_name: "next.streedhana.com",
      };

      console.log("payload", payload);

      const response = await createGinnieApplication(payload);
      if(response.status === "success"){
        toast({
          title: "Application Submitted!",
          description:
            "Thank you for applying to become a Mutual Fund Ginnie.",
        });

        setOpen(false);
        form.reset();
      }
    } catch (error: any) {
      console.error("Ginnie submission error:", error);

      toast({
        title: "Submission Failed",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
            <FileText className="w-5 h-5 mr-2" />
            Apply to Become a Ginnie
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <DialogTitle className="text-xl font-display text-accent">
                ✨ Mutual Fund Ginnie – Application Form
              </DialogTitle>
              <DialogDescription>
                Join our mission to help women invest the right way
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Educational & Professional Background */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Educational & Professional Background</h3>

              <FormField
                control={form.control}
                name="highestQualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification (Graduate preferred) *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Graduate, Post Graduate, MBA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role / Experience (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your current job role or experience" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priorBfsiExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prior experience in BFSI / finance (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 2 years in banking, insurance agent" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Regulatory Status */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Regulatory Status</h3>
              
              <FormField
                control={form.control}
                name="certificationStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AMFI / NISM V-A Certification Status *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="certified" id="cert-yes" />
                          <Label htmlFor="cert-yes">Already Certified</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="willing" id="cert-willing" />
                          <Label htmlFor="cert-willing">Willing to get certified</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("certificationStatus") === "certified" && (
                <FormField
                  control={form.control}
                  name="arnNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ARN / Candidate ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your ARN or Candidate ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {form.watch("certificationStatus") === "willing" && (
                <FormField
                  control={form.control}
                  name="certificationDays"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Willing to get certified within (days)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 30, 60, 90 days" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Skills Assessment */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Skills Assessment</h3>
              <p className="text-sm text-muted-foreground">Are you comfortable with:</p>
              
              <FormField
                control={form.control}
                name="comfortableDigitalKyc"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label className="font-normal">Digital KYC processes</Label>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comfortableDocumentation"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label className="font-normal">Documentation & compliance</Label>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comfortableExplainingRisks"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label className="font-normal">Explaining risks & processes clearly</Label>
                  </FormItem>
                )}
              />
            </div>

            {/* Mandatory Declarations */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Mandatory Declarations</h3>
              
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
                        I understand that I cannot assure or guarantee returns. *
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
                        I will facilitate investments only through AMFI-registered channels. *
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
                        I will comply with SEBI, AMFI, and StreeDhana policies. *
                      </Label>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Submit Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GinnieApplicationForm;
