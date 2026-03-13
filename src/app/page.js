import Companylogo from "@/Components/companyslogo/Companylogo";
import { FaqContactSection, faqData } from "@/Components/faqcontact";
import Header from "@/Components/header/Header";
import Location from "@/Components/location/Location";
import Longcourse from "@/Components/longcourse/Longcourse";
import Navtechcourses from "@/Components/navtechcourses/Navtechcourses";
import Shortcourses from "@/Components/shortcourses/Shortcourses";
import Studentcertificate from "@/Components/studentcertificate/Studentcertificate";
import StudentTestimonials from "@/Components/studenttestimonials/StudentTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Longcourse />
      <Shortcourses />
      <Navtechcourses />
      <Studentcertificate />
      <StudentTestimonials />
      <FaqContactSection {...faqData} />
      <Companylogo />
      <Location />
    </>
  );
}
