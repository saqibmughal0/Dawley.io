import CertificationSection from "@/components/certificationSection/CertificationSection";
import Companylogo from "@/components/companyslogo/Companylogo";
import { FaqContactSection, faqData } from "@/components/faqcontact";
import Header from "@/components/header/Header";
import Location from "@/components/location/Location";
// import Longcourse from "@/Components/longcourse/Longcourse";
import Navtechcourses from "@/components/navtechcourses/Navtechcourses";
import Recognition from "@/components/recognition/Recognition";
import Shortcourses from "@/components/shortcourses/Shortcourses";
import Studentcertificate from "@/components/studentcertificate/Studentcertificate";
import StudentTestimonials from "@/components/studenttestimonials/StudentTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <CertificationSection />
      {/* <Longcourse /> */}
      <Shortcourses />
      <Navtechcourses />
      <Studentcertificate />
      <Recognition />
      <StudentTestimonials />
      <FaqContactSection {...faqData} />
      <Companylogo />
      <Location />
    </>
  );
}
