import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, CreditCard, CalendarCheck } from "lucide-react";

const AdmissionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete your online application form with all required documents and information.",
      action: "Start Application"
    },
    {
      icon: CreditCard,
      title: "Pay Application Fee",
      description: "Pay the non-refundable application fee to process your admission request.",
      action: "Pay Fee"
    },
    {
      icon: UserCheck,
      title: "Document Verification",
      description: "Our admissions team will review and verify all submitted documents.",
      action: "Upload Documents"
    },
    {
      icon: CalendarCheck,
      title: "Admission Decision",
      description: "Receive your admission decision and enrollment instructions via email.",
      action: "Check Status"
    }
  ];

  return (
    <section className="py-20 bg-university-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Admission Process
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to begin your journey at Ajayi Crowther University. 
            Our streamlined process makes it easy to apply and track your application status.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="p-4 bg-university-blue rounded-full group-hover:bg-university-gold transition-colors">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-university-gold text-university-blue rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-university-blue">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  {step.description}
                </p>
                <Button variant="outline" size="sm" className="w-full border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-university-blue mb-4">Application Deadlines</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Fall Semester 2024</h4>
                <p className="text-muted-foreground">Early Admission: March 31, 2024</p>
                <p className="text-muted-foreground">Regular Admission: June 30, 2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Spring Semester 2025</h4>
                <p className="text-muted-foreground">Early Admission: October 31, 2024</p>
                <p className="text-muted-foreground">Regular Admission: December 31, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;