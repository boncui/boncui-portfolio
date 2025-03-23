"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react"; // Use `useActionState` instead of `useFormState`
import { submitContactForm } from "../../../app/actions"; // Import fixed Server Action

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, { message: "" });

  return (
    <Card className="p-6">
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        {state.message && (
          <p className="text-sm text-center mt-4 text-muted-foreground">{state.message}</p>
        )}
      </form>
    </Card>
  );
}
