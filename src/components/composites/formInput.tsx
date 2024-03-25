import React from "react";
import { Label } from "../ui/label";
type Props = {
  forInput: string;
  label: string;
  children: React.ReactNode;
};
export default function FormInput({ forInput, label, children }: Props) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={forInput}>{label}</Label>
      {children}
    </div>
  );
}
