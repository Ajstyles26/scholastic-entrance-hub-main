import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Requirements = () => {
  const programs = [
    {
      category: "Undergraduate Programs",
      requirements: [
        "Senior Secondary School Certificate (SSCE) with minimum 5 credits including English and Mathematics",
        "JAMB UTME score of minimum 180",
        "Completed application form with passport photographs",
        "Birth certificate or declaration of age",
        "Local Government Area Certificate of Origin"
      ]
    },
    {
      category: "Postgraduate Programs",
      requirements: [
        "First degree from a recognized university with minimum Second Class Lower Division",
        "Official transcripts from all previous institutions",
        "Two academic references",
        "Statement of purpose (500-1000 words)",
        "Curriculum Vitae (CV)",
        "English proficiency test (for international students)"
      ]
    },
    {
      category: "International Students",
      requirements: [
        "Equivalent qualifications to Nigerian requirements",
        "English proficiency test (IELTS/TOEFL)",
        "Valid passport and visa documentation",
        "Medical certificate and vaccination records",
        "Financial guarantee or scholarship documentation",
        "Academic credentials evaluation by NECO"
      ]
    }
  ];

  const documents = [
    "Completed application form",
    "Academic transcripts/certificates",
    "Passport photographs (recent)",
    "Birth certificate/age declaration",
    "Certificate of origin",
    "Medical fitness certificate",
    "Character reference letters"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Admission Requirements
          </h2>
          <p className="text-lg text-muted-foreground">
            Review the specific requirements for your desired program level. 
            Ensure you meet all criteria before submitting your application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-university-blue flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-university-gold" />
                  {program.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-university-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-university-light-blue/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-university-blue mb-6 text-center">
            Required Documents Checklist
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((document, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-university-gold flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{document}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-university-gold">
            <h4 className="font-semibold text-university-blue mb-2">Important Note:</h4>
            <p className="text-muted-foreground text-sm">
              All documents must be original or certified true copies. International documents 
              require authentication by relevant authorities. Incomplete applications will not be processed.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex gap-3 flex-wrap justify-center">
            <Badge variant="secondary" className="px-4 py-2">Application Fee: ₦15,000</Badge>
            <Badge variant="secondary" className="px-4 py-2">Processing Time: 2-4 weeks</Badge>
            <Badge variant="secondary" className="px-4 py-2">Results via Email & SMS</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;