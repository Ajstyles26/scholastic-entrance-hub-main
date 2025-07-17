import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+234 803 123 4567",
        "+234 805 987 6543"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "admissions@acu.edu.ng",
        "info@acu.edu.ng"
      ]
    },
    {
      icon: MapPin,
      title: "Campus Address",
      details: [
        "Oyo-Ogbomoso Road",
        "Oyo, Oyo State, Nigeria"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 2:00 PM"
      ]
    }
  ];

  return (
    <section className="py-20 bg-university-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Admissions Office
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about the admission process? Our friendly admissions team 
            is here to help you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-university-blue rounded-full group-hover:bg-university-gold transition-colors">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg text-university-blue">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-university-blue mb-6">Get Instant Help</h3>
            <div className="space-y-4">
              <Button variant="university" className="w-full justify-start" size="lg">
                <MessageCircle className="mr-3" />
                Start Live Chat
              </Button>
              
              <Button variant="outline" className="w-full justify-start border-university-blue text-university-blue hover:bg-university-blue hover:text-white" size="lg">
                <Phone className="mr-3" />
                Request a Callback
              </Button>
              
              <Button variant="outline" className="w-full justify-start border-university-blue text-university-blue hover:bg-university-blue hover:text-white" size="lg">
                <Mail className="mr-3" />
                Send Email Inquiry
              </Button>
            </div>

            <div className="mt-8 p-4 bg-university-light-blue rounded-lg">
              <h4 className="font-semibold text-university-blue mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call our hotline.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-university-blue mb-2">
                  What is the application deadline?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Application deadlines vary by semester. Fall semester applications close June 30th, 
                  while Spring semester applications close December 31st.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-university-blue mb-2">
                  Can I apply for multiple programs?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, you can apply for up to two programs per application cycle. 
                  Please indicate your preferences in order of priority.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-university-blue mb-2">
                  Are scholarships available?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer merit-based and need-based scholarships. Visit our 
                  financial aid office or check our website for available opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;