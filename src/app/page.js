import CertificationSection from "@/Components/certificationSection/CertificationSection";
import Companylogo from "@/Components/companyslogo/Companylogo";
import { FaqContactSection, faqData } from "@/Components/faqcontact";
import Header from "@/Components/header/Header";
import Location from "@/Components/location/Location";
// import Longcourse from "@/Components/longcourse/Longcourse";
import Navtechcourses from "@/Components/navtechcourses/Navtechcourses";
import Recognition from "@/Components/recognition/Recognition";
import Shortcourses from "@/Components/shortcourses/Shortcourses";
import Studentcertificate from "@/Components/studentcertificate/Studentcertificate";
import StudentTestimonials from "@/Components/studenttestimonials/StudentTestimonials";

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
