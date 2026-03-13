'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <button
          onClick={onClose}
          className="float-right text-gray-500"
        >
          X
        </button>
        <SignIn routing="modal" path="/sign-in" />
      </div>
    </div>
  );
}
