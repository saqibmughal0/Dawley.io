"use client"

import { useState } from "react"
import Image from "next/image"

export default function Enrollform() {
  const [formData, setFormData] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("enrollFormData", JSON.stringify(formData))
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div className="relative">
      {/* Alert Notification */}
      {showAlert && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center z-50 animate-fade-in">
          Form submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-6 bg-white mt-5 rounded-lg  text-[14px] font-sans text-[#002060]"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b-4 border-[#002060] pb-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo/Dawley institute logo.png"
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer"
            />
          </div>

          <div className="text-sm font-semibold text-[#002060] mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="whitespace-nowrap">Admission Date:</label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="admissionDay"
                maxLength={2}
                placeholder="DD"
                onChange={handleChange}
                className="w-10 h-8 border border-[#002060] text-center rounded-sm outline-none"
              />
              <input
                type="text"
                name="admissionMonth"
                maxLength={2}
                placeholder="MM"
                onChange={handleChange}
                className="w-10 h-8 border border-[#002060] text-center rounded-sm outline-none"
              />
              <input
                type="text"
                name="admissionYear"
                maxLength={4}
                placeholder="YYYY"
                onChange={handleChange}
                className="w-16 h-8 border border-[#002060] text-center rounded-sm outline-none"
              />
            </div>
          </div>

          <div className="border border-[#002060] w-20 h-24 text-center flex items-center justify-center text-xs font-semibold text-gray-500 mt-4 sm:mt-0">
            Photograph
          </div>
        </div>

        {/* Student's Information */}
        <div className="bg-[#002060] text-white font-semibold px-4 py-2 rounded-t-lg mb-2">
          Student’s Information
        </div>

        <div className="space-y-3 border border-[#002060] rounded-b-lg p-4">
          {/* Name of Student */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="w-44 whitespace-nowrap">Name of Student:</label>
            <input
              type="text"
              name="studentName"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* Father's Name */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="w-44 whitespace-nowrap">Father’s Name:</label>
            <input
              type="text"
              name="fatherName"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* DOB and Contact */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="w-44 whitespace-nowrap">Date of Birth:</label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="dobDay"
                maxLength={2}
                onChange={handleChange}
                className="w-8 border border-[#002060] text-center"
              />
              <input
                type="text"
                name="dobMonth"
                maxLength={2}
                onChange={handleChange}
                className="w-8 border border-[#002060] text-center"
              />
              <input
                type="text"
                name="dobYear"
                maxLength={4}
                onChange={handleChange}
                className="w-14 border border-[#002060] text-center"
              />
            </div>

            <label className="ml-4 w-28 whitespace-nowrap">Contact No:</label>
            <input
              type="text"
              name="contactNo"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* CNIC / Passport / B-Form */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="w-44 whitespace-nowrap">
              CNIC / Passport / B-Form No:
            </label>
            <div className="flex space-x-1">
              <input
                type="text"
                name="cnic1"
                maxLength={5}
                onChange={handleChange}
                className="w-10 border border-[#002060] text-center"
              />
              <span className="border-b border-[#002060] h-6"></span>
              <input
                type="text"
                name="cnic2"
                maxLength={7}
                onChange={handleChange}
                className="w-16 border border-[#002060] text-center"
              />
              <span className="border-b border-[#002060] h-6"></span>
              <input
                type="text"
                name="cnic3"
                maxLength={1}
                onChange={handleChange}
                className="w-6 border border-[#002060] text-center"
              />
            </div>
          </div>

          {/* Parents / Guardian & Email */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="w-44 whitespace-nowrap">Parents / Guardian No:</label>
            <input
              type="text"
              name="guardianNo"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />

            <label className="ml-4 w-32 whitespace-nowrap">Student’s e-mail:</label>
            <input
              type="email"
              name="studentEmail"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* Gender / Nationality */}
          <div className="flex flex-wrap items-center space-x-4 mt-3 text-sm">
            <label className="inline-flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                name="isParent"
                onChange={handleChange}
                className="w-4 h-4 border border-[#002060] text-[#002060] focus:ring-0"
              />
              <span>Parents</span>
            </label>
            <label className="inline-flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                name="isGuardian"
                onChange={handleChange}
                className="w-4 h-4 border border-[#002060] text-[#002060] focus:ring-0"
              />
              <span>Guardian</span>
            </label>

            <span className="ml-6 whitespace-nowrap">Gender:</span>
            <label className="inline-flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                name="isMale"
                onChange={handleChange}
                className="w-4 h-4 border border-[#002060] text-[#002060] focus:ring-0"
              />
              <span>Male</span>
            </label>
            <label className="inline-flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                name="isFemale"
                onChange={handleChange}
                className="w-4 h-4 border border-[#002060] text-[#002060] focus:ring-0"
              />
              <span>Female</span>
            </label>

            <label className="ml-4 whitespace-nowrap">Nationality:</label>
            <input
              type="text"
              name="nationality"
              onChange={handleChange}
              className="border-b border-[#002060] outline-none py-1 w-24"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-3">
            <label className="w-44 whitespace-nowrap">Address:</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* Mode of Study / Prior English */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-3">
            <label className="w-44 whitespace-nowrap">
              Mode of study (On-site / Online / Blended)
            </label>
            <input
              type="text"
              name="modeOfStudy"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />

            <label className="ml-4 whitespace-nowrap">Prior English Study</label>
            <input
              type="checkbox"
              name="priorEnglish"
              onChange={handleChange}
              className="w-4 h-4 border border-[#002060] text-[#002060] focus:ring-0"
            />
          </div>

          {/* IELTS / English Certificate */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-3">
            <label className="w-44 whitespace-nowrap">
              IELTS / English Certificate Details:
            </label>
            <input
              type="text"
              name="ieltsDetails"
              onChange={handleChange}
              className="flex-grow border-b border-[#002060] outline-none py-1"
            />
          </div>

          {/* ================= Education Table ================= */}
          <div className="bg-[#002060] text-white font-semibold px-4 py-2 rounded-t-lg mt-8 mb-2">
            Education
          </div>

          <table className="w-full border border-[#002060] text-sm text-[#002060] mb-8">
            <thead>
              <tr className="border-b border-[#002060]">
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  School/College/University
                </th>
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  Subjects
                </th>
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  Grade
                </th>
                <th className="px-2 py-1 font-bold text-red-700">Year</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((i) => (
                <tr key={i}>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`education_school_${i}`}
                      placeholder="Enter School/College/University"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`education_subjects_${i}`}
                      placeholder="Enter Subjects"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`education_grade_${i}`}
                      placeholder="Enter Grade"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`education_year_${i}`}
                      placeholder="Enter Year"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ================= Work Experience ================= */}
          <div className="bg-[#002060] text-white font-semibold px-4 py-2 rounded-t-lg mb-2">
            Work Experience (if any)
          </div>

          <table className="w-full border border-[#002060] text-sm text-[#002060] mb-8">
            <thead>
              <tr className="border-b border-[#002060]">
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  Company Name
                </th>
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  Skills
                </th>
                <th className="border-r border-[#002060] px-2 py-1 font-bold text-red-700">
                  Designation
                </th>
                <th className="px-2 py-1 font-bold text-red-700">Year</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((i) => (
                <tr key={i}>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`work_company_${i}`}
                      placeholder="Enter Company Name"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`work_skills_${i}`}
                      placeholder="Enter Skills"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`work_designation_${i}`}
                      placeholder="Enter Designation"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                  <td className="border border-[#002060] px-2 py-2">
                    <input
                      type="text"
                      name={`work_year_${i}`}
                      placeholder="Enter Year"
                      onChange={handleChange}
                      className="w-full outline-none text-[#002060]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ================= For Office Use Only ================= */}
          <div className="bg-[#002060] text-white font-semibold px-4 py-2 rounded-t-lg mb-2">
            For Office Use Only
          </div>

          <div className="space-y-3 border border-[#002060] rounded-b-lg p-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <label className="w-44 whitespace-nowrap">Course Name:</label>
              <input
                type="text"
                name="office_courseName"
                onChange={handleChange}
                className="flex-grow border-b border-[#002060] outline-none py-1"
              />
              <label className="ml-4 w-40 whitespace-nowrap">Registration No:</label>
              <input
                type="text"
                name="office_registrationNo"
                onChange={handleChange}
                className="flex-grow border-b border-[#002060] outline-none py-1"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <label className="w-16 whitespace-nowrap">Level:</label>
              <input
                type="text"
                name="office_level"
                onChange={handleChange}
                className="border-b border-[#002060] outline-none py-1 w-24"
              />
              <label className="w-16 whitespace-nowrap ml-4">Shift:</label>
              <input
                type="text"
                name="office_shift"
                onChange={handleChange}
                className="border-b border-[#002060] outline-none py-1 w-24"
              />
              <label className="w-32 whitespace-nowrap ml-4">Admission Fee:</label>
              <input
                type="text"
                name="office_admissionFee"
                onChange={handleChange}
                className="border-b border-[#002060] outline-none py-1 w-28"
              />
              <label className="w-28 whitespace-nowrap ml-4">Course Fee:</label>
              <input
                type="text"
                name="office_courseFee"
                onChange={handleChange}
                className="border-b border-[#002060] outline-none py-1 w-28"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <label className="w-44 whitespace-nowrap">Fee/Payment Method:</label>
              <input
                type="text"
                name="office_paymentMethod"
                onChange={handleChange}
                className="flex-grow border-b border-[#002060] outline-none py-1"
              />
              <label className="ml-4 w-40 whitespace-nowrap">Note/Remarks:</label>
              <input
                type="text"
                name="office_remarks"
                onChange={handleChange}
                className="flex-grow border-b border-[#002060] outline-none py-1"
              />
            </div>
          </div>

          {/* ================= Submit Button ================= */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </div>
        </div>

        {/* ================= Footer ================= */}
        <div className="flex flex-col sm:flex-row justify-between text-white text-xs bg-[#002060] py-2 px-6 rounded-b-lg">
          <div>
            <p>
              <strong>Pakistan Office:</strong> +92 30 111 61 555 <br />
              Nizam Chamber: 7-A Queens Road Jinnah Town, Lahore Pakistan
            </p>
          </div>
          <div className="text-center">
            <p>✉ info@dawley.io</p>
            <p>🌐 www.Dawley.io</p>
          </div>
          <div className="text-right">
            <p>
              <strong>UAE Office:</strong> +971 588 859810 <br />
              E311, Sheikh Mohammad Bin Zayed Road, Al Zahia Sharjah, UAE
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
